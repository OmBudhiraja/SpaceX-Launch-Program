import React from 'react'
import YearFilter from './YearFilter'
import LaunchFilter from './LaunchFilter'
import LandingFilter from './LandingFilter'

const FilterContainer = ({setYear, setLaunch, setLanding, setData}) => {
    return (
        <> 
           <div className="filters">
                <h2>Filters</h2>   
                <YearFilter setYear={setYear} setData={setData} />
                <LaunchFilter setLaunch={setLaunch} setData={setData} />
                <LandingFilter setLanding={setLanding} setData={setData} />
           </div>
        </>
    )
}

export default FilterContainer
