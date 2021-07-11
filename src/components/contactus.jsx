import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class ContactUs extends Component {
   state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      result: '',
      respond: ''
   };

   componentDidMount() {
      this.setState({ respond: '' });
   }

   handleSubmit = e => {
      e.preventDefault();

      const { name, email, message } = this.state;

      let templateParams = {
         from_name: name,
         to_name: 'AQIB',
         subject: 'Contact Message from Omega',
         message_html: message + ` - Email: ${email}`
      };

      this.setState({ respond: 'true' });

      emailjs
         .send(
            'gmail',
            'template_JKFvFYPH',
            templateParams,
            'user_MdYHK3nQd2EEEvRhFA61D'
         )
         .then(
            result => {
               this.setState({
                  result: 'Message sent successfully!',
                  respond: 'sent'
               });
            },
            error => {
               this.setState({
                  result: 'Message sent failed!',
                  respond: 'fail'
               });
            }
         );
      this.resetForm();
   };

   resetForm() {
      this.setState({
         name: '',
         email: '',
         subject: '',
         message: '',
         result: ''
      });
   }

   handleChange = ({ currentTarget: input }) => {
      this.setState({ [input.name]: input.value });
   };

   render() {
      return (
         <div className='row contact-row'>
            <div className='col-md-3'></div>

            <div className='m-4 contact col-md-6'>
               <h1>Contact Us</h1>

               <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                     <label htmlFor='name'>Name</label>

                     <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        className='form-control'
                        onChange={this.handleChange}
                        placeholder='Enter Name'
                     ></input>
                  </div>

                  <div className='form-group'>
                     <label htmlFor='name'>Email</label>
                     <input
                        type='email'
                        name='email'
                        value={this.state.email}
                        className='form-control'
                        onChange={this.handleChange}
                        placeholder='Enter Email'
                     ></input>
                  </div>

                  <div className='form-group'>
                     <label htmlFor='name'>Message</label>

                     <textarea
                        name='message'
                        value={this.state.message}
                        onChange={this.handleChange}
                        placeholder='Enter Message'
                        class='form-control'
                        aria-label='With textarea'
                     ></textarea>
                  </div>

                  <button className='contact-btn'>Submit</button>

                  {this.state.respond === 'true' && (
                     <div className='load-icon'>
                        <i class='fa fa-undo loader'></i>
                     </div>
                  )}

                  {this.state.respond === 'sent' && (
                     <div className='respond-message msg-ok'>
                        <h6>
                           {this.state.result} <i class='fa fa-check'></i>
                        </h6>
                     </div>
                  )}

                  {this.state.respond === 'fail' && (
                     <div className='respond-message msg-fail'>
                        <h6>
                           {this.state.result} <i class='fa fa-times'></i>
                        </h6>
                     </div>
                  )}
               </form>
            </div>

            <div className='col-md-3'></div>
         </div>
      );
   }
}

export default ContactUs;
