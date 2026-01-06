import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Parent from "./components/Props drilling/Parent";
import Timer from "./components/Timer";
import UserContext from "./components/Context/UserContext";
import Title from "./components/Hoc/Title";
import Paragraph from "./components/Hoc/Paragraph";
import { ParagraphWithHover } from "./components/Hoc/Paragraph";
import Modal from "./components/Portal/Modal";
import Routing from "./components/Routing/Routing";
import StrictApp from "./components/StrictApp";
import Dashboard from "./components/CodeSpliting&Lazy/Dashboared";
import { Provider } from "react-redux";
import store from "./components/Redux/Store/Store";
import Rcounter from "./components/Redux/Comp/Rcounter";
import ZusCounter from "./components/Zustand/ZusCounter";
import SpecificUserApi from "./components/Apis/SpecificUserApi";
import Apis from "./components/Apis/Apis";
import ApiLoadingAndError from "./components/Apis/ApiLoadingAndError";
import Post from "./components/Apis/Post";
import Get from "./components/Apis/Get";
import Put from "./components/Apis/Put";
import Patch from "./components/Apis/Patch";
import Delete from "./components/Apis/Delete";
import Demo from "./Demo";
import Clz from "./components/ClzFnlComp/ClassComp";
import FnlComp from "./components/ClzFnlComp/FnlComp";
import Controlled from "./components/ControlledUn.jsx/Controlled";
import Uncontrolled from "./components/ControlledUn.jsx/Uncontrolled";
import Key from "./components/Key";
import DummyApi from "./components/Apis/DummyApi/DummyApi";
function App() {
  const [user] = useState({ name: "John", age: "30" });

  return (
    <>
      {/* <Counter /> */} {/*useState */}
      {/* <Timer /> */} {/*useEffect */}
      {/* Props */}
      <Parent user={user}/>
      {/* Context */}
      {/* <UserContext /> */}
      {/* HOC */}
      {/* <Title /> */}
      {/* <Paragraph /> */}
      {/* <ParagraphWithHover /> */}
      {/* //Portal */}
      {/* <Modal /> */}
      {/* //Router */}
      {/* <Routing /> */}
      {/* tool fro dev, not show anything to user  */}
      {/* find mistake early */} {/*1 extro check here */}
      {/*here also check for unmount = so total 2 times run useEffect in Console */}
      {/* <React.StrictMode>
      <StrictApp />
      </React.StrictMode> */}
      {/* CodeSpliting&Lazy */}
      {/* <Dashboard /> */}
      {/* //Redux = store an Box --> kept in special room -->if we need box using <provider store={store}>*/}
      {/* <Provider store={store}> */}
      {/*Provider gives Redux store access to Rcounter and its children. */}
      {/* <Rcounter />
      </Provider> */}
      {/* Zustand = this box on table in open room --> anyone can take  */}
      {/* <ZusCounter /> */}
      {/* <Apis /> */}
      {/* <SpecificUserApi /> */}.{/* <ApiLoadingAndError /> */}
      {/* <Post /> */}
      {/* <Get /> */} {/*Bring */}
      {/* <Put />  */}
      {/*update */}
      {/*  <Patch /> */} {/*Partia Update */}
      {/*<Delete /> */} {/*network tab -> Fetch/XHR ->Click Btn --> click {}*/}
      {/* <Demo /> */}
      {/* ClsFnlComp */}
      {/* <Clz /> */}
      {/* <Clz name="Dhanish" />  */} {/*use this keyword*/}
      {/*No this keyword*/}
      {/* <FnlComp name="Dhanish" />   */}
      {/* <Controlled />
      <Uncontrolled /> */}
      {/* <Key /> */}
      {/* <DummyApi /> */}
    </>
  );
}

export default App;
