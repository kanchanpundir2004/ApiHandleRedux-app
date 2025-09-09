import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./Slicer1";

export default function CoinCreate() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.coin);

  useEffect(() => {
    dispatch(FetchData(100));
  }, [dispatch]);

  if (loading) {
    return <h1>Data is Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h1>Coin Create Component</h1>
      <table border={1} style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>24h Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} width={30} /> {item.name}
              </td>
              <td>{item.symbol.toUpperCase()}</td>
              <td>${item.current_price}</td>
              <td>${item.market_cap}</td>
              <td
                style={{
                  color: item.price_change_percentage_24h < 0 ? "red" : "green",
                }}
              >
                {item.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
