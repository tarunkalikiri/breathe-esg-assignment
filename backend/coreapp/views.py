import pandas as pd

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Tenant, DataSource, EmissionRecord
from .serializers import EmissionRecordSerializer


@api_view(['GET', 'POST'])
def upload_csv(request):

    if request.method == 'GET':
        return Response({
            "message": "Upload CSV using POST request"
        })

    csv_file = request.FILES['file']
    source_type = request.data.get('source_type')

    df = pd.read_csv(csv_file)

    tenant, _ = Tenant.objects.get_or_create(
        name="Demo Enterprise"
    )

    data_source = DataSource.objects.create(
        tenant=tenant,
        source_type=source_type,
        file_name=csv_file.name
    )

    created_rows = []

    for _, row in df.iterrows():

        quantity = float(row.get('quantity', 0))

        suspicious = False

        if quantity <= 0:
            suspicious = True

        if quantity > 100000:
            suspicious = True

        record = EmissionRecord.objects.create(
            tenant=tenant,
            data_source=data_source,

            category=row.get('category', 'Unknown'),

            scope=row.get('scope', 'Scope 3'),

            activity_date=row.get('activity_date'),

            description=row.get('description', ''),

            quantity=quantity,

            unit=row.get('unit', 'unknown'),

            normalized_quantity=quantity,

            normalized_unit=row.get('unit', 'unknown'),

            suspicious=suspicious,

            raw_payload=row.to_dict()
        )

        created_rows.append(record)

    serializer = EmissionRecordSerializer(
        created_rows,
        many=True
    )

    return Response(serializer.data)


@api_view(['GET'])
def get_records(request):

    records = EmissionRecord.objects.all().order_by('-created_at')

    serializer = EmissionRecordSerializer(
        records,
        many=True
    )

    return Response(serializer.data)


@api_view(['POST'])
def approve_record(request, record_id):

    record = EmissionRecord.objects.get(id=record_id)

    record.status = 'APPROVED'

    record.save()

    return Response({
        "message": "Record approved"
    })