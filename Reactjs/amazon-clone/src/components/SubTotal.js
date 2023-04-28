import React from 'react'
import '../style/subTotal.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";

export default function SubTotal() {

    const [{ basket }] = useStateValue();


    return (
        <div className='subTotal'>
            {/* price */}

            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"€"}
            />
            <button>proceed chekout</button>

        </div>
    )
}


