import React, {useEffect, useState} from "react";
import Logo from "./Logo";
import TagElement from "./TagElement";
import Settings from "./Settings";
import {useSelector} from "react-redux";
import store from "../store/store";
import {SandboxManager} from "../Managers/SandboxManager";
import {LineManager} from "../Managers/LineManager";
import DrawSandboxTags from "./DrawSandboxTags";
import DrawLines from "./DrawLines";


const Sandbox = () => {

    const [lineList, setLineList] = useState<any[]>();

    useEffect(() => {
        setLineList(LineManager._calculateLineList())
    }, []);

    return (
        <div
            onDrop={(e) => SandboxManager._handleDropElement(e)}
            onDragOver={(e) => e.preventDefault()}
            className={"w-full relative h-full border-r-[1px] border-neutral-300 items-start flex flex-wrap"}>
            <div className={"absolute top-2 left-2 "}>
                <Logo/>
            </div>
            <DrawSandboxTags/>
            <DrawLines/>
            <div className={"absolute bottom-2 right-2"}>
                <Settings/>
            </div>
        </div>
    );
};

export default Sandbox;