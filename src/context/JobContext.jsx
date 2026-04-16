import { createContext, useState, useEffect } from "react";
// import { jobs as initialJobs } from "../data/jobs";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : initialJobs;
  });

  const deleteJob = (id) => {
  setJobs((prev) => prev.filter((job) => job.id !== id));
};

    // ✅ Save whenever jobs change
  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  return (
    <JobContext.Provider value={{ jobs, setJobs, deleteJob }}>
      {children}
    </JobContext.Provider>
  );
};