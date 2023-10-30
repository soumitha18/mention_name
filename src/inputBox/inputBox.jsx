import { useState } from 'react';

export default function InputBox() {

    const [data, setData] = useState("")

    const handleChange = (e) =>{
      setData(e.target.value)
    }

    return (
        <>
            <input type="text" placeholder='Mention' value={data} onChange={handleChange} />
        </>
    )
}