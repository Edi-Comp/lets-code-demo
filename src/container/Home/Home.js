import React,{useEffect} from "react";
import Main from "./Main";
import LoginSignup from "../Login-signup/LoginSignup";
import Nav from "../Navbar/Nav";
import "../style/Home.scss";
import { Routes, Route } from "react-router-dom";
import Profile from "../User/Profile";
import src from "../../assets/avtars/2.jpg";
import src2 from "../../assets/avtars/3.jpg";
import Friends from "../User/Friends";
import { useState } from "react/cjs/react.development";
import Sidebar from "../Navbar/Sidebar";
import Room from "../Rooms/Room";
import Loading from "../Load/Loading";
import { LoaderContext } from "../context/LoaderContext";
function Home() {
  const total_Users = [
    {
      name: "Hey007",
      src: src,
    },
    {
      name: "Hey008",
      src: src2,
    },
    {
      name: "abc007",
      src: src,
    },
    {
      name: "mohit007",
      src: src2,
    },
    {
      name: "dhruv007",
      src: src,
    },
  ];
  const user_Friends = [
    {
      name: "Hey007",
      src: src2,
      rooms: ["Room1", "Room2", "Room3", "Room4"],
    },
    {
      name: "Hey008",
      src: src,
      rooms: ["Room1", "Room3", "Room4"],
    },
    {
      name: "Hey009",
      src: src2,
      rooms: ["Room1"],
    },
    {
      name: "Hey010",
      src: src,
      rooms: ["Room1", "Room2"],
    },
  ];
  const Rooms = [
    {
      id: 1234,
      name: "Hetu Patel",
      owner: "Hetz",
    },
    {
      id: 4567,
      name: "Hetu Patel",
      owner: "Hetz",
    },
    {
      id: 687,
      name: "Hetu Patel",
      owner: "Hetz",
    },
    {
      id: 1234,
      name: "Hetu Patel",
      owner: "Hetz",
    },
    {
      id: 4567,
      name: "Hetu Patel",
      owner: "Hetz",
    },
    {
      id: 687,
      name: "Hetu Patel",
      owner: "Hetz",
    },
  ];
  const [user_Name, set_User_Name] = useState("Hetu1107789456");
  const [user_Email, set_User_Email] = useState("hetu200211@gmail.com");
  const [user_Avtar, set_User_Avtar] = useState(src);
  const [user_Rooms, set_User_Rooms] = useState(Rooms);
  const [Load, setLoad] = useState(0);
  const returnLoader = () => {
    if (Load) {
      return <Loading />;
    } else {
      return null;
    }
  };
  return (
    <div className="main-home-page" id="main-home-page">
      {returnLoader()}
      <Sidebar
        user_Name={user_Name}
        user_Email={user_Email}
        user_Avtar={user_Avtar}
      />
      <Nav
        user_Name={user_Name}
        user_Email={user_Email}
        user_Avtar={user_Avtar}
      />
      <LoaderContext.Provider value={setLoad}>
        <Routes>
          <Route path="/register" element={<LoginSignup />} />
          <Route path="/" element={<Main/>} />
          <Route path="/user" element={<Profile />} />
          <Route
            path="/user/friends"
            element={
              <Friends user_Friends={user_Friends} total_Users={total_Users} />
            }
          />
          <Route
            path="/user/rooms"
            element={<Room user_Rooms={user_Rooms} />}
          />
          <Route path="*" element={<Main />} />
        </Routes>
      </LoaderContext.Provider>
    </div>
  );
}

export default Home;
