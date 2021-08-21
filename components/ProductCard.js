import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import pic from '../public/shoes-1.jpg';

const ProductCard = ({ }) => {
	const [sBtn, showBtn] = useState(false);
	return (
		<Link href="/t/id">
			<div className="max-w-sm rounded overflow-hidden hover:cursor-pointer" onMouseEnter={() => showBtn(true)} onMouseLeave={() => showBtn(false)}>
				<div className="w-full">
					<Image src={pic} alt="Mountain"/>
				</div>
				<div className="px-6 py-4">
					{
						!sBtn ?
							<div className="text-center">
								<p>ACG Air Mowabb</p>
								<p className="text-gray-700 text-base">Rattan Birch</p>
							</div> :
							<div className="text-center">
								<button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">Notify me</button>
							</div>
					}
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;