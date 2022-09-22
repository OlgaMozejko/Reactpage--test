import binImg from './assets/bin.png'
import arrowDown from './assets/arrow-down.svg'
import logo from './assets/Logo.svg'

function Hero() {
    return(
        <section className="hero--section">
            <div className="hero">
                <div className="hero--flex ">
                    <h1 className="hero--title">Reinventing</h1>
                    <h1 className="hero--title hero--orange">packaging</h1>
                    <p className="hero--text">Introducing the most sustainable material category 
                    for packaging on the market, with the lowest costs and carbon footprint to date</p>
                    <button className="hero--button">
                        <p className="hero--button--text">read more</p>
                        <div className="hero--button--arrow"></div>
                    </button>
                </div>
                <div className="hero--images">
                    <img src={binImg} alt="refour bin" className="hero--img" />
                    <img src={logo} alt="logo" className="hero--logo" />
                </div>
            </div>
        <div className="hero--arrow">
            <div className="hero--arrow--box"></div>
            <img src={arrowDown} alt="arrow down" className="hero--arrow--img" />
        </div>
        </section>
    )
}

export default Hero