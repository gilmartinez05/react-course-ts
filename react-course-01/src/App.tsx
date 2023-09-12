import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'


//JSX ->  - JavaScript XML

interface User {
  username: string
  fullName: string
}
function App() {

  const [number, setNumber] = useState(14)
  const [user, setUser] = useState<User>({ username: '', fullName: '' })

  const usernameRef = useRef<HTMLInputElement>(null)
  const fullNameRef = useRef<HTMLInputElement>(null)

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value
  //   const name = e.target.name
  //   setUser((prev) => {
  //     return { ...prev, [name]: value }
  //   })


  //   // user: { username:'jose' , fullName:'Jose Martinez'. age:19, job:'CancunIT' }mmm 

  //   // {...user, age:25}
  // }
  const sendData = () => {
    setUser({ username: usernameRef.current?.value ?? '', fullName: fullNameRef.current?.value ?? '' })
    setNumber(15)
  }

  const userMemo = useMemo(() => {
    return { ...user }
  }, [user])

  useEffect(() => {
    console.log('User cambio ', userMemo)
  }, [userMemo])


  return (
    <main>
      <input name="username" ref={usernameRef} />
      <input name="fullName" ref={fullNameRef} />
      <button onClick={sendData}>
        Enviar
      </button>

      {user.fullName} - {user.username}
      Number: {number}
    </main>
  )
}

export default App
