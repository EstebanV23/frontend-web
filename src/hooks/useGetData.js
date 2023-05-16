import { useEffect, useState } from 'react'

export default function useGetData (callback) {
  const [loading, setLoading] = useState(true)
  const [data, setCompanies] = useState([])

  useEffect(() => {
    setLoading(true)
    callback()
      .then(data => {
        setCompanies(data.data)
        setLoading(false)
      })
  }, [])
  return { data, loading }
}
