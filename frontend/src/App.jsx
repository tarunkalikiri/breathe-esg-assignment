import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [records, setRecords] = useState([])
  const [file, setFile] = useState(null)

  const BASE_URL =
    'https://breathe-esg-assignment-sf55.onrender.com'

  const fetchRecords = async () => {

    try {

      const response = await axios.get(
        `${BASE_URL}/api/records/`
      )

      setRecords(response.data)

    } catch (error) {

      console.log(error)

    }
  }

  const approveRecord = async (id) => {

    try {

      await axios.post(
        `${BASE_URL}/api/approve/${id}/`
      )

      fetchRecords()

    } catch (error) {

      console.log(error)

    }
  }

  const uploadFile = async () => {

    if (!file) {

      alert('Please select CSV file')

      return
    }

    const formData = new FormData()

    formData.append('file', file)

    formData.append('source_type', 'SAP')

    try {

      await axios.post(
        `${BASE_URL}/api/upload/`,
        formData
      )

      alert('CSV uploaded successfully')

      fetchRecords()

    } catch (error) {

      console.log(error)

      alert('Upload failed')
    }
  }

  useEffect(() => {

    fetchRecords()

  }, [])

  return (

    <div style={{ padding: '40px' }}>

      <h1>Breathe ESG Dashboard</h1>

      <p>
        Enterprise ESG ingestion and analyst review platform
      </p>

      <div style={{ marginTop: '20px' }}>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={uploadFile}
          style={{
            marginLeft: '10px'
          }}
        >
          Upload CSV
        </button>

      </div>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: '100%',
          marginTop: '20px',
          backgroundColor: 'white'
        }}
      >

        <thead>

          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Scope</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Status</th>
            <th>Suspicious</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {records.map((record) => (

            <tr key={record.id}>

              <td>{record.id}</td>

              <td>{record.category}</td>

              <td>{record.scope}</td>

              <td>{record.quantity}</td>

              <td>{record.unit}</td>

              <td>{record.status}</td>

              <td>
                {
                  record.suspicious
                    ? '⚠️ Yes'
                    : 'No'
                }
              </td>

              <td>

                {
                  record.status !== 'APPROVED'
                  &&
                  (
                    <button
                      onClick={() => approveRecord(record.id)}
                    >
                      Approve
                    </button>
                  )
                }

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default App