import React, {useState} from "react";
import Logo from "./Logo";
import TagElement from "./TagElement";
import Settings from "./Settings";
import {useSelector} from "react-redux";
import store from "../store/store";
import {SandboxManager} from "../Managers/SandboxManager";

type PositionInterface = {
    top: number,
    left: number,
    elementString: string
}
const Sandbox = () => {

    const elements = useSelector(() => store.getState().sandbox?.elements);

    return (
        <div
            onDrop={(e) => SandboxManager._handleDropElement(e)}
            onDragOver={(e) => e.preventDefault()}
            className={"w-full relative h-full border-r-[1px] border-neutral-300 items-start flex flex-wrap"}>
            <div className={"absolute top-2 left-2 "}>
                <Logo/>
            </div>
            {
                elements.map(({elementString, left, top,}, index) => {
                    return (
                        <div key={index} className={"absolute"}
                             style={{
                                 top: top,
                                 left: left
                             }}>
                            <TagElement elementString={elementString} inSandbox={true}/>
                        </div>
                    );
                })
            }
            <div className={"absolute bottom-2 right-2"}>
                <Settings/>
            </div>
        </div>
    );
};

export default Sandbox;