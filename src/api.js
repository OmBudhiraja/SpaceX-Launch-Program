

export const allFiltersUrl = (year, launch, landing)=> {
    if(year === null && launch === null && landing === null) return `https://api.spaceXdata.com/v3/launches?limit=100`
    else{
        if(year !== null && launch !== null && landing !== null) return `https://api.spaceXdata.com/v3/launches?limit=50&launch_success=${launch}&land_success=${landing}&launch_year=${year}`
        if(year !== null && launch === null && landing === null ) return `https://api.spaceXdata.com/v3/launches?limit=50&launch_year=${year}`
        if(year === null && launch !== null && landing === null) return `https://api.spaceXdata.com/v3/launches?limit=50&launch_success=${launch}`
        if(year === null && launch === null && landing !== null) return `https://api.spaceXdata.com/v3/launches?limit=50&land_success=${landing}`
        if(year === null && launch !== null && landing !== null) return `https://api.spaceXdata.com/v3/launches?limit=50&launch_success=${launch}&land_success=${landing}`
        if(year !== null && launch === null && landing !== null) return `https://api.spaceXdata.com/v3/launches?limit=50&land_success=${landing}&launch_year=${year}`
        if(year !== null && launch !== null && landing === null) return `https://api.spaceXdata.com/v3/launches?limit=50&launch_success=${launch}&launch_year=${year}`
    }
}