import React, { useState } from "react";
import axios from "axios";
const Adddata = () => {
  let [name, setname] = useState();
  let [age, setage] = useState();
  let [course, setcourse] = useState();

  let handlesubmit = (e) => {
    e.preventDefault();

    let StudentData = {
      name,
      age,
      course,
    };
    console.log(StudentData);

    axios
      .post("http://localhost:3000/student/addstudentdata", StudentData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter your Name"
          required
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="Enter your Age"
          required
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Course Name"
          required
          onChange={(e) => {
            setcourse(e.target.value);
          }}
        />{" "}
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Adddata;
