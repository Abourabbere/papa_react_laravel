import React, { useState } from 'react'
import SignIn from './SignIn'
import Login from './Login'

function Log({Inscription, Connection}) {

    const [sign, setSign] = useState(true)

  return (
    <div>
        {
            sign ? <Login Inscription={() => setSign(false)} /> : <SignIn  Connection={() => setSign(true)} />
        }
    </div>
  )
}

export default Log