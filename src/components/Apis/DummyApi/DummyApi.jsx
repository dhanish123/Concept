import { useState, useEffect } from "react";
import "./DummyApi.scss"

const DummyApi = () => {
  const [things, setThings] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Api Failed");
        return res.json()
      })
      .then((data) => {
        setThings(data.products);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

if(loading) return <h2>Loading...</h2>
if(error) return <h2>Error.{error}</h2>

  return <div className="Outercards">
    {things.map((prdt)=>(
      <div key={prdt.id} className="Outercards__card">
        <img src={prdt.thumbnail} alt="" />
        <h2>{prdt.title}</h2>
        <h4>{prdt.description}</h4>
        <p style={{fontWeight:'bold'}}>Price: {prdt.price}</p>
      </div>
    ))}
  </div>;
};

export default DummyApi;
