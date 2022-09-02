// scss
import './_contactForm.scss'
import '../../Utils/sass/_global.scss'

export default function ContactForm() {
  return (
    <>
      <form className="formContainer__form">
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
