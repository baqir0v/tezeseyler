import React, { useState } from 'react'

function Counter() {
    const [count,SetCount] = useState(0)

    function increase() {
        SetCount(p=>p+1)
    }
    function decrease() {
        SetCount(p=>p-1)
    }
  return [count,increase,decrease]
}

export default Counter