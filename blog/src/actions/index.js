import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts()); //we add async and await due to we do not go to perform tne next lines of code while do not get a list of posts
	const userIds = _.uniq(_.map(getState().posts, 'userId'));
	userIds.forEach(id => dispatch(fetchUser(id)));
	//or like that:
	// _.chain(getState().posts)
	// 	.map('userId')
	// 	.uniq()
	// 	.forEach(id => dispatch(fetchUser(id)))
	// 	.value()
}
//ES2015
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');
	dispatch({ type: 'FETCH_POSTS', payload: response.data	})
};

export const fetchUser = (id) => dispatch => {
	_fetchUser(id, dispatch);
};
//or like that:
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get(`/users/${id}`);
// 	dispatch({ type: 'FETCH_USER', payload: response.data});
// });

const _fetchUser = _.memoize(async (id, dispatch) => {
	const response = await jsonPlaceholder.get(`/users/${id}`);
	dispatch({ type: 'FETCH_USER', payload: response.data});
});
