import styles from '../pages/index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <video className={styles.video} autoPlay muted loop>
          <source src="videogralheira.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className={styles.bigtitle}>Explore os Encantos Naturais da Gralheira</h1>
      <div className={styles.buttoncontainer}>
        <button className={styles.button1}>Saber Mais</button>
      </div>
    </div>
  );
};

export default Home;
