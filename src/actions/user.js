import { USER_SUBSCRIBED } from './../types';
import api from'./../api';

export const userSubscribed = (user) => ({
	type: USER_SUBSCRIBED,
	user
});

export const subscribe = (data) => (dispatch) =>
	api.user.subscribe(data).then(user => dispatch(userSubscribed(user)));

