import { CREATE_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
	posts: [],
	post: {}
}

export default function (state = initialState, action) {

	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				posts: action.payload
			}

		case CREATE_POST:
			return {
				...state,
				post: action.payload
			}
		default:
			return state;
	}

}