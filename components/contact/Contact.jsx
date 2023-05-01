import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <h2>
        <span>04. Happy to connect!</span>
      </h2>
      <h1>Keep In Touch</h1>
      <p>
        My inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <button className={styles.btn}>
        <a
          href="mailto:chengjustin24@gmail.com"
          class="mailButton"
          target="_blank"
        >
          Send Email
        </a>
      </button>
    </div>
  );
};

export default Contact;
