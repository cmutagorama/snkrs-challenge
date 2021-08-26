import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const mainLinks = ['Gift cards', 'Promotions', 'Sign Up for email', 'Find a store', 'Become a member', 'Nike Journal', 'Send Us feedback'];
const secondaryLinks = ['Order Status', 'Shipping and delivery', 'Returns', 'Payment Options', 'Gift card balance', 'Contact Us'];
const tertiaryLinks = ['News', 'Careers', 'Investors', 'Purpose', 'Sustainability'];
const Footer = () => (
	
	<footer className="footer-1 py-8 sm:py-12">
		<div className="container mx-auto px-4">
			<div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
				<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
					{
						mainLinks.map((elt, index) => (
							<h5 className="text-white font-bold cursor-pointer mb-2" key={index}>{ elt }</h5>
						))
					}
				</div>
				<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
					<h5 className="text-white font-bold cursor-pointer mb-2">Get Help</h5>
					<ul className="list-none footer-links">
						{
							secondaryLinks.map((elt, index) => (
								<li className="mb-2" key={index}>
									<Link href="/">{ elt }</Link>
								</li>
							))
						}
					</ul>
				</div>
				<div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
					<h5 className="text-white font-bold cursor-pointer mb-2">About Nike</h5>
					<ul className="list-none footer-links">
						{
							tertiaryLinks.map((elt, index) => (
								<li className="mb-2" key={index}>
									<Link href="/">{ elt }</Link>
								</li>
							))
						}
					</ul>
				</div>
				<div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
					<div className="flex sm:justify-center xl:justify-start footer-icons">
						<a href="twitter.com" target="_blank" className="w-8 h-8 border border-gray-400 rounded-full text-center py-1 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faTwitter}/>
						</a>
						<a href="facebook.com" target="_blank" className="w-8 h-8 border border-gray-400 rounded-full text-center py-1 ml-2 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a href="youtube.com" target="_blank" className="w-8 h-8 border border-gray-400 rounded-full text-center py-1 ml-2 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faYoutube}/>
						</a>
						<a href="instagram.com" target="_blank" className="w-8 h-8 border border-gray-400 rounded-full text-center py-1 ml-2 hover:bg-gray-50 hover:border-gray-50">
							<FontAwesomeIcon icon={faInstagram}/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;