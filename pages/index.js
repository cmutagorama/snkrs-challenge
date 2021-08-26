import ProductList from "../components/ProductList";
import shoe1 from '../public/images/s-1.jpg';
import shoe2 from '../public/images/s-2.jpg';
import shoe3 from '../public/images/s-3.jpg';
import shoe4 from '../public/images/s-4.jpg';
import shoe5 from '../public/images/s-5.jpg';
import shoe6 from '../public/images/s-6.jpg';

export default function Home() {
	const prods = [
		{
			id: 1,
			slug: "air-jordan-low",
			imagePreview: shoe1,
			name: "Air Jordan 1 Low",
			state: true
		},
		{
			id: 2,
			slug: "big-kids-dunk-low",
			imagePreview: shoe2,
			name: "Big Kids' Dunk Low",
			state: true
		},
		{
			id: 3,
			slug: "air-huarache-low",
			imagePreview: shoe3,
			name: "Air Huarache",
			state: true
		},
		{
			id: 4,
			slug: "air-jordan-four",
			imagePreview: shoe4,
			name: "Air Jordan 4",
			state: true
		},
		{
			id: 5,
			slug: "",
			imagePreview: shoe5,
			name: "",
			state: true
		},
		{
			id: 6,
			slug: "ldwaffle-sacal-fragment",
			imagePreview: shoe6,
			name: "LDWaffle x sacal x Fragment",
			state: true
		},
	];

	return (<ProductList products={prods} />);
}
