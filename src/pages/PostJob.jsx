import { useState, useContext, useEffect } from "react";
import { JobContext } from "../context/JobContext";

function PostJob() {
  const { jobs, setJobs } = useContext(JobContext);

  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  const newJob = {
    id: Date.now(), // ✅ better than jobs.length + 1
    ...form,
  };

    setJobs([...jobs, newJob]);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Post a Job</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })} />

        <input className="form-control mb-2" placeholder="Company"
          onChange={(e) => setForm({ ...form, company: e.target.value })} />

        <input className="form-control mb-2" placeholder="Location"
          onChange={(e) => setForm({ ...form, location: e.target.value })} />

        <textarea className="form-control mb-2" placeholder="Description"
          onChange={(e) => setForm({ ...form, description: e.target.value })} />

        <button className="btn btn-success">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;