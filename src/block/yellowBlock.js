
import img1 from '../img/yellow_matching.svg';
import img2 from '../img/yellow_transaction.svg';
import img3 from '../img/yellow_ferified.svg';

import Button from "../components/button";
import TextBlock from '../components/textBlock';
import YellowItem from '../components/yellowItem';
import '../style/yellowBlock.scss';

const YellowBlock = () => {
    return (
        <div className='yellow-block'>
            <div className='yellow-block__left'>
                <TextBlock
                    subtitle="How It Works"
                    title="Connecting the Carbon Offset Infrastructure for a More Sustainable World"
                    text="Businesses and consumers count on Cloverly to offset their carbon footprint and create positive environmental change based on real-time business activities. Whether you implement our ready-to-use applications or install our API as part of a custom integration, Cloverly can help you go greener, faster."
                />
                <div className='yellow-block__left__btn'>
                    <Button class="btn_transp" btn_text='Learn More' />
                </div>
            </div>

            <div className='yellow-block__right'>
                <div className='yellow-block__right__item'>
                    <YellowItem
                        picture={img1}
                        title="Matching the Offset"
                        text="The Cloverly API can find and match the best offset per transaction. If your customer orders a product in California, for example, we might partner with an improved forest management project in California to keep the benefit local."
                    />
                </div>
                <div className='yellow-block__right__item'>
                    <YellowItem
                        picture={img2}
                        title="Transaction Transparency"
                        text="We believe in transparency and fully validated transactions. That's why every time you (or your customers) choose to offset an emission-producing activity with Cloverly, we provide real-time transactional data to show the location, type, and amount of carbon offset."
                    />
                </div>
                <div className='yellow-block__right__item'>
                    <YellowItem
                        picture={img3}
                        title="Verified Sources"
                        text="To effectively neutralize carbon emissions, we know that quality matters. That's why Cloverly works with reputable, internationally recognized suppliers who track and verify registered carbon offset projects."
                    />
                </div>
            </div>
        </div>
    );
}

export default YellowBlock;