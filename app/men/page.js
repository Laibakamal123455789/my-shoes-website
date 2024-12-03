import React from 'react'
import Card from '@/components/Card/card'
import { menProducts } from '../data'
export default function Page() {
  return (
    <div className='card-container'>
        {menProducts.map((a2)=>{
        return <Card meraAdd={a2} ></Card>
        })
    }
    
   </div>
  )
}
