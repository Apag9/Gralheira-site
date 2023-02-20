import styles from '../pages/index.module.css'

const Home = () => {
  return (
    <div> 
          <h1 className={styles.bigtitle}>Explore os Encantos Naturais da Gralheira</h1> 
          <div className={styles.container}>
              <button className={styles.button1}>Saber Mais</button>
          </div>
    </div>
  )
}

export default Home