import Image from "next/image"
import { useContext, useState } from "react";
import { useQuery } from "react-query";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "../../components/Loader";
import CartContext from "../../contexts/cart";
import Error from "../_error";

const BASE_URL = 'https://6121021d24d11c001762eefb.mockapi.io/api/v1';

const getProductById = async (id) => {
	const res = await fetch(`${BASE_URL}/prods/${id}`);
	return res.json();
};

const getShoesById = async (id) => {
	const res = await fetch(`${BASE_URL}/shoes/${id}`);
	return res.json();
};

function ProductDetails(props) {
	const [size, setSize] = useState('');
	const [cart, addTocart] = useContext(CartContext);

	const id = props.query.v;
	const { data: product } = useQuery(['getProductById', id], () => getProductById(id));
	const shoeId =  product && product.shoeId;

	const { data: shoe, isLoading, error } = useQuery(
		['getShoesByProduct', shoeId],
		() => getShoesById(shoeId),
		{ enabled: !!shoeId }
	);

	if (isLoading) return <Loader/>;
	if (error) return <Error statusCode={error.message} />;

	const sizes = shoe && shoe.sizes;

	const onSizeSelect = (e) => setSize(e.currentTarget.value);

	const handleClick = () => {
		if (size === '') return toast.error('You must choose the size first');
		
		const existingItem = cart.find((i) => i.id === product.id);
		if (!!existingItem) {
			existingItem.quantity = existingItem.quantity + 1;
			return toast.success('The quantity has been increased');
		}

		addTocart({
			id: product.id,
			name: product.name,
			size,
			quantity: 1,
			price: product.price
		});
		return toast.success('An item has been added to your cart');
	}

	if (product && shoe) {
		return (
			<>
				<Toaster position="top-right" />
				<Image src={shoe.imageUrl} width="1280" height="650" alt="Random image" />
				<div className="flex justify-center md:my-16">
					<div className="text-center md:w-2/5">
						<p className="text-2xl font-medium mb-2">{product.name}</p>
						<p>{product.description}</p>
					</div>
				</div>
				<Image src={shoe.imageUrl} width="1280" height="650" alt="Random image" />
				<div className="flex justify-center md:my-7">
					<div className="text-center md:w-3/12">
						<p className="text-xl mb-2">{product.name}</p>
						<p className="text-2xl font-medium mb-2">White</p>
						<p>{`$${product.price}`}</p>
					</div>
				</div>

				<div className="md:flex justify-center  sm:px-5">
					<div className="md:w-4/12">
						<div className="grid grid-cols-2 gap-0">
							{ sizes.map((elt, index) => (
									<div className="sizes" key={index}>
										<button className={ size ===  shoe.abbreviation + " " + elt.size ? "selected-size" : ""} disabled={elt.available} value={shoe.abbreviation + " " + elt.size} onClick={onSizeSelect}>
											{shoe.abbreviation} {elt.size}
										</button>
									</div>
								))
							}
						</div>
					</div>
				</div>
				<div className="md:flex justify-center mt-4">
					<div className="add-to">
						<button
							disabled={sizes.length === 0 || size === ''}
							onClick={handleClick}
							className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-5 rounded-full"
						>
							Add to Cart
						</button>
					</div>
				</div>
			</>
		);
	} else return <Loader/>;
}

export async function getServerSideProps(context) {
	return {
		props: {
				query: context.query
		}
	}
}

export default ProductDetails;