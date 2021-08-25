import ProductCard from "./ProductCard";

const ProductList = ({ products }) => (
	<div className="grid-columns">
		{
			products.map((product, index) => <ProductCard product={product} key={index}/>)
		}
	</div>
);

export default ProductList;