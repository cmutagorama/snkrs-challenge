import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import CartContext from "../contexts/cart";

const Cart = () => {
	const shippingFee = 10;
	const [cart, addTocart] = useContext(CartContext);
	const subtotal = cart.reduce((accumulator, { price, quantity }) => {
		return accumulator + (price * quantity);
	}, 0);

	const total = subtotal + shippingFee;

	return (
		<div className="bg-gray-100 container mx-auto mt-10">
			<div className="md:flex shadow-md my-10 sm:flex-row">
				<div className="md:w-3/4 sm:w-full bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">Shopping Cart</h1>
						<h2 className="font-semibold text-2xl">{cart.length} { cart.length === 0 || cart.length > 1 ? 'Items' : 'Item'}</h2>
					</div>
					<div className="flex mt-10 mb-5">
						<h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
					</div>
					{
						cart.length > 0 ? (
							<>
								{
									cart.map((product, index) => (
										<div className="flex items-center -mx-8 px-6 py-5" key={index}>
											<div className="flex w-2/5">
												<div className="w-20">
													<Image src={`https://picsum.photos/80/96?random=${product.id}`} width="80" height="96" alt="Product image" />
												</div>
												<div className="flex flex-col justify-between ml-4 flex-grow">
													<span className="font-bold text-sm">{product.name}</span>
													<span className="text-red-500 text-xs">Size: {product.size}</span>
													<span className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</span>
												</div>
											</div>
											<div className="flex justify-center w-1/5">
												<button className="border border-gray-300 bg-gray-300 px-2 py-1.5 rounded-md">
													<FontAwesomeIcon icon={faMinus} className="text-gray-600" />
												</button>

												<input className="mx-2 border text-center w-8" type="text" value={product.quantity} />

												<button className="border border-gray-300 bg-gray-300 px-2 py-1.5 rounded-md">
													<FontAwesomeIcon icon={faPlus} className="text-gray-600" />
												</button>
											</div>
											<span className="text-center w-1/5 font-semibold text-sm">${product.price}</span>
											<span className="text-center w-1/5 font-semibold text-sm">${product.price * product.quantity}</span>
										</div>
									))
								}								
							</>
						) : <div className="flex justify-center -mx-8 px-6 py-5"><h4>Your cart is empty</h4></div>
					}

					<Link href="/" passHref>	
						<span className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer">
							<svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
								<path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
							</svg>
							Continue Shopping
						</span>
					</Link>
				</div>
				
				{	cart.length > 0 && (
						<div className="md:w-1/4 sm:w-full px-8 py-10" style={{ backgroundColor: '#f6f6f6' }}>
							<h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
							<div className="flex justify-between mt-10 mb-5">
								<span className="font-semibold text-sm uppercase">Items</span>
							<span className="font-semibold text-sm">${ subtotal }</span>
							</div>
							<div>
								<label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
								<select className="block p-2 text-gray-600 w-full text-sm">
								<option>Standard shipping - ${shippingFee}</option>
								</select>
							</div>
							<div className="py-10">
								<label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
								<input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
							</div>
							<button className="bg-green-500 hover:bg-green-700 px-5 py-2 text-sm text-white uppercase rounded-md">Apply</button>
							<div className="border-t mt-8">
								<div className="flex font-semibold justify-between py-6 text-sm uppercase">
									<span>Total cost</span>
									<span>${ total }</span>
								</div>
								<button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-md">Checkout</button>
							</div>
						</div>
					)
				}
			</div>
		</div>
	);
};

export default Cart