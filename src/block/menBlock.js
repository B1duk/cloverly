import '../style/menBlock.scss';
import Men from '../img/men.svg';
import Google from '../img/google.svg';
import Button from '../components/button';

function MenBlock() {
    return (
        <div className="men-block">
            <div className='men-block__img'>
                <img alt='#' src={Men}></img>
            </div>
            <div className='men-block__text'>
                <p className='men-block__text__logo'>Partner Spotlight</p>
                <p className='men-block__text__small'><span className="men-block__text__small__bold">At the JOIN data conference,</span> the team from Looker (now part of Google) used data provided by attendees to determine the carbon footprint of their travel to the conference and offset it with Cloverly.</p>
                <p className='men-block__text__kov'>“ ”</p>
                <p className='men-block__text__big'>We built a little Javascript application to let you select how much of your carbon footprint you wanted to offset and then got an estimated price via Cloverly, which provides a simple API for purchasing Renewable Energy Certificates (RECs). Once we had the estimate from Cloverly, which helpfully tells you not just cost, but also where the RECs you're purchasing will come from, we approved the purchase and executed it via the API.</p>
                <p className='men-block__text__full'>Read Full Story</p>
                
                <div className='men-block__text__contact'>
                    <img className='men-block__text__contact__img' alt='#' src={Google}></img>
                    <p className='men-block__text__contact__text'>Daniel Mintz<br />Chief Data Evangelist at Looker</p>
                </div>
                
                <div className='men-block__text__button'>
                    <Button btn_text="More Partners" class="btn_transp" />
                </div>
            </div>


        </div>
    )
}

export default MenBlock;