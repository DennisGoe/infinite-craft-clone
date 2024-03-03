import React from "react";
import {useSelector} from "react-redux";
import store from "../store/store";
import Icon from "./Icon";

const MergingSpinner = () => {
    const merging = useSelector(() => store.getState().sandboxSlice?.merging)

    return (
        <>
            {
                merging &&
                <div className={"absolute top-5 right-5 animate-bounce"}>
                    <Icon icon={"hourglass_empty"} className={"text-neutral-400 text-3xl"}/>
                </div>
            }
        </>
    )
}

export default MergingSpinner