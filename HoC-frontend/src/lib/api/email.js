import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs({ post, closeModal, AuthState }) {
  console.log(post);
  
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_wr56dhm',
        'template_leue11p',
        e.target,
        'user_U6YlJAbSPEgLJAhGqtc8I'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    closeModal();
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input
        type="hidden"
        name="contact_number"
        defaultValue={post.user.username}
      />{' '}
      {/* <label>Name</label>{' '} */}
      {/* <input type="text" name="user_name" defaultValue={post.user.username} /> */}
      <h1>{AuthState.login.username}님의 지원서입니다.</h1>
      <label>{post.companyName}의 Email</label>{' '}
      <input type="email" defaultValue={post.email} name="user_email" />{' '}
      <label>지원 내용을 적어주세요</label> <textarea name="message" />{' '}
      <input type="submit" defaultValue="Send" />{' '}
    </form>
  );
}
