'use client'
import { useState } from 'react'

export default function Counter() {
  const [state, setState] = useState(0)
  const [value, setValue] = useState('')

  return (
    <>
      <p>State: {state}</p>
      <button onClick={() => setState(state + 1)}>Increase</button>
      <form
        onSubmit={e => {
          e.preventDefault()
          setState(parseInt(value))
        }}
      >
        <input value={value} onChange={e => setValue(e.target.value)} />
        <button>Submit</button>
      </form>
    </>
  )
}
