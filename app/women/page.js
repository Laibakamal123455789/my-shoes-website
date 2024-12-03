import React from 'react'
import Card from '@/components/Card/card'
import {womenProducts } from '../data'
import Productdetail from '../product-detail/[abc]/page'
export default function Page() {
  return (
    <div className='card-container'  >
      {
          womenProducts.map((a2)=>{
          return <Card meraAdd={a2} ></Card>
        })
      }
    </div>
  )
  
}