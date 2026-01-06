import React, { useState, useEffect } from "react";
import "./Test.scss";

const ApiWithSearch = () => {
  const [store, setStore] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Api Failed");
        return res.json();
      })
      .then((data) => {
        setStore(data.products);
      })
      .catch((er) => {
        setError(er.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = store.filter((prdts) =>
      prdts.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilter(filtered);
  },[search,store]);

  if (loading) return <h2>Loading</h2>;
  if (error) return <h2>Error :{error}</h2>;

  return (
    <>
      <h1 className="OuterDiv__head">The Products Are...</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="OuterDiv">
        {filter.length > 0 ? (
          filter.map((prdt) => (
            <div key={prdt.id} className="OuterDiv__inner">
              <img src={prdt.thumbnail} alt={prdt.title} />
              <h2>{prdt.title}</h2>
              <p>Price:{prdt.price}</p>
            </div>
          ))
        ) : (
          <h1>not found</h1>
        )}
      </div>
    </>
  );
};

export default ApiWithSearch;

//.includes(...)
// Checks if the search term appears anywhere inside the product title string."lap" will find "Laptop"

//prdts.convert lowercase, so "Lap" and "lap" match the same.

//  const brands = ["all", ...new Set(store.map((p) => p.brand).filter(Boolean))];
//filter(Boolean) = Some products not include brand
// {break.touppercase()} is undefined.toUpperCase() ❌