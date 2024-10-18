import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import styles from "../Styles/Page404.module.css";
import img from "../../assets/ghost-img.png"

const ErrorPage = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "90px",
      duration: 3000,
    });

    sr.reveal(`.${styles.homeData}`, { origin: "top", delay: 400 });
    sr.reveal(`.${styles.homeImg}`, { origin: "bottom", delay: 600 });
    sr.reveal(`.${styles.homeFooter}`, { origin: "bottom", delay: 800 });
  }, []);

  return (
    <><div className={styles.maindiv}>

    </div>
      <main className={styles.main}>
        <section className={styles.home}>
          <div className={`${styles.homeContainer} container`}>
            <div className={styles.homeData}>
              <span className={styles.homeSubtitle}>Error 404</span>
              <h1 className={styles.homeTitle}>Hey Buddy</h1>
              <p className={styles.homeDescription}>
                We can't seem to find the page <br /> you are looking for.
              </p>
              <a href="#" className={styles.homeButton}>
                Go Home
              </a>
            </div>

            <div className={styles.homeImg}>
              <img src={img} alt="Ghost Image" />
              <div className={styles.homeShadow}></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
