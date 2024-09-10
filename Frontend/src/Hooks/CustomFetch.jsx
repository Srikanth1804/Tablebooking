import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomFetch = (url) => {
  let [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        alert("Error To fetch");
      });
  }, [url]);

  return { Data };
};

export default CustomFetch;
