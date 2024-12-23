import React from 'react'
import Country from './Country'

export default function List({country}) {
  return (
    <div className='row'>
      {
        country.length>0 && country.map((item,index)=>(
          <Country key={index}item={item}/>
        ))
      }
    </div>
  )
}
