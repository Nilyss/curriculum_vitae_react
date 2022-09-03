//  hooks
import { useState, useEffect, useRef } from 'react'

// libraries
import Lottie from 'lottie-react'
import github from '../../Utils/lotties/github'
import linkedin from '../../Utils/lotties/linkedin'
import contact from '../../Utils/lotties/contact'
import emailjs from '@emailjs/browser'
import emailJS from '../../Data/emailJSConfig'

// style
import './_footer.scss'

export default function Footer() {
  // ********** Modal Section **********

  // init hooks
  const [showContact, setShowContact] = useState(false)
  const [heightEl, setHeightEl] = useState()

  // toggle states function
  const switchShowContact = () => {
    setShowContact(!showContact)
  }

  // get the  modal block to toggle
  const refHeight = useRef()

  // send to state the current height in pixels
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [switchShowContact])

  //********** Form Section **********
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
      <footer className="footer">
        <h2 className="footer__title articleTitle">Nicolas DECRESSAC</h2>
        <div
          style={{ height: showContact ? `${heightEl}` : '0px' }}
          ref={refHeight}
          className={
            showContact
              ? 'formContainer formContainerTrue'
              : 'formContainer formContainerFalse'
          }
        >
          {showContact && (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="formContainer__form"
            >
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
              <label
                htmlFor="contactMail"
                className="formContainer__form__label"
              >
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
          )}
        </div>
        <nav className="footer__title__nav">
          <ul className="footer__title__nav__ul">
            <li className="footer__title__nav__ul__li">
              <a href="https://github.com/Nilyss">
                GitHub
                <Lottie animationData={github} className="homeLottie" />
              </a>
            </li>
            <li className="footer__title__nav__ul__li toggleContact">
              Contact
              <Lottie
                onClick={() => {
                  switchShowContact()
                }}
                animationData={contact}
                className="homeLottie toggleContact"
              />
            </li>
            <li className="footer__title__nav__ul__li">
              <a href="https://www.linkedin.com/in/nicolas-decressac-2a59a4234/">
                LinkedIn
                <Lottie animationData={linkedin} className="homeLottie" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
