import potato from '../assets/potato.svg';
import honey from '../assets/honey.svg';
import milk from '../assets/milk.svg';
import eggs from '../assets/eggs.svg';
import apples from '../assets/apples.svg';

const localImages = { 1: potato, 2: honey, 3: milk, 4: eggs, 5: apples };

function ProductCard({ product, onAdd, featured }) {
  return <article data-testid="product-card" className={featured ? 'card card--featured' : 'card'}>
    {featured && <span className="badge">Товар недели</span>}
    <img src={localImages[product.id] || product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p className="price">{product.price} тг</p>
    <button onClick={() => onAdd(product)}>В корзину</button>
  </article>;
}
export default ProductCard;
