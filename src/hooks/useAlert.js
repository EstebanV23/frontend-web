import { useEffect, useState } from 'react'

export default function useAlert () {
  const [alert, setAlert] = useState(false)
  useEffect(() => {
    let setTimeAlert
    if (alert) {
      setTimeAlert = setInterval(() => {
        setAlert(false)
      }, 3500)
    }

    return () => {
      clearInterval(setTimeAlert)
    }
  }, [alert])

  return [alert, setAlert]
}
