import "./Footer.css"

function Footer() {
    return (
        <div className={"main-footer"}>
            <h3 className={"main-footer-title1"}>Birmingham</h3>
            <h3 className={"main-footer-title2"}>Motor</h3>
            <h3 className={"main-footer-title3"}>Hub</h3>
            <div className={"main-footer-links"}>
                <div className={"main-footer-company"}>
                    <h4>Company</h4>
                    <p>About us</p>
                    <p>Newsroom</p>
                    <p>Team</p>
                </div>
                <div className={"main-footer-support"}>
                    <h4>Support</h4>
                    <p>Contact up</p>
                    <p>FAQ</p>
                </div>
                <div className={"main-footer-stayconnected"}>
                    <h4>STAY CONNECTED</h4>
                    <p>Join over 2,000 people who receive by-weekly emails on the latest car news</p>
                        <div className={"main-footer-stayconnected-email"}>
                            <input placeholder={"Email Address"}/>
                            <button className={"main-footer-stayconnected-button"}>Sign Up</button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;