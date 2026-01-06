import React, { useState, useEffect } from "react";
import "./ApiWithSearch.scss";

const ApiWithSearch = () => {
  const [store, setStore] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Api is Failed");
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

  // Categories derived from store products
  const categories = ["all", ...new Set(store.map((p) => p.category))];

  // Filter products when search, category, or store changes
  useEffect(() => {
    const filtered = store.filter((prdtt) => {
      const matchSearch = prdtt.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category === "all" || prdtt.category === category;
      return matchSearch && matchCategory;
    });
    setFilter(filtered);
  }, [search, category, store]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <div className="product-list__head">
        <h1>The Products are...</h1>

        <input
          className="product-list__search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search the product here....."
        />

        <select
          className="product-list__category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <div className="product-list__grid">
        {filter.length > 0 ? (
          filter.map((prdt) => (
            <div className="product-list__card" key={prdt.id}>
              <img
                className="product-list__image"
                src={prdt.thumbnail}
                alt={prdt.title}
              />
              <h2 className="product-list__title">{prdt.title}</h2>
              <p className="product-list__price">Price: {prdt.price}</p>
            </div>
          ))
        ) : (
          <div className="product-list__empty">
            <h2>The Products are not Found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default ApiWithSearch;
