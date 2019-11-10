import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [term, setTerm] = useState("");
  const [pictures, setPictures] = useState([]);
  const [pageNum, setPagenum] = useState(1);
  const [shouldRef, setShouldRef] = useState(false);
  const [emptyMsg, setEmptyMsg] = useState(false);

  const changeHandler = e => {
    setTerm(e.target.value);
  };

  const pageChange = e => {
    e.preventDefault();
    e.target.name === "inc"
      ? setPagenum(pageNum + 1)
      : e.target.name === "dec" && pageNum > 1
      ? setPagenum(pageNum - 1)
      : setPagenum(1);
    setShouldRef(true);
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
        !pictures.length && setEmptyMsg(true);
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  const displayPic = (url, title) => {
    var modal = document.getElementById("myModal");
    //var thumbPic = document.getElementById(url);
    var span = document.getElementsByClassName("close")[0];
    var picInfo = document.getElementsByClassName("picInfo")[0];
    picInfo.innerHTML = title.toUpperCase();
    span.style.color = "red";
    span.addEventListener("click", () => {
      modal.style.display = "none";
    });
    window.addEventListener("click", event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
    modal.firstChild.style.background = `url(${url}) no-repeat center`;
    modal.style.display = "block";
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
      <div className="row d-flex flex-row pl-5 pr-5">
        {pictures.length && (
          <div className="d-flex justify-content-end col-sm-12 col-md-2 col-lg-2 ">
            <button
              type="button"
              onClick={pageChange}
              name="dec"
              className="btn btn-light float-right"
            >
              <span>&larr;</span>
            </button>
          </div>
        )}

        <div className="container col-sm-12 col-md-8 col-lg-8">
          <div className="d-flex flex-wrap border-1 justify-content-between pt-3">
            {pictures.length
              ? pictures.map(pic => (
                  <img
                    src={pic.urls.thumb}
                    alt={pic.alt_description}
                    title={pic.alt_description}
                    key={pic.id}
                    id={pic.urls.regular}
                    style={{ width: "auto" }}
                    className="ml-1 mb-3 rounded border border-white border-1 width-inherit pic  col-xs-12 col-sm-6 col-md-3 col-lg-2"
                    onClick={e => displayPic(e.target.id, e.target.title)}
                  />
                ))
              : null}
          </div>
        </div>

        {pictures.length ? (
          <div className="d-flex justify-content-between col-sm-12 col-md-2 col-lg-2">
            <button
              type="button"
              onClick={pageChange}
              name="inc"
              className="btn btn-light"
            >
              <span>&rarr;</span>
            </button>
          </div>
        ) : (
          emptyMsg && (
            <div
              className="alert alert-danger col-8"
              role="alert row"
              style={{ fontSize: "1.1rem" }}
            >
              <span
                className="fa fa-exclamation-triangle col-1"
                style={{ fontSize: "4rem" }}
              ></span>
              <span style={{ fontSize: "1.5rem" }} className="col-7">
                Error
              </span>
              There is no result for this keyword. Please try another word...
            </div>
          )
        )}
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content position-relative">
          <span className="close text-white">&times;</span>
          <span className="picInfo text-warning d-flex justify-content-center"></span>
        </div>
      </div>
    </div>
  );
}

export default App;
