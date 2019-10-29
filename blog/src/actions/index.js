import jsonPlaceholder from '../apis/jsonPlaceholder';

//ES2015
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response	})
};