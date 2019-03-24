import Types from "../Actions/_Types";

import InitialState from "./InitialState/Settings";

const SettingsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case Types.GET_INITIAL_SETTINGS:
            return {
                site: {
                    // Planning ahead by putting date format in the reducers so we can make i18n easier
                    dateDisplayFormat: "MMMM DD @ h:mm a"
                }
            };
        default:
            return state;
    }
};

export default SettingsReducer;
