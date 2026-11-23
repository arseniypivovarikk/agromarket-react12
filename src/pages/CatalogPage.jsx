import ProductCard from '../components/ProductCard.jsx';
export default function CatalogPage({products=[], loading=false, error=null, searchTerm='', onSearchChange=()=>{}, onAddToCart=()=>{}}) {
 const filtered=products.filter(p=>p.name.toLowerCase().includes(searchTerm.toLowerCase()));
 return <section id="catalog" className="catalog"><div className="catalog-toolbar"><h2>Каталог</h2><input type="search" placeholder="Поиск товара..." value={searchTerm} onChange={e=>onSearchChange(e.target.value)} /></div>
 {loading && <p className="status">Загрузка...</p>} {error && <p className="error" role="alert">{error}</p>}
 {!loading && !error && (filtered.length ? <div className="product-grid">{filtered.map(product=><ProductCard key={product.id} product={product} onAdd={onAddToCart} featured={product.id===1}/>)}</div> : <p>Товаров пока нет</p>)} </section>;
}
