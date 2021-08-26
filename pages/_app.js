import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';
import NextNProgress from '../components/Progressbar';
import SEO from '../components/SEO';
import { CartProvider } from '../contexts/cart';
import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();

	return (
		<CartProvider>
			<QueryClientProvider client={queryClient}>
				<NextNProgress />
				<SEO title="SNKRS" />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</QueryClientProvider>
		</CartProvider>
	);
}

export default MyApp
