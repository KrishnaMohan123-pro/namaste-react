import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const {
        title,
        brand,
        category,
        price,
        discountPercentage,
        images,
        rating,
        id,
    } = props.data;
    return (
        <div className='res-card'>
            {/* Link behind the scenes uses anchor tag, it is just a wrapper */}
            <Link to={`/product/${id}`}>
                <img src={images.length > 0 ? images[0] : ''} />
                <h3>{title}</h3>
                <h4>{brand}</h4>
                <h4>{category}</h4>
                <h4>$ {price}</h4>
                <h4>{rating} Rating</h4>
            </Link>
        </div>
    );
};

export default RestaurantCard;
