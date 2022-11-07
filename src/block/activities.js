import Button from "../components/button";

import '../style/activities.scss';

const Activities = () => {
    return (
        <div className='activities'>
            <div className="activities__block">
                <p className='activities__block__title'>What Activities Will You Offset?</p>
                <p className='activities__block__descr'>Neutralize your carbon footprint with the Cloverly API.</p>
                <Button class="btn_green" btn_text="Try Cloverly" />
            </div>
        </div>
    );
}

export default Activities;