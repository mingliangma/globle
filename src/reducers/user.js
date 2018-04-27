import { USER_SUBSCRIBED } from './../types';

export default function user(state = {}, action = {}){
	switch(action.type){
		case USER_SUBSCRIBED:
			// return { ...state, ...action.user };
			return action.user;
		default: return state;
	}
};
