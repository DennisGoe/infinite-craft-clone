import React from "react";
import Icon from "./Icon";
import {SettingsManager} from "../Managers/SettingsManager";

const Settings = () => {



    return (
        <div className={"flex gap-x-2"}>
            <Icon icon={"mop"}
                  onClick={() => SettingsManager._clearSandbox()}
                  className={"cursor-pointer text-neutral-400 text-3xl"}/>
        </div>
    )
}

export default Settings