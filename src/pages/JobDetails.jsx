import { useParams } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from "../context/JobContext";

function JobDetails() {
  const { id } = useParams();
  const { jobs } = useContext(JobContext);

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) return <p>Job not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
    </div>
  );
}

export default JobDetails;