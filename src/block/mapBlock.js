import TextBlock from '../components/textBlock';
import Map from '../img/carta.svg';
import Button from "../components/button";
import '../style/button.scss';
import '../style/mapBlock.scss';

function MapBlock() {
    return (
        <>
            <div className="map_block">
                <div className="map_block__textof">
                    <TextBlock
                        subtitle="Cloverly API"
                        title="Offset Your Carbon Footprint in Real Time"
                        text="Cloverly's powerful API calculates the impact of common carbon-intensive 
                        activities in real time and uses verified, quality carbon offset projects to 
                        neutralize them. Ready to get started? Create an account to integrate the Cloverly
                        API for free, or contact us for custom solutions."
                    />
                </div>
                <div className='map_block__buttons'>
                    <div className='map_block__buttons__btn'>
                        <Button btn_text="Get Started" class="btn_green" />
                    </div>
                    <div className='map_block__buttons__bton'>
                        <Button btn_text="Let's Talk" class="btn_black" />
                    </div>
                </div>
            </div>
            <div className='map-img'>
                <img className='map-img__map' alt='#' src={Map}></img>
            </div>
        </>
    )
}

export default MapBlock;