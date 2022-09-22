import logo from './assets/Logo.svg'
import React from 'react'

function List(props) {
    const [hover, setHover] = React.useState(false)

    function toggle() {
        setHover(pervHover => !pervHover)
    }

    const bold = {
        fontWeight: hover ? '900' : '700'
    }

    const border = {
        width: hover ? '22px' : '0px'
    }

    return(
    <div className='nav--li' onMouseEnter={toggle} onMouseLeave={toggle}>
        <p className='nav--text' style={bold}>{props.text}</p>
        <div className='nav--border' style={border}></div>
    </div>
    )
}




function Navigation() {

    return(
        <header>
            <img src={logo} alt="logo" className="logo" />
            <div className="nav">
                <List text='Sustainability' />
                <List text='End application' />
                <List text='Cost' />
                <List text='About' />
                <List text='FAQ' />
                <List text='Contact' />
            </div>
        </header>
    )
}

export default Navigation

