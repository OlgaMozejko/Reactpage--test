function Bar(props) {

    const barWidth = {
        width: props.precent
    }

    return(
        <div>
            <div className='bar--innerflex'>
                <p className='bar--text'>{props.text}</p>
                <p className='bar--text precent'>{props.precent}</p>
            </div>
            <div className='bar'>
                <div className='inner--bar' style={barWidth} ></div>
            </div>
        </div>
    )
}

function First() {
    return(
        <section className='first--section'>
            <div className='first--grid'>
                <div className='grid--1'>
                    <h2 className='first--title'>Putting our health and planet first</h2>
                    <p className='first--text'>Refour is more than packaging. We are the 
                    greenest solution on the planet, paving a path towards a better future. 
                    With the lowest cost and the best performing features, we put a sustainable
                     material into reach of all corporations that want to act now to help restore and renew our planet. We are 
                    not paper, nor plastic, and we do not mix materials. We are 100% recyclable.</p>
                    <button className="hero--button">
                        <p className="hero--button--text">read more</p>
                        <div className="hero--button--arrow"></div>
                    </button>
                </div>
                <div className='grid--2'>
                    <Bar 
                    text='Recyleble' 
                    precent='100%' 
                    />
                    <Bar 
                    text='Lower carbon footprint' 
                    precent='80%'
                    />
                    <Bar 
                    text='Lower cost' 
                    precent='60%'
                    />
                    <Bar 
                    text='Less material-user' 
                    precent='50%'
                    />
                </div>
                <div className='grid--3'>
                    <div className='video--box'>
                        <div className='video--img'></div>
                        <div className='video--img--border'></div>
                        <div className='video--hover'>
                        <div className='video--play'></div>
                        <div className='video--play--border'></div></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default First