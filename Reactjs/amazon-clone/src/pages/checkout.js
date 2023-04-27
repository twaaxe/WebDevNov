import { useStateValue } from "../StateProvider";
import advert from "../components/img/advertising.jpg"
import "../style/Checkout.css"
import CheckoutProduct from '../components/CheckoutProduct';

export default function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <>
            <div className="checkout">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_-jpg" alt="advertisement" />


                {
                    basket?.length === 0 ?
                        (
                            <div>
                                <h2>Your shopping basket is empty</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, repellendus vel debitis sequi molestiae dolor adipisci accusamus quia soluta praesentium!</p>
                            </div>
                        )

                        :

                        (
                            <div>
                                <h2 className="checkout__title">Your shopping basket :</h2>
                                {/* list of chosen product */}
                                {basket.map(item => (
                                    <CheckoutProduct
                                        item={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                                }
                            </div>
                        )
                }


            </div>
        </>

    )
}