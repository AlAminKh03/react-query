import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchcolorBypage = ({ queryKey }) => {
    const pageNumber = queryKey[1]
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}
const PaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, data, isError, error } = useQuery(['color', pageNumber], fetchcolorBypage,
        {
            keepPreviousData: true
        })
    if (isLoading) {
        <p>Loading...</p>
    }
    if (isError) {
        <p>{error.message}</p>
    }
    console.log(data)
    return (
        <div>
            <div>
                {data?.data.map(color => {
                    return <p>{color.label}</p>
                })}
            </div>
            <div>
                <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>prev page</button>
                <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>next page</button>
            </div>
        </div>
    );
};

export default PaginatedQueries;