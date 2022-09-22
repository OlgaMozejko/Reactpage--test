import someTW from './assets/some-tw.svg'
import someIG from './assets/some-ig.svg'
import someFB from './assets/some-fb.svg'
import someYT from './assets/some-yt.svg'
import phone from './assets/phone.svg'
import adress from './assets/adress.svg'
import mail from './assets/mail.svg'
import smallArrow from './assets/link.svg'
import FooterLogo from './assets/Logo.svg'

function FooterList(props) {
    return(
        <div className="footer--list">
            <img src={smallArrow} alt="little arrow" className="footer--arrow" />
            <p className="footer--list--text">{props.text}</p>
        </div>
    )
}

function Footer() {
    return(
        <footer className="footer">
            <div className="footer--flex">
                <div className="footer--innerflex">
                    <div className="footer--box">
                        <img src={FooterLogo} alt="logo" className="footer--logo" />
                        <div className="info--box">
                            <img src={phone} alt="info icon" className="info--icon" />
                            <p>+45 50 80 20 99</p>
                        </div>
                        <div className="info--box">
                            <img src={mail} alt="info icon" className="info--icon" />
                            <p>info@refour.com</p>
                        </div>
                        <div className="info--box">
                            <img src={adress} alt="info icon" className="info--icon" />
                            <p>Nikolaj Plads 15 <br></br>1067 København K<br></br> CVR: 54786214</p>
                        </div>
                    </div>
                    <div className="footer--box">
                        <p className="footer--title">Genveje</p>
                        <FooterList 
                        text='Sustainability'
                        />
                        <FooterList 
                        text=' Material'
                        />
                        <FooterList 
                        text='Costs'
                        />
                        <FooterList 
                        text='About'
                        />
                        <FooterList 
                        text='FAQ'
                        />
                        <FooterList 
                        text='Contact'
                        />
                    </div>
                    <div className="footer--box">
                    <p className="footer--title">Andre links</p>
                        <FooterList 
                        text='How much can your country save?'
                        />
                        <FooterList 
                        text='How much can your company save?'
                        />
                        <FooterList 
                        text='Press releases'
                        />
                        <FooterList 
                        text='Documentation'
                        />
                        <FooterList 
                        text='Style sheet'
                        />
                    </div>
                    <div className="footer--box">
                    <p className="footer--title">Find os</p>
                        <div className="footer--some">
                            <img src={someFB} alt="some icon" className="some--icon" />
                            <img src={someTW} alt="some icon" className="some--icon" />
                            <img src={someIG} alt="some icon" className="some--icon" />
                            <img src={someYT} alt="some icon" className="some--icon" />
                        </div>
                    </div>
                </div>
            <div className="cookies--box">
                <FooterList 
                text='Persondata &#38; cookies'
                />
            </div>
            </div>
        </footer>
    )
}

export default Footer