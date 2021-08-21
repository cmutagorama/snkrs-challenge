import ProductCard from '../components/ProductCard';

export default function Home() {
	const products = [1, 2, 3, 4, 5, 6];

	return (
		<div className="grid lg:gap-x-8 lg:gap-y-4 lg:grid-cols-3 md:gap-6 md:grid-cols-1">
			{
				products.map((p, index) => <ProductCard key={index}/>)
			}
		</div>
  )
}
