import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { fetchData } from "../store/searchSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const getData = async () => {
    // const res = await api.get(`/search/repositories?q=${query}`);
    dispatch(fetchData(query));
  };
  return (
    <div className="w-full d-flex justify-content-center mt-2 p-5">
      <div className="input-group mb-3 w-50 mr-5">
        <input
          type="email"
          className="form-control  border-primary rounded-4"
          id="exampleFormControlInput1"
          placeholder="Search For Repositories ....."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn btn-outline-primary ml-2 "
          type="button"
          id="button-addon2"
          onClick={getData}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
