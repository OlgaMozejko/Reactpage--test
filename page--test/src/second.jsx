import React from 'react'
import gif from './assets/gif-placeholder.png'
import quoteIcon from './assets/icon_quote.svg'
import quoteLine from './assets/quote-dash.svg'

function Card(props) {

    const [toggleStyle, setToggleStyle] = React.useState(false)

    function toggleCardStyle() {
        return(
            setToggleStyle(prevToggleStyle => ! prevToggleStyle)
        )
    }

    const moveIt = {
        marginTop: toggleStyle ? '-30px' : '0px'
    }

    const animateIt = {
        animation: toggleStyle ? 'imgFlick 0.5s ease-out' : 'none'
    }

    const expandIt = {
        width: toggleStyle ? '30px' : '21px'
    }

    return(
        <div className='card' style={moveIt} onMouseEnter={toggleCardStyle} onMouseLeave={toggleCardStyle}>
            <img src={`./${props.photo}`} className='card--img' style={animateIt} />
            <div className='card--title'>
                <h4 className='card--title--text'>{props.title}</h4>
                <div className='card--title--arrow' style={expandIt}></div>
            </div>
            <p className='card--text'>{props.text}</p>
        </div>
    )
}


function Second() {
    return(
        <section className="second--section">
            <div className="second--flex">
                <div className="second--gif">
                    <img src={gif} alt="gif placegolder" className="gif--img" />
                </div>
                <div className="second--cards">
                    <Card 
                    title='Sustainability' 
                    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' 
                    photo='card-1.png'
                    />
                    <Card 
                    title='Material' 
                    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' 
                    photo='card-2.png'
                    />
                    <Card 
                    title='End application' 
                    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' 
                    photo='card-1.png'
                    />
                    <Card 
                    title='Cost' 
                    text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' 
                    photo='card-2.png'
                    />
                </div>
                <div className="second--quote">
                    <img src={quoteIcon} alt="quote marks" className="quote--icon" />
                    <h3 className="quote--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Proin diam purus, lacinia vitae tortor ut, mollis tincidunt urna.</h3>
                    <div className="quote--under">
                        <img src={quoteLine} alt="quote line" className="quote--line" />
                        <p className="quote--under--text">Kildens navn</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Second