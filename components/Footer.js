import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
	<footer className="footer-1 py-8 sm:py-12">
		<div className="container mx-auto px-4">
			<div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
				<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
					<h5 className="text-white font-bold mb-2">Gift cards</h5>
					<h5 className="text-white font-bold mb-2">Promotions</h5>
					<h5 className="text-white font-bold mb-2">Sign Up for email</h5>
					<h5 className="text-white font-bold mb-2">Find a store</h5>
					<h5 className="text-white font-bold mb-2">Become a member</h5>
					<h5 className="text-white font-bold mb-2">Nike Journal</h5>
					<h5 className="text-white font-bold mb-2">Send Us feedback</h5>
				</div>
				<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
					<h5 className="text-white font-bold mb-2">Get Help</h5>
					<ul className="list-none footer-links">
						<li className="mb-2">
							<Link href="/">Order Status</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Shipping and delivery</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Returns</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Payment Options</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Gift card balance</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Contact Us</Link>
						</li>
					</ul>
				</div>
				<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
					<h5 className="text-white font-bold mb-2">About Nike</h5>
					<ul className="list-none footer-links">
						<li className="mb-2">
							<Link href="/">News</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Careers</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Investors</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Purpose</Link>
						</li>
						<li className="mb-2">
							<Link href="/">Sustainability</Link>
						</li>
					</ul>
				</div>
				<div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
					<div className="flex sm:justify-center xl:justify-start footer-icons">
						<a href="#" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faTwitter}/>
						</a>
						<a href="#" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a href="#" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faYoutube}/>
						</a>
						<a href="#" className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faInstagram}/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;