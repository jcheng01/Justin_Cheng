import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.scss';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <Image
        src="/IMG_2709.jpeg"
        alt="portrait"
        width={350}
        height={250}
        className={styles.img}
      ></Image>
      <div className={styles.content}>
        <div>
          <h3>
            <span>01.</span>About Me
          </h3>
          <hr />
        </div>
        <div>
          <p>
            Hello, My name is Justin and I enjoy creating modern pages for the
            web. Along with being a full time student at{' '}
            <Link href="https://ischool.syr.edu/academics/information-management-and-technology-bachelors-degree/">
              Syracuse University
            </Link>
            , I am also a Student Developer. My proficiency includes HTML5,
            CSS3/SCSS, JavaScript, React, Next, and Tailwind CSS.
            <br />
            <br />I have experience designing and building responsive websites
            using modern techniques. Outside of my curriculum as an Information
            Technology & Management Major, I like to code and problem solve on
            the side to help with my imposter syndrome. If we have a chat I
            could tell you all about it. Please check out some small fun
            projects I have built for myself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
