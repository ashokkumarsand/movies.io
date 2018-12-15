import searchActions from "../actions/search";
import { bindActionCreators  } from "redux";
const  selector = (dispatch) => {
    const _searchActions = bindActionCreators(searchActions, dispatch);
    return (state) => {
        return {
            search: state.search,
            _search:_searchActions._search
        };
    }
}

export default selector;