import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let btn = document.querySelector(".btn1");

  let nameValue = "";
  let emailValue = "";
  let phoneValue = "";
  let addressValue = "";
  let zipValue = "";
  let country = "";
  let vatValue = "";
  function nameShow(event) {
    nameValue = event.target.value;
  }
  function emailShow(event) {
    emailValue = event.target.value;
  }
  function phoneShow(event) {
    phoneValue = event.target.value;
  }
  function addressShow(event) {
    addressValue = event.target.value;
  }
  function changeZip(event) {
    zipValue = event.target.value;
  }
  function changeVat(event) {
    vatValue = event.target.value;
  }
  function changeCountry(event) {
    country = event.target.value;
  }
  function Res() {
    if (nameValue.length == 0 || nameValue.length == 2) {
      alert("name is short minimum length must be more 3 characters");
      return;
    }
    if (emailValue.includes("@gmail.com")) {
    } else {
      alert("this is not email");
      return;
    }
    if (phoneValue.length < 7) {
      alert("phone is wrong");
      return;
    }
    if (addressValue.length < 3) {
      alert("addres is to short");
      return;
    }
    if (country.length == 0) {
      alert("dont be stupid choose your country");
      return;
    }
    if (zipValue.length < 5) {
      alert("zip is too short");
      return;
    }
    if (vatValue.length < 5) {
      alert("vat is too short");
      return;
    }

    let about = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
      country: country,
      zip: zipValue,
      vat: vatValue,
    };
    if (localStorage.getItem("infos")) {
      let res = localStorage.getItem("infos");
      let arr = JSON.parse(res);
      arr.push(about);
      localStorage.setItem("infos", JSON.stringify(arr));
    } else {
      let infos = [];
      infos.push(about);
      localStorage.setItem("infos", JSON.stringify(infos));
    }
    alert("succes");
  }
  return (
    <div className="container">
      <h1 className="heading">
        Edit addres <i className="fa-solid fa-x"></i>
      </h1>
      <div className="cont1">
        <div>
          <h1 className="name">Name</h1>
          <input
            onClick={nameShow}
            id="1"
            placeholder="Jhon"
            type="text"
            className="name-input"
          />
        </div>
        <div>
          <h1 className="email">Email</h1>
          <input
            onClick={emailShow}
            id="2"
            placeholder="Jhon@gmail.com"
            type="email"
            className="email-input"
          />
        </div>
      </div>
      <h1 className="address">Billing address</h1>
      <textarea
        onClick={addressShow}
        name=""
        className="address-text"
        id="3"
        placeholder="Addres"
      ></textarea>
      <div className="cont2">
        <div>
          <h1 className="name">Contact</h1>
          <input
            onClick={phoneShow}
            id="4"
            type="text"
            className="name-input"
            placeholder="+44 0000 0000000"
          />
        </div>
        <div>
          <h1 className="name">Country</h1>
          <input
            onClick={changeCountry}
            type="text"
            className="name-input"
            placeholder="England"
            id="5"
          />
        </div>
        <div>
          <h1 className="name">Zip code</h1>
          <input
            onClick={changeZip}
            type="text"
            className="name-input"
            placeholder="000000"
            id="6"
          />
        </div>
        <div>
          <h1 className="name">Vat Number</h1>
          <input
            onClick={changeVat}
            type="text"
            className="name-input"
            placeholder="000000"
            id="7"
          />
        </div>
      </div>
      <div className="btns">
        <button className="btn1">Cancel</button>
        <button onClick={Res} className="btn2">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
// let input1 = document.getElementById("1");
// let input2 = document.getElementById("2");
// let input3 = document.getElementById("3");
// let input4 = document.getElementById("4");
// let input5 = document.getElementById("5");
// let input6 = document.getElementById("6");
// let input7 = document.getElementById("7");
// let arrOfInfo = [];
// function btn(event) {
//   let arr = [input1, input2, input3, input4, input5, input6, input7];
//   arr.forEach((value) => {
//     if (typeof value == undefined) {
//       alert("please fill in all inputs");
//       return;
//     } else {
//       arrOfInfo.push(value.target.value);
//     }
//   });

//   if (arrOfInfo[1].length < 2) {
//     alert("name must be more than 2 character");
//   }
//   if (arrOfInfo[2].includes("@gmail.com")) {
//   } else {
//     alert("email is wrong");
//     return;
//   }
//   let obj = {
//     name: arrOfInfo[1],
//     email: arrOfInfo[2],
//     addres: arrOfInfo[3],
//     contact: arrOfInfo[4],
//     country: arrOfInfo[5],
//     zip: arrOfInfo[6],
//     vat: arrOfInfo[7],
//   };
//   if (localStorage.getItem("infos")) {
//     let index = localStorage.getItem("infos");
//     let infos = JSON.stringify(index);
//     infos.push(obj);
//     localStorage.setItem("infos", JSON.stringify(infos));
//   } else {
//     let infos = [];
//     infos.push(obj);
//     localStorage.setItem("infos", JSON.stringify(infos));
//   }
//   alert("succes");
// }
