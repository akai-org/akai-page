import React from 'react'
import './eventStyle.scss'

const Event = () => {
    return(
        <div className="event-container">
            <div className="event-picture">
                <img src="/assets/images/event2.png" alt=""/>
            </div>
            <div className="event-info">
                <div className="event-flex-title">
                    <h3 className="event-title">Bardzo długi tytuł wydarzenia</h3>
                    <div className="event-break"></div>
                </div>
                <div className="event-flex-details">
                    <p className="event-place">Miejsce wydarzenia</p>
                    <p className="event-date">04/12/2019 18:30</p>
                </div>
                
            </div>
        </div>
    )
}

export default Event