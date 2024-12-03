"use client";
import { kidsProducts, menProducts, womenProducts } from "@/app/data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./style.css"
import { Provider, useDispatch } from "react-redux";
import { addtocart } from "@/store/slices/product";
import { meraStore } from "@/store/store";

export default function Page(){
  return <Provider store={meraStore}>
    <Product></Product>
  </Provider>
}
 
 function Product() {
  let dispatch = useDispatch();
  let[ad,setad]= useState({});
    let params = useParams();
    const allProducts =[...menProducts, ...womenProducts,...kidsProducts]
    useEffect(()=>{
        let adAgya= allProducts.find((ad)=>{
            if(decodeURI(params.abc)==ad.name){
                return true;
            }
        });
        if(adAgya){
            setad(adAgya)
        }
    },[])
   return (
     <div>
      <div className="container">
      <h1>{params.abc}</h1>
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-5">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <img  src={ad.src} />
              </div>
            </div>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{ad.name}</h3>
            <div className="rating">
              <div className="stars">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
             
            </div>
            <p className="product-description">
            A shoe is a type of footwear that covers the foot and protects it with a sole. There are various styles of shoes for different occasions, such as athletic shoes, dress shoes, sandals, and boots.
            </p>
            <h4 className="price">
              current price: <span>{ad.price}</span>
            </h4>
            <p className="vote">
              <strong>91%</strong> of buyers enjoyed this product!{" "}
            
            </p>
            <h5 className="sizes">
              sizes:
              <span className="size" data-toggle="tooltip" title="small">
                s
              </span>
              <span className="size" data-toggle="tooltip" title="medium">
                m
              </span>
              <span className="size" data-toggle="tooltip" title="large">
                l
              </span>
              <span className="size" data-toggle="tooltip" title="xtra large">
                xl
              </span>
            </h5>
           
            <div className="action">
              <button onClick={()=>{
                dispatch(addtocart(ad))
              }}
               
                className="add-to-cart btn btn-default"
                type="button"
              >
                add to cart
              </button>
      
            </div>
          </div>
        </div>
      </div>
    </div>
       
     </div>
   )
 }
 