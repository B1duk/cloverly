import '../style/nav.scss';

function Nav(){
    return(
        <ul className='nav'>
            <li className='nav__item'> <a className='nav__item__a' href='/'> Product </a> </li>
            <li className='nav__item'> <a className='nav__item__a' href='/'> Use Cases </a> </li>
            <li className='nav__item'> <a className='nav__item__a' href='/'> Developers </a> </li>
            <li className='nav__item'> <a className='nav__item__a' href='/'> Pricing </a> </li>
            <li className='nav__item'> <a className='nav__item__a' href='/'> About </a> </li>
            <li className='nav__item'> <a className='nav__item__a' href="/"> Login </a> </li>
        </ul>
    )
}

export default Nav;