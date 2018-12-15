import ActionTypes from "../constants/ActionTypes"
const search = (state={}, action) => {
    switch (action.type) {
        case ActionTypes.search: {
            return {
                ...state,
                search: {
                    value: action.value
                }
            }
        }
        default:
            return state;
    }
};

export default search;