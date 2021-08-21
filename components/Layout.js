import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
	return (
		<div className="flex flex-col h-screen">
			<Nav />

			<main className="flex-grow">
				<div className="max-w-7xl mx-auto p-4">
					{children}
				</div>
			</main>

			<Footer />
		</div>
	);
}

export default Layout