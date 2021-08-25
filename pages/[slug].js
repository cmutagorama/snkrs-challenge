import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { NotAvailable } from '../components/NotAvailable';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import Skeleton from '../components/Skeleton';
import { getProducts } from '../lib/api';
import { range } from '../utils/helper';
import Error from './_error';

const pageSize = 12;

function SlugPage() {
	const router = useRouter();
	const { s: queryParam } = router.query;

	const [currentPage, setCurrentPage] = useState(1);
	const { data: products, isLoading, error } = useQuery('getProducts', getProducts);
	
	if (isLoading) {
		return (
			<div className="grid-columns">
				{
					range(1, pageSize).map((elt, idx) => <Skeleton key={idx} />)
				}
			</div>
		)
	};
	if (error) return <Error statusCode={error.message} />;

	const firstPageIndex = (currentPage - 1) * pageSize;
	const lastPageIndex = firstPageIndex + pageSize;
	const paginatedProducts = products.slice(firstPageIndex, lastPageIndex);

	return (
		<>
			{ queryParam === 'in-stock' && (
					products.length > 0 ? (
						<>
							<ProductList products={paginatedProducts} />
							<Pagination
								currentPage={currentPage}
								totalCount={products.length}
								pageSize={pageSize}
								onPageChange={page => setCurrentPage(page)}
							/>
						</>
					) : (
						<NotAvailable/>
					)
				)
			}
			{
				queryParam === 'upcoming' && <h4>Upcoming items</h4>
			}
		</>
	);
}

export default SlugPage;