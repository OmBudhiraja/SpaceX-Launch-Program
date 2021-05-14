import React from 'react'
import Card from './Card'


const Result = ({data}) => {

    return (
        <div className="results-container">
           { data.map(el => ( <Card data={el} key={el.flight_number} />))}
        </div>
    )
}

export default Result
