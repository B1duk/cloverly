import '../style/textBlock.scss';

function TextBlock(props) {
    return (
        <div className='text_block'>
            <p className='text_block__logo'>{props.subtitle}</p>
            <p className='text_block__title'>{props.title}</p>
            <p className='text_block__text'>{props.text}</p>
        </div>
    )
}

export default TextBlock;