import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
	return (
		<div className="flex flex-col h-screen">
			<Nav />
			
			<main className="p-4 flex-grow">{children}</main>

			<Footer />
		</div>
	);
}

export default Layout