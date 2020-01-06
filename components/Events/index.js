import React from 'react'
import Event from './event'
import './pageStyle.scss'

const EventPage = () => {
    return(
        <div className="page-container">
            <h1 className="page-event-section-header">Aktualne wydarzenia</h1>
                <div className="page-event-container">
                    <Event/>
                </div>
            <h1 className="page-event-section-header">Minięte wydarzenia</h1>
                <div className="page-event-container">
                    <Event/>
                    <Event/>
                </div>
        </div>
    )
}

export default EventPage
