import React from "react";
import CustomFetch from "./Hooks/CustomFetch";

const Temp = () => {
  let { Data } = CustomFetch("https://fakestoreapi.com/products");

  console.log(Data);

  return <div>{JSON.stringify(Data)}</div>;
};

export default Temp;
