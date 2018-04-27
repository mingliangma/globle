import axios from 'axios';

export default {
	user : {
		subscribe : (user) => axios.post('/api/subscribe', { user }).then((res) => res.data.user)
	}
};
