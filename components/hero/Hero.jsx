import Link from "next/link";
import Image from "next/image";

import styles from "./Hero.module.scss";

import {
  SiTailwindcss,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiSass,
} from "react-icons/si";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { RxDividerVertical } from "react-icons/rx";

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <section>
        <div>
          <header>
            <h1>Justin Cheng.</h1>
            <h1>Student Developer.</h1>
          </header>
          <p>
            Welcome to the second iteration of my personal webpage. Feel free to
            browse around and get to know me and my projects!
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/chengjustin0222/"
              target="_blank"
              alt="linkedin"
            >
              <AiFillLinkedin
                size={30}
                href="https://www.linkedin.com/in/chengjustin0222/"
              />
            </Link>
            <Link href="https://github.com/jcheng01" target="_blank">
              <AiFillGithub size={30} />
            </Link>
          </div>
        </div>
      </section>
      <section>
        <Image
          src="/pfp.png"
          alt="portrait"
          width={800}
          height={600}
          className={styles.img}
        />
      </section>
      <div className={styles.icons}>
        <div>
          <h3>Tech Stack</h3>
          <RxDividerVertical size={50} className={styles.noIcon} />
        </div>
        <div>
          <SiHtml5 size={30} color="#E34F26" />
          <SiCss3 size={30} color="#1572B6" />
          <SiJavascript size={30} color="#f7df1e" />
          <SiTypescript size={30} color="#3178C6" />
          <SiNodedotjs size={30} color="#6cc24a" />
          <SiMongodb size={30} color="#4DB33D" />
          <SiReact size={30} color="#61DAFB" />
          <SiNextdotjs size={30} color="#000000" />
          <SiTailwindcss size={30} color="#06B6D4" />
          <SiSass size={30} color="#CC6699" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
