const RestaurantCard = (props) => {
    const { info } = props.data;
    return (
        <div className='res-card'>
            <img src={info.image.urlWithParams} />
            <h3>{info.name}</h3>
            <h4>
                {info.cuisine.reduce(
                    (acc, ele) => (acc += ele.name + ', '),
                    ''
                )}
            </h4>
            <h4>{info.rating.aggregate_rating} Stars</h4>
            <h4>{info.costText.text}</h4>
        </div>
    );
};

export default RestaurantCard;
