import styles from '../style.js';
import { discount, robot } from '../assets';
import ButtonKontakty from './ButtonKontakty';
const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 
            sm:px-16 px-6`}>
                <div className="flex flex-row items-center
                py-[6px] px-4 bg-discount-gradient
                rounded-[10px] mb-2">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px] "/>
                    <p className={`ml-2 ${styles.paragraph}`}>
                        <span className="text-white">Vitejte na strankach </span> ordinace  {" "}
                        <span className="text-white">Praktickeho lekare</span>
                    </p>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[48px]
                    text-[52px] text-gradient">MUDr. Jana Pivonkova</h1>
                </div>
                <div className="ss:flex hidden md:mr-4
                mr-0">
                    <ButtonKontakty />
                </div>
            </div>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
                <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-[5]"/>
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
            </div>
            <div className={`ss:hidden ${styles.flexCenter}`}>
                <ButtonKontakty />
            </div>
        </section>
    );
};

export default Hero;
