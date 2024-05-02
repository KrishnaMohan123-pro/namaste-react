import { useParams } from 'react-router-dom';
import { useGetProduct } from '../utils/useGetProduct';
import Shimmer from './Shimmer';

const Product = () => {
    const { id } = useParams();
    // making code modular
    const product = useGetProduct(id);

    if (product.length === 0) return <Shimmer />;
    console.log(product);
    return (
        <div className='product container'>
            <h1>{product.brand + ' ' + data.title}</h1>
            <h4>{product.description}</h4>
            <img src={product.thumbnail} />
            <h5>$ {product.price}</h5>
        </div>
    );
};

export default Product;
