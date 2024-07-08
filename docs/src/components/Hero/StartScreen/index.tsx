import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomepageButton from "@site/src/components/HomepageButton";

const StartScreen = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageWrapper}>
          <img className={styles.heroImage} src={useBaseUrl("/img/hero.png")} draggable={false} />
        </div>
      </div>
      <div className={styles.heading}>
        <div>
          <h1 className={styles.headingLabel}>
            <span>React Native</span>
            <span>Screens</span>
          </h1>
          <h2 className={styles.subheadingLabel}>
          Native Navigation primitives for your React Native app.
          </h2>
        </div>
        <div className={styles.buttonContainer}>
          <HomepageButton
            target="_blank"
            href="https://reactnavigation.org/docs/screen"
            title="Learn more"
          />
        </div>
      </div>
    </section>
  );
};

export default StartScreen;
