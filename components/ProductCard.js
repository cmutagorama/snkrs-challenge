import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const ProductCard = ({ product }) => {
	const [sBtn, showBtn] = useState(false);

	return (
		<Link href={{ pathname: `/t/${product.slug}`, query: { v: product.id } }} passHref>
			<div className="max-w-sm rounded overflow-hidden hover:cursor-pointer" onMouseEnter={() => showBtn(true)} onMouseLeave={() => showBtn(false)}>
				<div className="w-full">
					<Image src={product.imagePreview} height="500" width="400" alt=""/>
				</div>
				<div className="px-6 py-4">
					{
						!sBtn ?
							<div className="text-center">
								<p>{product.name}</p>
								<p className="text-gray-700 text-base">Rattan Birch</p>
							</div> :
							<div className="text-center">
								<button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">{ !product.state ? 'Buy' : 'Notify Me'  }</button>
							</div>
					}
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;