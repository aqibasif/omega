import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';

class Form extends Component {
   state = {
      account: { username: '', password: '' },
      errors: {}
   };

   schema = {
      username: Joi.string()
         .required()
         .max(4)
         .label('Username'),
      password: Joi.string()
         .required()
         .min(3)
         .label('Password')
   };

   validate = () => {
      const options = { abortEarly: false };
      const { error } = Joi.validate(this.state.account, this.schema, options);

      if (!error) return null;

      const errors = {};
      for (let item of error.details) errors[item.path[0]] = item.message;
      return errors;
   };

   validateProperty = ({ name, value }) => {
      const obj = { [name]: value };
      const schema = { [name]: this.schema[name] };
      const { error } = Joi.validate(obj, schema);
      return error ? error.details[0].message : null;
   };

   handlesubmit = e => {
      e.preventDefaul();

      const errors = this.validate();
      this.setState({ errors: errors || {} });
      if (errors) return;

      console.log('submitted');
   };

   handleChange = ({ currentTarget: input }) => {
      const errors = { ...this.state.errors };
      const errorMessage = this.validateProperty(input);
      if (errorMessage) errors[input.name] = errorMessage;
      else delete errors[input.name];

      const account = { ...this.state.account };
      account[input.name] = input.value;

      this.setState({ account, errors });
   };

   renderInput(name, label, type) {
      const { account, errors } = this.state;

      return (
         <Input
            type={type}
            name={name}
            value={account[name]}
            label={label}
            onChange={this.handleChange}
            error={errors[name]}
         />
      );
   }

   renderButton(label) {
      return (
         <button disabled={this.validate()} className='btn btn-warning'>
            {label}
         </button>
      );
   }

   render() {
      return (
         <div className='m-5'>
            <h1>Form</h1>
            <form onSubmit={this.handlesubmit}>
               {this.renderInput('username', 'Username', 'text')}
               {this.renderInput('password', 'Password', 'password')}
               {this.renderButton('Login')}
            </form>
         </div>
      );
   }
}

export default Form;
