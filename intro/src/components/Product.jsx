import React from 'react'
import { useParams } from 'react-router-dom'
export default function Product() {
    let {pname} = useParams()
  return (
    <div>
<h1>Name: {pname}</h1>
    </div>
  )
}
