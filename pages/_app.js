import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';
import NextNProgress from '../components/Progressbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<NextNProgress />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</QueryClientProvider>
	);
}

export default MyApp
