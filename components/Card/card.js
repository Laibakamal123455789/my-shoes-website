import React from 'react'
import "./card.css"
import Link from 'next/link'
export default function Card({meraAdd}) {
  return <div className="card" style={{ width: "18rem" }}>
    <Link href={"/product-detail/" + meraAdd.name}>
  <img className="card-img-top" src={meraAdd.src} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{meraAdd.name}</h5>
    <p className="card-text ">
      price Rs.{meraAdd.price}
    </p>
    {/* <a href="#" className="btn btn-primary">
     Add to Cart
    </a> */}
  </div>
    </Link>
</div>
   
}
