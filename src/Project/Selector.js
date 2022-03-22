import React,{useState} from 'react'

const Selector = (num) => {
    const [num,setNum]=useState();

  return (
    <div>
        <h6>{num}</h6>
<select onChange={(e)=> setNum(e.target.value)}>
    <option value='25'>25</option>
    <option value='50'>50</option>
    <option value='100'>100</option>
    <option value='200'>200</option>

</select>

    </div>
  )
}

export default Selector