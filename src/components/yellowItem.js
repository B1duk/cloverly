import '../style/yellowItem.scss';

function YellowItem(props) {
    return (
        <div className='yellow_Item'>
            <img alt='#' src={props.picture} className='yellow_Item__img'></img>
            <p className='yellow_Item__title'>{props.title}</p>
            <p className='yellow_Item__text'>{props.text}</p>
        </div>
    )
}

export default YellowItem;