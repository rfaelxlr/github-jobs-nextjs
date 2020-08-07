import Nav from "../components/nav";
import useFetchJobs from "../components/useFetchJobs";
import Job from "../components/Job";
import JobPagination from "../components/JobsPagination";
import SearchForm from "../components/SearchForm";
import { useState } from "react";

export default function IndexPage() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  return (
    <div className="bg-gray-100">
      <Nav />

      <div className="container max-w-full mx-auto  mt-10 mb-5">
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />

        {loading && <h1>Loading...</h1>}
        {error && <h1>Error. Try Refreshing.</h1>}
        {jobs.map((job) => {
          return <Job key={job.id} job={job} />;
        })}
        <JobPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </div>
  );
}
