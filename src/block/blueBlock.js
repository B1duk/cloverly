import Code from '../img/code.svg';
import Button from "../components/button";

import '../style/blueBlock.scss';
import '../style/button.scss';

function BlueBlock() {
    return (
        <div className='blue-block'>
            <div className='blue-block__text'>
                <p className='blue-block__text__logo'>For Developers, By Developers</p>
                <p className='blue-block__text__title'>Simple Integration.<br />RESTful API.</p>
                <p className='blue-block__text__info'>The Cloverly API calculates and offsets carbon emissions on a <br />per-transaction basis. We can determine the amount of carbon emitted and offset that quantity by purchasing carbon offsets in real time. Explore our developer docs to find the right endpoints for your application, and sign up for free to get the Cloverly sandbox keys.</p>
                <div className='blue-block__text__button'>
                    <div className='blue-block__text__button__btn'>
                        <Button btn_text="Get Started" class="btn_green" />
                    </div>
                    <div className='blue-block__text__button__btn'>
                        <Button btn_text="Let's Talk" class="btn_white" />
                    </div>
                </div>
            </div>
            <div className='blue-block__img'>
                <img alt='#' src={Code}></img>
            </div>
        </div>
    )
}
export default BlueBlock;