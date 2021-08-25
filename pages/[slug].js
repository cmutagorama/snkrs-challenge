import { useRouter } from 'next/router';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Pagination from '../components/Pagination';
import ProductList from '../components/ProductList';
import Skeleton from '../components/Skeleton';
import { getProducts } from '../lib/api';
import Error from './_error';

const pageSize = 12;

function SlugPage() {
	const router = useRouter();
	const { s: queryParam } = router.query;

	if (queryParam === 'in-stock') {
		const [currentPage, setCurrentPage] = useState(1);
		const { data: products, isLoading, error } = useQuery('getProducts', getProducts);
		
		if (isLoading) {
			return (
				<div className="grid-columns">
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
					<Skeleton />
				</div>
			)
		};
		if (error) return <Error statusCode={error.message} />;

		const firstPageIndex = (currentPage - 1) * pageSize;
		const lastPageIndex = firstPageIndex + pageSize;
		const paginatedProducts = products.slice(firstPageIndex, lastPageIndex);

		return (
			<>
				{ products.length > 0 ? (
					<>
						<ProductList products={paginatedProducts}/>
						<Pagination
							currentPage={currentPage}
							totalCount={products.length}
							pageSize={pageSize}
							onPageChange={page => setCurrentPage(page)}
						/>
					</>
					) : (
						<div className="flex justify-center">
							<h3 className="text-xl font-semibold">No product available at the moment.</h3>
						</div>
					)
				}
			</>
		);
	} else {
		return <h4>Upcoming items</h4>
	}
}

export default SlugPage;