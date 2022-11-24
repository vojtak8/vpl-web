import styles from './style.js';
import  {  NavBar,
    Hero,
    Aktuality,
    Nase_sluzby,
    Kontakty,
    Objednat,
    Buttons,
    Footer } from './components';


const App = () => (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Aktuality />
                    <Nase_sluzby />
                    <Objednat />
                    <Kontakty />
                    <Footer />
                    <Buttons />



                </div>
            </div>








        </div>
    );



export default App