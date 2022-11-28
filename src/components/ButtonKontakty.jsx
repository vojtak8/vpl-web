import styles from "../style.js";
import { arrowUp} from '../assets';

const ButtonKontakty = () => {
    return (
        <div className={`${styles.flexCenter} w-[120px] h-[60px]
        rounded-md bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-md`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                       <span className="text-gradient">Kontakty</span>

                    </p>
                    <img src={arrowUp} alt="arrow" />

                </div>
            </div>

        </div>
    );
};
export default ButtonKontakty;