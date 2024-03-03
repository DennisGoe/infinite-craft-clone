import React from "react";
import Sandbox from "./components/Sandbox";
import TagList from "./components/TagList";
import MergingSpinner from "./components/MergingSpinner";

function App() {


    return (
        <div className={"w-screen h-screen overflow-x-auto overflow-y-auto flex"}>

            <div className={"w-[76%] h-full"}>
                <Sandbox/>
            </div>
            <div className={"flex-1 h-full"}>
                <TagList/>
            </div>
        </div>
    );
}

export default App;
