// libraries
import emailjs from '@emailjs/browser'
import emailJS from '../../Data/emailJSConfig'

// scss
import './_contactForm.scss'
import '../../Utils/sass/_global.scss'
import { useRef } from 'react'

export default function ContactForm() {
  const form = useRef()

  //  handle function for sending mail with emailjs libraries
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        emailJS.serviceID,
        emailJS.templateID,
        form.current,
        emailJS.publicKey
      )
      .then(
        (res) => {
          console.log(res.text)
        },
        (err) => {
          console.log(err.text)
        }
      )
    // Cleaning inputs after submit
    e.target['firstName'].value = ''
    e.target['lastName'].value = ''
    e.target['contactMail'].value = ''
    e.target['message'].value = ''
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="formContainer__form">
        <label htmlFor="firstName" className="formContainer__form__label">
          Prénom :
        </label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          className="formContainer__form__input"
        />
        <label htmlFor="lastName" className="formContainer__form__label">
          Nom :
        </label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          className="formContainer__form__input"
        />
        <label htmlFor="contactMail" className="formContainer__form__label">
          Mail de contact :
        </label>
        <input
          id="contactMail"
          name="contactMail"
          type="email"
          className="formContainer__form__input"
        />
        <label htmlFor="message" className="formContainer__form__label">
          Message :
        </label>
        <textarea
          id="message"
          name="message"
          className="formContainer__form__input message"
        />
        <button
          className="formContainer__form__button"
          type="submit"
          value="Envoyer"
        >
          Envoyer !
        </button>
      </form>
    </>
  )
}
