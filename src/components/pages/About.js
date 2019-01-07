import React from 'react'

let About = () => {
    return (
        <React.Fragment >
            <p style={about}>This is a TodoList app!</p>
        </React.Fragment>
    )
}

const about = {
    display: 'grid',
    placeContent: 'center',
    padding: '5rem 0'
    
}

export default About;