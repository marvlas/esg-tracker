import { useEffect, useMemo, useState } from "react"

function Filter (props) {

    const uniqueCountries = [...new Set(props.companies?.map((company) => company.location.country))];

    return (
        <div className="container">
            <h2>Filter</h2>
            <select id="country-filter"
                onChange={(e) => {props.filterCompanies(e.target.value)}}>

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
        </div>
    )
}

export default Filter