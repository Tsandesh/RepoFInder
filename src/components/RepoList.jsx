import React from "react";
import repo from "/book.svg";

const RepoList = ({
  repo: {
    full_name,
    description,
    stargazers_count,
    language,
    forks_count,
    clone_url,
    created_at,
    updated_at,
    owner: { login, avatar_url, url, repos_url },
  },
}) => {
  // console.log(props);
  return (
    <div className="w-100 d-flex justify-content-center mt-2 p-3 ">
      <div className="col-sm-9 ">
        <div className="card shadow">
          <div className="card-body d-flex flex-row p-3">
            <div className="col-sm-8">
              <h3 className="card-title">
                <img src={repo} width={25} alt="" />
                {full_name}
              </h3>
              <p className="card-text w-full">{description}</p>
              <div className="d-flex flex-row">
                <p className=" text-center">
                  {" "}
                  <img src="star.png" width={25} alt="" />
                  {stargazers_count}
                </p>

                <p className="px-3 mx-2 bg-info rounded text-white text-center ">
                  {language}
                </p>

                <p className="px-3 mx-2 bg-info rounded text-white text-center ">
                  Fork Count:{forks_count}
                </p>
              </div>

              <a
                href={clone_url}
                target="_blank"
                className="btn btn-primary mt-2"
              >
                Go to Repo
              </a>
            </div>
            <div className="col-sm-4 d-flex flex-column justify-content-center align-items-center border-left">
              <img
                src={avatar_url}
                width={70}
                alt=""
                className="border rounded-circle p-2"
              />
              <p>{login}</p>
              <div>
                {" "}
                <a href={url} className="mr-3">
                  Visit my profile
                </a>
                <a href={repos_url}>My Repos</a>
              </div>

              <p>Created at : {created_at.toString().slice(0, 10)}</p>
              <p>Update at : {updated_at.toString().slice(0, 10)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoList;
