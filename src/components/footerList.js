import '../style/footerList.scss';

function FooterList(props) {
    return (
        <div className='footerList'>
            <p className='footerList__title'> {props.title} </p>
            <ul className='footerList__list'>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item1} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item2} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item3} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item4} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item5} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item6} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item7} </a> 
                </li>
                <li className='footerList__list__item'>
                    <a className='footerList__list__item__a' href='/'> {props.item8} </a> 
                </li>
            </ul>
        </div>
    )
}

export default FooterList;