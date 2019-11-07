import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [term, setTerm] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pageNum, setPagenum] = useState(1);
  const [shouldRef, setShouldRef] = useState(false);

  const changeHandler = e => {
    setTerm(e.target.value);
    console.log(term);
  };

  const pageChange = e => {
    e.preventDefault();
    e.target.name === "inc"
      ? setPagenum(pageNum + 1)
      : e.target.name === "dec" && pageNum > 1
      ? /* hey omar the next line is a ternary condition */ setPagenum(
          pageNum - 1
        )
      : setPagenum(e.target.value);
    setShouldRef(true);
    console.log("pageNum: ", pageNum);
  };

  useEffect(() => {
    shouldRef &&
      axios
        .get("https://api.unsplash.com/search/photos", {
          params: {
            query: term,
            page: pageNum,
            per_page: 20
          },
          headers: {
            Authorization:
              "Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"
          }
        })
        .then(response => {
          setPictures([...response.data.results]);
          setShouldRef(false);
        })
        .catch(error => {
          console.log(error.message);
        });
  });

  const sendRequest = e => {
    e.preventDefault();
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
          per_page: 20
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
      <div className="bg-secondary p-4 mb-5 rounded">
        <form onSubmit={sendRequest} className="form-row">
          <div className="col">
            {" "}
            <input
              type="text"
              onChange={changeHandler}
              className="form-control"
              style={{ height: "50px" }}
              placeholder="Picture title ..."
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-success form-control"
              style={{ height: "50px" }}
            />
          </div>
        </form>
      </div>
      <div className="container-fluid">
        <div className="d-flex flex-wrap border-1">
          {pictures.length
            ? pictures.map(pic => (
                <img
                  src={pic.urls.thumb}
                  alt={pic.alt_description}
                  key={pic.id}
                  style={{ width: "150px", height: "150px" }}
                  className="m-1 rounded border-1"
                />
              ))
            : null}
        </div>
        {pictures.length ? (
          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              onClick={pageChange}
              name="dec"
              className="form-control col-3 btn btn-primary"
            >
              {"<<"}
            </button>
            <button
              type="button"
              onClick={pageChange}
              name="inc"
              className="form-control col-3 btn btn-primary"
            >
              {">>"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
