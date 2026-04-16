import { useContext, useState } from "react";
import { JobContext } from "../context/JobContext";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import "./Home.css"


function Home() {
  const { jobs } = useContext(JobContext);
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="m-4">

      <h2 className="mb-3">Find Your Dream Job 💼</h2>

      <SearchBar setSearch={setSearch} />
      <div className="grid-class">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>


    </div>
  );
}

export default Home;