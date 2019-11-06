import React, { useState } from "react";
import axios from "axios";

function App() {
  const [term, setTerm] = useState("");
  const [pictures, setPictures] = useState([]);

  const changeHandler = e => {
    setTerm(e.target.value);
    console.log(term);
  };

  const sendRequest = e => {
    e.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          page: 2,
          per_page: 15
        },
        headers: {
          Authorization:
            "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
        }
      })
      .then(response => {
        setPictures([...response.data.results]);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className="container-fluid mt-5">
      <div className="bg-dark p-3 rounded">
        <form onSubmit={sendRequest} className="form-row">
          <div className="col">
            {" "}
            <input
              type="text"
              onChange={changeHandler}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-success form-control"
            />
          </div>
        </form>
      </div>
      <div className="container-fluid">
        <table className="table mt-5 border-0">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>

          <tbody>
            {pictures.length
              ? pictures.map(pic => (
                  <tr key={pic.id}>
                    <td>{pic.id}</td>
                    <td>
                      <img
                        src={pic.urls.thumb}
                        alt={pic.id}
                        className="rounded"
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
