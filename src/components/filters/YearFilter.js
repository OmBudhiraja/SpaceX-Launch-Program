import React from 'react'

const YearFilter = ({setYear, setData}) => {
    const years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020 ]
    const filterHandler = (e)=>{

        if(e.target.classList.contains('active')){
            e.target.classList.remove('active')
            setData(null)
            return setYear(null)
        }
        const remaining = e.target.parentElement.children;
        for(let i=0; i<remaining.length; i++){
            remaining[i].classList.remove('active')
        }
        e.target.classList.add('active')
    
        const filterYear = e.target.dataset.year
        setData(null)
        setYear(filterYear)
   }
    return (
        <div>
          <h3 className="filter-heading">Launch Year</h3>  
          <div className="years-section">
          {years.map(el => (
              <button onClick={filterHandler} className="filter-pill" data-year={el} key={el}>{el}</button>
          ))}
          
          </div>
        </div>
    )
}

export default YearFilter
