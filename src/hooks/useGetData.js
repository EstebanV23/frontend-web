import { useEffect, useState } from 'react'

export default function useGetData (callback, condition) {
  const [loading, setLoading] = useState(true)
  const [data, setCompanies] = useState([])

  useEffect(() => {
    setLoading(true)
    callback()
      .then(data => {
        setCompanies(data.data)
        setLoading(false)
      })
  }, [condition])
  return { data, loading }
}
