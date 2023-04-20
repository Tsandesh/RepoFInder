import React from "react";
import { useSelector } from "react-redux";
import RepoList from "./RepoList";

const Repo = () => {
  const data = useSelector((state) => state.setRepo.contents);
  //   const repos = data?.items.length;

  return (
    <>
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className>Total results Found :{data?.total_count || ""}</h1> <br />
        {/* <div>{data?.items.length}</div> */}
        {data?.items.length > 0
          ? data.items.map((repo) => <RepoList repo={repo} />)
          : "No Repositories Found"}
      </div>
    </>
  );
};

export default Repo;
