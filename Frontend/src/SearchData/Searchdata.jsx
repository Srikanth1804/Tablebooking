import React, { useState } from "react";
import axios from "axios";

const Searchdata = () => {
  const [age, setage] = useState("");
  const [Student, SetStudent] = useState([]);

  const Handlesubmit = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:3000/student/findstudentdata", { params: { age } })
      .then((res) => {
        SetStudent(res.data);
        console.log(Student);
        console.log("data finded");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container mt-5">
      <form onSubmit={Handlesubmit}>
        <input
          type="number"
          placeholder="Enter Age"
          required
          value={age}
          onChange={(e) => setage(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <div className="mt-5">
        {Student.map((SD) => {
          return (
            <div className="card" style={{ width: 400 }}>
              <div className="card-body">
                <h4 className="card-title">{SD.StudentName}</h4>
                <p className="card-text">{SD.Age}</p>
                <p className="card-text">{SD.Course}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searchdata;
