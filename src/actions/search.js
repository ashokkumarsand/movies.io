import ActionTypes from "../constants/ActionTypes";
const actions = {
    _search : (api, value) => {
        return (dispatch) => {
            dispatch({type: ActionTypes.SEARCH, value});
            Promise.resolve(api({with_keywords: value})).then(data => {
                console.log(data);
            }).catch(err=> {
                console.error(err);
            })
        };
    }
}

export default actions;