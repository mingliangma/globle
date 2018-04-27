import React from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';

import InlineError from './../messages/InlineError';
import InlineSuccess from './../messages/InlineSuccess';

class SubscribeForm extends React.Component {

	state = {
		data : {
			email : ''
		},
		errors : {},
		success : {}
	};

	onChange = (e) => this.setState({
		data : { ...this.state.data, [e.target.name]: e.target.value  }
	});

	onSubmit = (e) => {
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if(Object.keys(errors).length === 0){
			this.props.submit(this.state.data)
				.then(() => this.setState({ success : { global : 'Thank you for subscribing' } }))
				.catch((err) => {
					let errMsg = "";
					if(err.response.data.errors.global === 0){
						errMsg = 'Invalid email.';
					}else{
						errMsg = 'We are currently unable to process your subscription.';
					}
					this.setState({ errors : { global: errMsg }})
				})
		}
	};

	validate = (data) => {
		const errors = {};
		if(!Validator.isEmail(data.email)) errors.email = 'Please enter a valid email.';
		return errors;
	};

	render(){

		const { data, errors, success } = this.state;

		return(
			<form className="form-horizontal form-material" onSubmit={this.onSubmit}>
				<div className="form-group ">
					<div className="col-xs-12">
						<input
							className="form-control" 
							name="email" 
							type="text"
							placeholder="Email address"
							required="" 
							value={data.email}
							onChange={this.onChange}
						/>
						{ errors.email && <InlineError text={errors.email} /> }
						{ errors.global && <InlineError text={errors.global} /> }
						{ success.global && <InlineSuccess text={success.global} /> }
					</div>
				</div>
				<div className="form-group text-center">
					<div className="col-xs-12 p-b-20">
						<button type="submit" className="btn btn-primary">
							Subscribe
						</button>
					</div>
				</div>
			</form>
		);
	}
}

SubscribeForm.propTypes = {
	submit : PropTypes.func.isRequired
};

export default SubscribeForm;
