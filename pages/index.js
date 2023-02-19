import Navbar from '../components/Navbar.js'

import styles from '../pages/index.module.css'

const Home = () => {
  return (
    <div>
        <Navbar />
        <h1 className={styles.bigtitle}>Explore os Encantos Naturais da Gralheira</h1>
    </div>
  )
}

export default Home