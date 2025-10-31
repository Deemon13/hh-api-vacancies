import { Pill, InputBase } from "@mantine/core";

import styles from "./AboutPage.module.css";

export const AboutPage = () => {
  return (
    <div className={styles["about__container"]}>
      <h1 className={styles["about__title"]}>👋 Hi there, I'm Dmitriy!</h1>
      <p className={styles["about__descr"]}>
        Frontend developer from the small atom-city. Experienced in full project
        life cycle from design to implementation to integration
      </p>
      <h2 className={styles["about__subtitle"]}>😉 about Me</h2>

      <ul className={styles["about__sentences"]}>
        <li>😎 I'm a frontend developer;</li>
        <li>🐇 & I want to know how deep the rabbit hole is;</li>
        <li>
          🤯 I'm looking for commercial experience, they say you can't get
          anywhere without it;
        </li>
        <li>
          🤔 That's why I slapping the keyboard until something good happens
        </li>
      </ul>

      <h2 className={styles["about__subtitle"]}>hardSkills & stack</h2>
      <InputBase component="div" multiline className={styles["about__skills"]}>
        <Pill.Group>
          <Pill size="xl">JavaScript/TypeScript</Pill>
          <Pill size="xl">HTML + CSS (SCSS)</Pill>
          <Pill size="xl">AJAX</Pill>
          <Pill size="xl">ReactJS</Pill>
          <Pill size="xl">Redux</Pill>
          <Pill size="xl">React Router</Pill>
          <Pill size="xl">GIT & GitHub</Pill>
          <Pill size="xl">NPM</Pill>
          <Pill size="xl">Figma</Pill>
          <Pill size="xl">Vite</Pill>
          <Pill size="xl">Webpack</Pill>
          <Pill size="xl">VSCode</Pill>
        </Pill.Group>
      </InputBase>
      <div className={styles["about__links"]}>
        <a
          href="https://github.com/Deemon13"
          target="_blanc"
          rel="noopener noreferrer"
          className={styles["about__github"]}
        >
          my gitHub
        </a>
        <a
          href="mailto:dmitriy.fedorenko13@yandex.ru"
          className={styles["about__mail"]}
        >
          mail me
        </a>
      </div>
    </div>
  );
};
