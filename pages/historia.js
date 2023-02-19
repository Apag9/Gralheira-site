import Navbar from '../components/Navbar.js'

import styles from '../pages/historia.module.css'


const historia = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.historiabox}>
                <p className={styles.historiatext}>A Freguesia da Gralheira fica localizada na Serra de Montemuro, na vertente norte, e é conhecida como a "Princesa da Serra".
                É considerada a mais progressiva e desenvolvida entre as freguesias das encostas da montanha.
                Embora pertença ao concelho de Cinfães, está mais ligada a Castro Daire pelas vias de comunicação e proximidade das povoações. A paisagem ao redor é deslumbrante, embora bravia, com montanhas e planaltos, e campos verdejantes no fundo dos vales. 
                A Gralheira recebeu seu nome da palavra "agreste", que significava um lugar desabrido, áspero e infértil. A data de sua fundação não é conhecida com precisão, mas supõe-se que existisse já no tempo dos Godos. Foi um dos quatro curatos da freguesia de S. Pedro de Ferreiros de Tendais, que chegou a ser concelho durante muitos anos, tendo recebido foral de D. Sancho I em 1210 e D. Afonso II em 1258. 
                Alguns privilégios foram concedidos ao concelho, como nomear um mordomo para receber os foros e entregar ao Rei, não irem à guerra sem que o Rei fosse, entre outros. No entanto, D. Afonso V anulou o privilégio de reguengo e de nunca poder sair da Coroa, dando a terra em vida a D. Fernando I, Duque de Bragança, por doação régia em 1471, com a categoria de julgada.</p>
             </div> 
 
        </div>  
    )
  }

export default historia