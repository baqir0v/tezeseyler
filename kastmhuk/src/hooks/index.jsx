import React, { useState } from 'react'

function Togglehook() {
    const [value,setValue] = useState(false)
    const toggle = ()=>{
        setValue(!value)
    }
    return {value, toggle}
}

export default Togglehook