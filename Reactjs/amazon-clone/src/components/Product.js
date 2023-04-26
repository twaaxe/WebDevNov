import React from 'react'
import '../style/Product.css'

export default function Product({ id, title, image, price, rating }) {
  return (
    <>



      <div className="product">
        <p>{title}</p>
        <p className='product__price'>
          <small>€</small>
          <strong>{price}</strong>
        </p>

        <img src={image} alt="" />
        <div className="product__rating">
          {
            Array(rating)
              .fill("azaz")
              .map(() =>
                <p>☆</p>)
          }
        </div>

        <button> Add to basket</button>
      </div>
      {/* button comes from material UI - throw an error */}



    </>
  )
}

