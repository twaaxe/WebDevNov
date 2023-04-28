import React from 'react'
import '../style/Product.css'
import { useStateValue } from "../StateProvider";

export default function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })

  }

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

        <button onClick={addToBasket}> Add to basket</button>
      </div>
      {/* button comes from material UI - throw an error */}



    </>
  )
}

