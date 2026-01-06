import React, { useState, useEffect } from "react";
import "../ApiWithSearchCategory/ApiWithSearch.scss";

const Test = () => {
  const [store, setStore] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Api is failed");
        return res.json();
      })
      .then((data) => {
        setStore(data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const categories = ["Category", ...new Set(store.map((p) => p.category))];
  const brands = ["all", ...new Set(store.map((p) => p.brand).filter(Boolean))];

  useEffect(() => {
    const filtered = store.filter((prdts) => {
      const matchSearch = prdts.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category === "all" || category === prdts.category;
      const matchBrand = brand === "all" || brand === prdts.brand;

      return matchSearch && matchCategory && matchBrand
    });
    setFilter(filtered);
  }, [store, search, category,brand]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error :{error}</h2>;

  return (
    <>
      <div className="product-list__head">
        <h1>The Products Are....</h1>
     {/* <div className="product-list__filter"> */}
         <input
        className="product-list__search"
        placeholder="Search Products Here....."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="product-list__category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
        <select className="product-list__brands" value={brand} onChange={(e)=>setBrand(e.target.value)}>
          {brands.map((b)=>(
            <option key={b} value={b}>
              {b.toUpperCase()}
            </option>
          ))}
        </select>
     {/* </div> */}
      </div>
      <div className="product-list__grid">
        {filter.length > 0 ? (
          filter.map((prdt) => (
            <div key={prdt.id} className="product-list__card">
              <img src={prdt.thumbnail} alt={prdt.title} />
              <h2 className="product-list__title">{prdt.title}</h2>
              <p className="product-list__price">Price:{prdt.price}</p>
            </div>
          ))
        ) : (
          <h2>product not found</h2>
        )}
      </div>
    </>
  );
};

export default Test;
