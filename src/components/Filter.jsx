import { useEffect, useMemo, useState } from "react"

function Filter (props) {

    const uniqueCountries = [...new Set(props.companies?.map((company) => company.location.country))];
    const uniqueIndustries = [...new Set(props.companies?.map((company) => company.industry))];


    return (
        <div className="container">
            <h2 className="filter-header">Filters</h2>
            <select className="filters"
                onChange={(e) => {props.filterCountries(e.target.value)}}>

                <option value="all">All countries</option>

                {uniqueCountries
                    && uniqueCountries.map((elm, i) => {
                        return(
                            <option value={elm} key={i}>
                                {elm}
                            </option>
                        )
                    })
                }
            </select>
            <select className="filters"
                onChange={(e) => {props.filterIndustries(e.target.value)}}>

                <option value="all">All industries</option>

                {uniqueIndustries
                    && uniqueIndustries.map((elm, i) => {
                        return(
                            <option value={elm} key={i}>
                                {elm}
                            </option>
                        )
                    })
                }
            </select>
            <select className="filters"
                onChange={(e) => {props.filterEsg(e.target.value)}}>

                <option value="all">All ESGs</option>
                <option value="0-40">0-40</option>
                <option value="40-50">40-50</option>
                <option value="50-60">50-60</option>
                <option value="60-70">60-70</option>
                <option value="70-80">70-80</option>
                <option value="80-90">80-90</option>
                <option value="90-100">90-100</option>

            </select>
        </div>
    )
}


export default Filter