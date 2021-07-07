import React from "react";
import "./main.css";
import {  Route } from "react-router-dom";
import Navigation from "../navigation/index";
import Login from "./../auth/login/index";
import SignUp from "./../auth/signUp/index";
import HomePage from "../homePage";
import Comments from "./../../components/comments";
import Contact from "../Contact/Contact";
import AddBookPage from "../bookPage/AddBook";
import EditBookPage from "../bookPage/EditBook";
import DeleteBookPage from "../bookPage/deleteBook";
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <>
      <Navigation />
      <div className="Main">
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/Register" render={() => <SignUp />} />
        <Route exact path="/" render={() => <HomePage />}/>

        <Route exact path="/Comments" render={() => <Comments />}/>


        <Route exact path="/contact" render={() => <Contact />}/>
        <Route exact path="/AddBook" render={() => <AddBookPage />}/>
        <Route exact path="/EditBook" render={() => <EditBookPage />}/>
        <Route exact path="/DeleteBook" render={() => <DeleteBookPage />}/>
        {/* <Route exact path="/Register" render={() => <Category />} /> 
        <Route exact path="/Register" render={() => <Authors />} />  */}
      </div>
    </>
  );
};

export default Main;
