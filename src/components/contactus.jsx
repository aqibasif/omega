import React, { Component } from 'react';
import emailjs from 'emailjs-com';

class ContactUs extends Component {
   state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      result: ''
   };

   handleSubmit = e => {
      e.preventDefault();

      const { name, email, subject, message, result } = this.state;

      let templateParams = {
         from_name: name,
         to_name: 'AQIB',
         subject: 'Contact Message from Omega',
         message_html: message
      };

      emailjs
         .send(
            'gmail',
            'template_JKFvFYPH',
            templateParams,
            'user_MdYHK3nQd2EEEvRhFA61D'
         )
         .then(
            result => {
               window.scrollTo(0, 0);
               this.setState({ result: 'Message sent successfully!' });
               alert(this.state.result);
            },
            error => {
               window.scrollTo(0, 0);
               this.setState({ result: 'Message sent failed!' });
               alert(this.state.result);
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
         <div className='row'>
            <div className='col-md-3'></div>

            <div className='m-5 contact col-md-6'>
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

                  <button
                     className='contact-btn'
                     //  data-toggle='modal'
                     //  data-target='.bd-example-modal-sm'
                  >
                     Submit
                  </button>

                  {/* <div
                     class='modal fade bd-example-modal-sm'
                     tabindex='-1'
                     role='dialog'
                     aria-labelledby='mySmallModalLabel'
                     aria-hidden='true'
                  >
                     <div class='modal-dialog modal-sm' role='document'>
                        <div class='modal-content'>{this.state.result}</div>
                     </div>
                  </div> */}
               </form>
            </div>

            <div className='col-md-3'></div>
         </div>
      );
   }
}

export default ContactUs;
