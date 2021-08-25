import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePagination } from '../hooks/usePagination';

const Pagination = (props) => {
	const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
	} = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
	});

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

   const lastPage = paginationRange[paginationRange.length - 1];
	
	return (
		<div className="flex items-center justify-center mb-4 mt-12">
			<button
				disabled={currentPage === 1}
				className="pag-item"
				type="button"
				onClick={onPrevious}>
				<FontAwesomeIcon icon={faAngleLeft} />
			</button>
			{
				paginationRange.map((item, index) => {
					if (item === 'DOTS') {
						return (
							<button
								key={index}
								className="pag-item"
								type="button">&#8230;
							</button>
						)
					}

					return (
						<button
							key={index}
							className={ currentPage === item ? "pag-item active-item" : "pag-item" }
							type="button"
							onClick={() => onPageChange(item)}>
							{item}
						</button>
					)
				})
			}
			<button
				disabled={currentPage === lastPage}
				className="pag-item"
				type="button"
				onClick={onNext}>
				<FontAwesomeIcon icon={faAngleRight} />
			</button>
		</div>
	)
}

export default Pagination