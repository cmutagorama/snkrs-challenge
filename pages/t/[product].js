import Image from "next/image"
import { useQuery } from "react-query";
import Loader from "../../components/Loader";
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

	if (product && shoe) {
		return (
			<>
				<Image src={shoe.imageUrl} width="1280" height="650" />
				<div className="flex justify-center md:my-16">
					<div className="text-center md:w-2/5">
						<p className="text-2xl font-medium mb-2">{product.name}</p>
						<p>{product.description}</p>
					</div>
				</div>
				<Image src={shoe.imageUrl} width="1280" height="650" />
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
									<div className="add-to" key={index}>
										<button disabled={elt.available}>
											{shoe.abbreviation} {elt.size}
										</button>
									</div>
								))
							}
						</div>
					</div>
				</div>
				<div className="md:flex justify-center mt-4">
					<div>
						<button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-5 rounded-full">Add to Cart</button>
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