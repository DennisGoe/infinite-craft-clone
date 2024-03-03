import store from "../store/store";
import sandboxSlice from "../store/slices/sandbox";
import {LineManager} from "./LineManager";

export class SettingsManager {
    public static _clearSandbox () {
        store.dispatch(sandboxSlice.actions.setSandboxElements([]))
        LineManager._recalculateLines()
    }
}