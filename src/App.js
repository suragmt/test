import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Sample from "./Sample";
import Search from "./Search";
import { Profiler } from "react";
import ArtistIndex from './ArtistIndex'
import Test from "./Test";
function App() {
  return (
    <Profiler
     id="app"
      onRender={(
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime
      ) => {
        // console.log(
        //   "profiler",
        //   id,
        //   phase,
        //   actualDuration,
        //   baseDuration,
        //   startTime,
        //   commitTime
        // );
      }}
    >
      <div className="">
        somehting
        <Home name={"surag"}>this is child of home and edited for testing again here</Home>
        {/* <Sample/> */}
        <Search />
        <ArtistIndex/>
        <Test/>
        <div>dev editing second</div>
      </div>
    </Profiler>
  );
}

export default App;
