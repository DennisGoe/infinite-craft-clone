import React from "react";
import TagElement from "./TagElement";
import {useSelector} from "react-redux";
import store from "../store/store";

const DrawSandboxTags = () => {
    const elements = useSelector(() => store.getState().sandboxSlice?.elements);

    return (
        <>
            {
                elements.map(({elementString, left, top}, index: number) => {
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
        </>
    );
};

export default DrawSandboxTags