import React from 'react'
import '../style/Product.css'

export default function Product({id, title, image, price, rating}) {
  return (
   <>
        <div className="product">
            <p>{title}</p>
            <p className='product__price'>
              <small>€</small>
              <strong>{price}</strong>
            </p>
        </div>
        <div className="product__rating">
          {
          Array(rating)
          .fill("azaz")
          .map(() =>
          <p>☆</p> )
          }
        </div>

        <img src={image} alt="" />
        <button> Add to basket</button> 
        {/* button comes from material UI - throw an error */}




        {/* 2:23:32 build product component */}
   </>
  )
}

