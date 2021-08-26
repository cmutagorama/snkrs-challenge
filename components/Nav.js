import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import CartContext from "../contexts/cart";

const Nav = () => {
	const router = useRouter();
	const [menu, showMenu] = useState(false);
	const toggleNav = () => showMenu(!menu);
	const [cart, addTocart] = useContext(CartContext);

	return (
		<nav className="bg-white border-b-2 border-gray-200">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex justify-between">
					<div className="hover:cursor-pointer">
						<Link href="/" passHref>
							<div className="flex items-center py-4 px-2">
								<svg fill="#FF0017" fillRule="nonzero" width="50px" height="35px" viewBox="0 0 50 34" role="img">
									<title>Nike Sneakers Web</title>
									<path d="M13.3.728c-2.102 2.34-3 3.732-3.482 5.389-.44 1.512-.207 2.76.671 3.626.697.69 1.437.947 2.717.947 1.041 0 1.932-.17 3.237-.615.715-.238 23.795-9.812 23.952-9.93a.03.03 0 0 0 0-.045c-.012-.012-5.075 1.3-11.254 2.918-6.174 1.612-11.468 2.986-11.763 3.048-.816.17-2.152.157-2.73-.025a2.52 2.52 0 0 1-1.605-1.505c-.126-.308-.145-.477-.145-1.086.007-.897.17-1.499.722-2.628.207-.42.37-.784.357-.797-.018-.012-.32.307-.677.703zM3.79 16.713c-2.184.495-3.67 2.434-3.771 4.93-.05 1.193.182 2.083.765 2.987.308.458 1.286 1.436 1.945 1.938 1.148.872 1.462 1.293 1.399 1.876-.044.364-.232.621-.602.797-.897.445-2.183-.107-3.231-1.387l-.232-.282v5.213l.42.132c.853.27 1.13.301 2.622.301 1.337 0 1.475-.012 1.914-.144 1.324-.414 2.403-1.317 3.005-2.503.113-.22.257-.54.32-.722l.119-.332v1.8l.006 1.807h4.266l.013-3.914.019-3.915 1.505 3.896 1.512 3.902 1.832.019 1.832.012V16.75h-4.266l-.013 3.551-.018 3.545-1.004-3.545-1.004-3.55H8.469v4.811c-.006 4.8-.006 4.818-.125 4.492-.301-.84-.904-1.606-1.85-2.346-.371-.289-.885-.697-1.149-.904-.621-.49-.89-.878-.89-1.292 0-.264.03-.345.225-.552.257-.289.54-.402.991-.395.496.012 1.242.407 1.794.953l.44.433v-4.686l-.402-.163c-.847-.333-1.324-.427-2.359-.452-.677-.013-1.091.006-1.355.063zM45.056 16.744c-.25.063-.702.232-.997.383-.91.451-1.794 1.418-2.196 2.396-.088.22-.163.408-.175.414-.013.013-.12-.182-.239-.439-.728-1.562-2.164-2.428-4.435-2.679-.464-.056-2.096-.069-5.515-.056l-4.855.019-1.073 2.283-1.073 2.278-.019-2.297-.012-2.296h-4.392v16.374h4.392v-3.438l.006-3.431 1.324 3.431 1.33 3.438h8.318l.02-2.246c.006-1.23.006-2.704 0-3.274-.007-.571.012-.992.037-.942.025.05.564 1.525 1.198 3.275l1.148 3.18 2.641.032c1.45.02 3.194.05 3.877.076 1.105.031 1.286.018 1.788-.1a4.936 4.936 0 0 0 3.275-2.592c.377-.753.515-1.361.552-2.365.082-2.152-.552-3.319-2.647-4.893-1.468-1.098-1.788-1.638-1.35-2.259.44-.62 1.463-.583 2.366.088.376.276 1.085 1.004 1.085 1.11 0 .032.032.057.063.057.038 0 .063-.878.063-2.503V17.27l-.364-.163c-.715-.32-1.324-.433-2.553-.458-.948-.019-1.205-.006-1.588.094zM31.041 27.773l-.018 3.375-1.487-3.588c-.822-1.97-1.493-3.608-1.493-3.639 0-.025.67-1.443 1.486-3.143l1.494-3.1.018 3.363c.007 1.851.007 4.881 0 6.732zm5.603-7.215c.608.345.928 1.035.853 1.87-.088 1.091-.778 1.844-1.688 1.85h-.364v-3.971l.433.032c.333.025.515.081.766.22zm6.198 4.869c.295.307.822.784 1.167 1.06.345.276.759.608.928.746.954.803.703 1.939-.477 2.152-.771.138-2.139-.615-2.766-1.524-.1-.145-.207-.257-.232-.257-.032 0-.063.614-.07 1.36l-.018 1.356-.96-1.989c-.533-1.098-.954-1.995-.941-2.001.652-.326.834-.458 1.248-.86.377-.37.534-.59.747-1.016l.27-.546.282.477c.157.27.515.722.822 1.042z"></path>
								</svg>
							</div>
						</Link>
					</div>

					{/* Primary Nav */}
					<ul>
						<div className="hidden md:flex items-center space-x-1">						
								<Link href="/" passHref>
									<li className={router.asPath === "/" ? "nav-link active-link p5 text-gray-700" : "nav-link p5 text-gray-700" }>
										Feed
									</li>
								</Link>
								<Link href="/launch?s=in-stock" passHref>
									<li className={router.asPath === "/launch?s=in-stock" ? "nav-link active-link p-5 text-gray-500" : "nav-link p-5 text-gray-500"}>
										In Stock
									</li>
								</Link>
								<Link href="/launch?s=upcoming" passHref>
									<li className={router.asPath === "/launch?s=upcoming" ? "nav-link active-link p-5 text-gray-500" : "nav-link p-5 text-gray-500"}>
										Upcoming
									</li>
								</Link>
						</div>
					</ul>
					<div className="hidden md:flex items-center">
						<Link href="/cart" passHref>
							<div className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-600">
								<span className="relative flex hover:cursor-pointer">
									<svg className="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
										<path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
									</svg>
									{ cart.length > 0 && (
										<span className="cart-badge">{cart.length}</span>
									 )
									}
								</span>
							</div>
						</Link>
					</div>

					{/* Hamburger button */}
					<div className="md:hidden flex items-center">
						<button className="outline-none mobile-menu-button" onClick={toggleNav}>
							<svg
								className="w-6 h-6 text-gray-500"
								x-show="!showMenu"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Nav on mobile device */}
			<div className={menu ? "" : "hidden"}>
				<ul className="pl-4">
					<Link href="/" passHref>
						<li className="nav-link active block text-sm px-2 py-4 text-gray-700 font-semibold">Feed</li>
					</Link>
					<Link href="/launch?s=in-stock" passHref>
						<li className="nav-link block text-sm px-2 py-4 hover:text-gray-700 transition duration-300">In Stock</li>
					</Link>
					<Link href="/launch?s=upcoming" passHref>
						<li className=" nav-link block text-sm px-2 py-4 hover:text-gray-700 transition duration-300">Upcoming</li>
					</Link>
					<Link href="/cart" passHref>
						<li className="nav-link block text-sm px-2 py-4 hover:text-gray-700 transition duration-300">Cart</li>
					</Link>
				</ul>
			</div>
		</nav>
	)
};

export default Nav