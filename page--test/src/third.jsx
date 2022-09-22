import React from 'react'
import locationIcon from './assets/config_1.svg'
import buldingIcon from './assets/config_2.svg'

function Button(props) {

    const [bigButton, setBigButton] = React.useState(false)

    function toggleButton() {
        return(
            setBigButton(prevBigButton => !prevBigButton)
        )
    }

    const smallButton = {
        scale: bigButton ? '0.9' : '1'
    }

    const bigBorder = {
        scale: bigButton ? '1' : '0.8'
    }

    return(
        <button className="third--button" onMouseEnter={toggleButton} onMouseLeave={toggleButton}>
        <div className="third--button--border" style={bigBorder}></div>
        <div className="third--button--box" style={smallButton}>
            <p className='button--text'>{props.text}</p>
        </div>
    </button>
    )
}

function Third() {
    return(
        <section className="third--section">
            <div className="third--flex">
                <div className="third--innerflex extra--border">
                    <img src={locationIcon} alt="icon" className="third--icon" />
                    <p className="third--small--text">Sustainability</p>
                    <h3 className="third--text">How much can <strong>your country</strong> save <br></br>with refour?</h3>
                <Button 
                text='read more' 
                />
                </div>
                <div className="third--innerflex">
                    <img src={buldingIcon} alt="icon" className="third--icon" />
                    <p className="third--small--text">Material</p>
                    <h3 className="third--text">How much can <strong>your country</strong> save <br></br> with refour?</h3>
                    <Button 
                    text='read more' 
                     />
                </div>
            </div>
            <div className="questions--box">
            <div className="third--innerflex">
                    <h3 className="third--text question">Do you have any questions?</h3>
                    <p className="questions--text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                <Button 
                text='contact us' 
                />
                </div>
            </div>
        </section>
    )
}

export default Third