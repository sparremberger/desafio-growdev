import {
    COMMENT_LIST_FAIL,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_REQUEST,
} from "../constants/commentConstants";

export const commentListReducer = (state = { comments: [] }, action) => {
    switch (action.type) {
        case COMMENT_LIST_REQUEST:
            return { loading: true, comments: [] };
        case COMMENT_LIST_SUCCESS:
            return { loading: false, comments: action.payload };
        case COMMENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
