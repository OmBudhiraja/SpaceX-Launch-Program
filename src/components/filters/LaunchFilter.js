import React from 'react'

const LaunchFilter = ({setLaunch, setData}) => {
    const filterHandler = (e)=>{
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active')
            setData(null)
            return setLaunch(null)
        }
        const remaining = e.target.parentElement.children;
        for(let i=0; i<remaining.length; i++){
            remaining[i].classList.remove('active')
        }
        e.target.classList.add('active')
        const input = e.target.dataset.value;
        setData(null)
        setLaunch(input)
    }
    return (
        <div>
            <h3 className="filter-heading">Successful Launch</h3> 
            <div className="years-section">
                <button onClick={filterHandler} data-value="true" className="filter-pill">True</button>
                <button onClick={filterHandler} data-value="false" className="filter-pill">False</button>
            </div>
        </div>
    )
}

export default LaunchFilter
