import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa'


const Cart = (props) => {
    return (
        <div className="productList">
            <div className="productCart" key={props.id}>
                <img src={props.image} alt="imagehere" className='productImage' />
                <FaShoppingCart className='productCard_cart' />
                <FaRegBookmark className='productCart_wishlist' />
                <FaFireAlt className='productCard_fastSelling' />
                <div className="productCard_content">
                    <h3 className='productName'>{props.name}</h3>
                    <div className="displayStack_1">
                        <div className="productPrice">${props.price}</div>
                        <div className="productSales">{props.totalSales}unit sold</div>

                    </div>
                    <div className="displaystack_2">
                        <div className="productRating">
                            {[...Array(props.rating)].map((index) => (
                                <FaStar id={index + 1} key={index} />
                            ))}
                        </div>
                        <div className="productTime">{props.timeLeft}days left</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart