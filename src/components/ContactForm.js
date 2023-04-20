import { useRef, useState } from "react";
import classes from "./ContactForm.module.css";
const isEmpty = (value) => value.trim() === "";
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
export default function ContactForm({ onSend }) {
  const titleRef = useRef();
  const subjectRef = useRef();
  const userContactRef = useRef();

  const [formInputValidity, setformInputValidity] = useState({
    title: true,
    subject: true,
    userCotact: true,
  });

  const titleControlClasses = `${formInputValidity.title ? "" : "invalid"}`;
  const subjectControlClasses = `${formInputValidity.subject ? "" : "invalid"}`;
  const userContactControlClasses = `${
    formInputValidity.userCotact ? "" : "invalid"
  }`;

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredSubject = subjectRef.current.value;
    const enteredUserContact = userContactRef.current.value;

    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredSubjectIsValid = !isEmpty(enteredSubject);
    const enteredUserContactIsValid = isValidEmail(enteredUserContact);

    setformInputValidity({
      title: enteredTitleIsValid,
      subject: enteredSubjectIsValid,
      userCotact: enteredUserContactIsValid,
    });

    const formIsValid =
      enteredTitleIsValid && enteredSubjectIsValid && enteredUserContactIsValid;

    if (!formIsValid) {
      return;
    }

    onSend({
      title: enteredTitle,
      subject: enteredSubject,
      userContact: enteredUserContact,
    });

    titleRef.current.value = "";
    subjectRef.current.value = "";
    userContactRef.current.value = "";
  };
  return (
    <form onSubmit={submitFormHandler} className={classes.flex}>
      <div className={classes.flexItem}>
        <label htmlFor="title">Title </label>
        <input
          id="title"
          type="text"
          name="title"
          ref={titleRef}
          className={titleControlClasses}
        />
      </div>
      <div className={classes.flexItem}>
        <label htmlFor="subject">Subject </label>
        <textarea
          id="subject"
          rows="4"
          cols="50"
          name="subject"
          ref={subjectRef}
          className={subjectControlClasses}
        />
      </div>
      <div className={classes.flexItem}>
        <label htmlFor="userContact">Your email </label>
        <input
          id="userContact"
          type="email"
          name="userContact"
          ref={userContactRef}
          className={userContactControlClasses}
        />
      </div>
      <style jsx>{`
        input {
          border: 1px solid black;
        }
        .invalid {
          border: 1px solid red;
        }
      `}</style>
      <button type="submit">Send</button>
    </form>
  );
}
