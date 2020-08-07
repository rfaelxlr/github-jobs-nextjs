import { Pagination } from "react-bootstrap";
export default function JobsPagination({ page, setPage,hasNextPage  }) {
  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount);
  }
  return (
    <div>
      <div className=" flex mx-auto mb-4 w-2/3 md:max-w-6xl xl:max-w-4xl">
        <Pagination>
          {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
          {page !== 1 && (
            <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>
          )}
          {page > 2 && <Pagination.Ellipsis />}
          {page > 2 && (
            <Pagination.Item onClick={() => adjustPage(-1)}>
              {page - 1}
            </Pagination.Item>
          )}
          <Pagination.Item active>{page}</Pagination.Item>
          {hasNextPage && (
            <Pagination.Item onClick={() => adjustPage(1)}>
              {page + 1}
            </Pagination.Item>
          )}
          {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
        </Pagination>
      </div>
    </div>
  );
}
