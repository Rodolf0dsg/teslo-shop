import { useSearchParams } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page') || '1';
  const page = isNaN(+queryPage) ? 1 : +queryPage;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    searchParams.set('page', page.toString());

    setSearchParams(searchParams);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
        className='cursor-pointer'
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {Array.from({ length: totalPages }).map((_, index) => (
        <Button
          key={index}
          variant={page === index + 1 ? 'default' : 'outline'}
          size="sm"
          onClick={() => handlePageChange(index + 1)}
          className='cursor-pointer'
        >
          {index + 1}
        </Button>
      ))}

      {/* {Array.from({ length: totalPages }).map((_, index) => {
          const pageNumber = index + 1;
          const isVisible =
            pageNumber === 1 ||
            pageNumber === totalPages ||
            Math.abs(pageNumber - page) <= 2;

          return isVisible ? (
            <Button
              key={index}
              variant={page === pageNumber ? 'default' : 'outline'}
              size="sm"
              onClick={() => handlePageChange(pageNumber)}
              className="cursor-pointer"
            >
              {pageNumber}
            </Button>
          ) : (
            pageNumber === page - 3 || pageNumber === page + 3 ? (
              <span key={index} className="px-2">...</span>
            ) : null
          );
        })} */}

      <Button
        variant="outline"
        size="sm"
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
        className='cursor-pointer'
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};