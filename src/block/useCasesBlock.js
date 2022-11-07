import img1 from '../img/useCases_1.svg';
import img2 from '../img/useCases_2.svg';
import img3 from '../img/useCases_3.svg';
import img4 from '../img/useCases_4.svg';
import img5 from '../img/useCases_5.svg';
import img6 from '../img/useCases_6.svg';
import img7 from '../img/useCases_7.svg';
import img8 from '../img/useCases_8.svg';

import TextBlock from '../components/textBlock';
import UseCasesItem from '../components/useCasesItem';
import Button from "../components/button";

import '../style/useCasesBlock.scss';

const UseCasesBlock = () => {
    return (
        <div className='useCases'>
            <div className='useCases__top'>
                <TextBlock
                    subtitle="Use Cases"
                    title="Used in Every Environment, to Save the Environment"
                    text="There are many sources of carbon emissions, including some that we don't typically associate with environmental impacts. For example, even cloud computing requires physical servers powered by electricity. Below are a few common use cases for carbon offsetting."
                />
            </div>

            <div className='useCases__bottom'>
                <UseCasesItem 
                    picture={img1}
                    title="Ecommerce"
                    text="See how Cloverly partners are offsetting ecommerce shipments through Shopify, BigCommerce, Magento, and custom integrations."
                />
                <UseCasesItem 
                    picture={img2}
                    title="Rideshare"
                    text="Miles traveled and carbon emitted can be easily calculated and offset in real time with Cloverly."
                />
                <UseCasesItem 
                    picture={img3}
                    title="Flights"
                    text="Take off the carbon impact of aviation. With the Cloverly API, calculate and offset miles flown and impact generated."
                />
                <UseCasesItem 
                    picture={img4}
                    title="Enterprise Resource Planning"
                    text="Learn how enterprise software companies are using the Cloverly integration to offset their environmental effects."
                />
                <UseCasesItem 
                    picture={img5}
                    title="Energy"
                    text="Find out how the energy industry is using carbon offsets to make a difference and create a more sustainable world."
                />
                <UseCasesItem 
                    picture={img6}
                    title="Supply Chain"
                    text="Calculate offsets based on your supply chain, make a difference, and see how others are doing it, too."
                />
                <UseCasesItem 
                    picture={img7}
                    title="Fintech"
                    text="Cloverly can help identify carbon footprints based on financial transaction data and purchase the offsets needed to mitigate these effects."
                />
                <UseCasesItem 
                    picture={img8}
                    title="Fleet"
                    text="You track mileage and fuel economy for your vehicle fleet. So you already have the data the Cloverly API needs to calculate and offset the carbon impact."
                />
            </div>

            <div className='useCases__bottom_2'>
                <TextBlock
                    subtitle=""
                    title="Don't See Your Industry?"
                    text="Cloverly can accommodate a variety of use cases for many different carbon-producing activities. Even if you don't see your industry here or you're not sure what activities to offset, we can help. Reach out to Cloverly and let us get you on the path to net-zero carbon emissions."
                />
                <Button class="btn_black" btn_text="Contact Us"/>
            </div>
        </div>
    );
}

export default UseCasesBlock;