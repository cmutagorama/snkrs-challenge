import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

function Layout({ children }) {
	return (
		<>
			<Head>
				<link
					rel="preload"
					href="/fonts/GTWalsheimProRegular.ttf"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/GTWalsheimProMedium.ttf"
					as="font"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href="/fonts/GTWalsheimProBold.ttf"
					as="font"
					crossOrigin=""
				/>
      </Head>
			<div className="flex flex-col h-screen">
				<Nav />

				<main className="flex-grow">
					<div className="max-w-7xl mx-auto md:p-4 sm:p-0">
						{children}
					</div>
				</main>

				<Footer />
			</div>
		</>
	);
}

export default Layout