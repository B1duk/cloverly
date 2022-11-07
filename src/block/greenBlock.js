
import logo1 from '../img/logo_1.svg';
import logo2 from '../img/logo_2.svg';
import logo3 from '../img/logo_3.svg';
import logo4 from '../img/logo_4.svg';
import logo5 from '../img/logo_5.svg';
import Button from "../components/button";
import '../style/greenBlock.scss';

const greenBlock = () => {
    return (
        <div className='first-block'>
            <div className='first-block__top'>
                <p className='first-block__top__subtitle'> Sustainability on Demand </p>
                <h1 className='first-block__top__title'> Helping the World Go Carbon Neutral </h1>
                <p className='first-block__top__descr'>
                    Our Sustainability-as-a-Service platform calculates and purchases 
                    carbon offsets to neutralize the environmental impact of everyday activities like 
                    ecommerce deliveries, ridesharing, flights, and more. 
                </p>
                <div className='first-block__top__buttons'>
                    <div className='first-block__top__buttons__btn'>
                        <Button btn_text="Get Started" class="btn_white" />
                    </div>
                    <div className='first-block__top__buttons__btn'>
                        <Button btn_text="Let's Talk" class="btn_black" />
                    </div>
                </div>
                
            </div>
            <div className='first-block__bottom'>
                <img className='first-block__bottom__img' src={logo1} alt='#' ></img>
                <img className='first-block__bottom__img' src={logo2} alt='#' ></img>
                <img className='first-block__bottom__img' src={logo3} alt='#' ></img>
                <img className='first-block__bottom__img' src={logo4} alt='#' ></img>
                <img className='first-block__bottom__img' src={logo5} alt='#' ></img>
            </div>
        </div>
    );
  }
  
  export default greenBlock;