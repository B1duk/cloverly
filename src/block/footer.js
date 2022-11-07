import FooterList from "../components/footerList";
import Button from "../components/button";
import '../style/footer.scss';
import logo from '../img/cloverly-logo.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__nav">
                <img className="footer__nav__logo" alt='#' src={logo}></img>
                <a className="footer__nav__login" href="/"> Login </a>
                <Button class="btn_header" btn_text="Get API Keys" />
            </div>
            <div className="footer__list">
                <FooterList 
                    title="Product"
                    item1="Emission Calculations"
                    item2="Diverse Offset Portfolio"
                    item3="Matching the Offset"
                    item4="Transparent Reporting"
                    item5="Flexible API Integration"
                    item6="Verified Carbon Offsets"
                />
                <FooterList 
                    title="Use Cases"
                    item1="Ecommerce"
                    item2="Rideshare"
                    item3="Flights"
                    item4="Enterprise Resource Planning"
                    item5="Energy"
                    item6="Supply Chain"
                    item7="Fintech"
                    item8="Fleet"
                />
                <FooterList 
                    title="Developers"
                    item1="API Docs"
                    item2="Ask Cloverly"
                />
                <FooterList 
                    title="About"
                    item1="How It Works"
                    item2="Offset Projects"
                    item3="Partners"
                    item4="About Us"
                    item5="Blog"
                    item6="News & Press"
                    item7="Contact"
                />
                <FooterList 
                    title="Other"
                    item1="FAQ"
                    item2="Careers"
                    item3="Terms of Service"
                    item4="Privacy Policy"
                />
            </div>
            <p className="footer__copy"> © 2020 Cloverly </p>
        </div>
    )
}

export default Footer;