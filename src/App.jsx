import styles from './style.js';

const App = () => (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <h1 className={`${styles.heading2}`}>navbar</h1>
                </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    Hero1
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    Aktuality
                    Naše služby
                    Objednat
                    Footer


                </div>
            </div>








        </div>
    );



export default App