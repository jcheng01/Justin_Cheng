import styles from './Footer.module.scss';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href="">
        <p>Built By Justin Cheng 2023</p>
      </a>
      <div>
        <a href="https://www.linkedin.com/in/chengjustin0222/" target="_blank">
          <AiFillLinkedin
            size={30}
            href="https://www.linkedin.com/in/chengjustin0222/"
          />
        </a>
        <a href="https://github.com/jcheng01" target="_blank">
          <AiFillGithub size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
