import Nav from "../components/nav";
import Button from "../components/button";
import '../style/header.scss';
import logo from '../img/cloverly-logo.svg'

function Header(){
    return(
        <div className="header">
            <img className="header__logo" src={logo}></img>
            <div className="header__nav"> <Nav/> </div>
            <Button class="btn_header" btn_text="Get API Keys" />
        </div>
    )
}

export default Header;