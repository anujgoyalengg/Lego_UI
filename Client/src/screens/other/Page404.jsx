import React, { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import styles from "../Styles/Page404.module.css";
import img from "../../assets/ghost-img.png"
import { Link } from 'react-router-dom';

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
    <main className={styles.main}>
            <section className={styles.home}>
                <div className={`${styles.homeContainer} ${styles.container}`}>
                    <div className={styles.homeData}>
                        <span className={styles.homeSubtitle}>Error 404</span>
                        <h1 className={styles.homeTitle}>Hey Buddy</h1>
                        <p className={styles.homeDescription}>
                            We can't seem to find the page <br/> you are looking for.
                        </p>
                        <Link to={"/"}>
                        <a href="/" className={styles.homeButton}>
                            Go Home
                        </a>
                        </Link>
                    </div>

                    <div className={styles.homeImg}>
                        <img className={styles.ghostimg} src={img} alt="" />
                        <div className={styles.homeShadow}></div>
                    </div>
                </div>

            
            </section>
        </main>
  );
};

export default ErrorPage;
