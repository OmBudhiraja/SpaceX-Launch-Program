import React, { useState, useEffect } from "react";
import "./App.css";
import FilterContainer from "./components/filters/FilterContainer";
import Result from "./components/results/Result";
import { fetchData } from "./components/utils/fetchData";
import Loader from "./components/utils/Loader";
import { allFiltersUrl } from "./api";

function App() {
  const [year, setYear] = useState(null);
  const [landing, setLanding] = useState(null);
  const [launch, setLaunch] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(allFiltersUrl(year, launch, landing)).then((res) =>
      setData(res.data)
    );
  }, [year, launch, landing]);

  return (
    <>
      <h1>SpaceX Launch Program</h1>
      <div className="container">
        <FilterContainer
          setData={setData}
          setYear={setYear}
          setLanding={setLanding}
          setLaunch={setLaunch}
        />
        { data ? (
          <>
            {data.length ? (
              <Result data={data} />
            ) : (
              <div className="no-item-container">
                No item to show.
              </div>
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
      <h2>
        Developed by: <span>Om Budhiraja</span>
      </h2>
    </>
  );
}

export default App;
