// dependencies
import { useState, useEffect, useRef } from 'react'

// libraries
import Lottie from 'lottie-react'
import github from '../../Utils/lotties/github'
import linkedin from '../../Utils/lotties/linkedin'
import contact from '../../Utils/lotties/contact'

// style
import './_footer.scss'
import ContactForm from '../contactForm/contactForm'

export default function Footer() {
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
  }, [])

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
          {showContact && <ContactForm />}
        </div>
        <nav className="footer__title__nav">
          <ul className="footer__title__nav__ul">
            <li className="footer__title__nav__ul__li">
              GitHub
              <Lottie animationData={github} className="homeLottie" />
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
              LinkedIn
              <Lottie animationData={linkedin} className="homeLottie" />
            </li>
          </ul>
        </nav>
      </footer>
    </>
  )
}
