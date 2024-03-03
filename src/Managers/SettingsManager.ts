import store from "../store/store";
import sandboxSlice from "../store/slices/sandbox";

export class SettingsManager {
    public static _clearSandbox () {
        store.dispatch(sandboxSlice.actions.setSandboxElements([]))
    }
}