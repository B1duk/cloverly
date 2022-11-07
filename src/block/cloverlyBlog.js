import Button from "../components/button";
import TextBlock from "../components/textBlock";

import '../style/cloverlyBlog.scss';

const CloverlyBlog = () => {
    return (
        <div className='cloverlyBlog'>
            <div className="cloverlyBlog__textBlog">
                <TextBlock
                    subtitle="Cloverly Blog"
                    title="The Latest in the World of Sustainability"
                    text=""
                />
            </div>
            <div className="cloverlyBlog__btn">
                <Button class="btn_transp" btn_text="Read More" />
            </div>
        </div>
    );
}

export default CloverlyBlog;