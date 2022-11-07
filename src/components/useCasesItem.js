import '../style/useCasesItem.scss';

function UseCasesItem(props) {
    return (
        <div className='useCases_Item'>
            <img alt='#' src={props.picture} className='useCases_Item__img'></img>
            <div className='useCases_Item__textBlock'>
                <p className='useCases_Item__textBlock__title'>{props.title}</p>
                <p className='useCases_Item__textBlock__text'>{props.text}</p>
                <a href='/' className='useCases_Item__textBlock__more'> Learn more</a>
            </div>
        </div>
    )
}

export default UseCasesItem;