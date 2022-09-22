import React from 'react'
import iconGlobe from './assets/icon-earth.svg'
import iconTree from './assets/icon-trees.svg'
import iconCO2 from './assets/icon-co2.svg'

function Icon() {

    const [visible, setVisible] = React.useState(false)

    function makeVisible() {
        setVisible(true)
    }

    function makeHidden() {
        setVisible(false)
    }

    const styles = {
        visibility: visible ? 'visible' : 'hidden'
    }

    const line1 = {
        rotate: visible ? '45deg' : '0deg'
    }

    const line2 = {
        rotate: visible ? '-45deg' : '0deg'
    }


    return(
        <div className="extra--icon">
            <div className='icon--textbox' style={styles} >
                <div className='icon--x' onClick={makeHidden}>
                    <div className='icon--x--line' style={line1}></div>
                    <div className='icon--x--line' style={line2}></div>
                </div>
                <div className='icon--text--flex'>
                    <p className='icon--text'><strong>Lorem</strong> ipsum dolar sit</p>
                    <div className='icon--text--innerflex'>
                        <img src={iconTree} alt='tree icon' className='icon--text--img' />
                        <p className='icon--text grey--text'>Trees cut down this year</p>
                    </div>
                    <p  className='icon--text--big'>152.124.156</p>
                    <div className='icon--text--innerflex'>
                        <img src={iconCO2} alt='CO2 icon' className='icon--text--img' />
                        <p className='icon--text grey--text'>CO2 emissions this year</p>
                    </div>
                    <p  className='icon--text--big'>254.241.245</p>
                </div>
            </div>
            <div className='icon--mainbox' onClick={makeVisible} >
                <div className="icon--box"></div>
                <img src={iconGlobe} alt="globe icon" className="icon--img" />
            </div>
        </div>
    )
}

export default Icon