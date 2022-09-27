import axios from 'axios';
import React, { Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';

const fetchInfiniteQueries = ({ pageParam = 1 }) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}
const InfintieQueries = () => {
    const { isLoading, data, isError, error, hasNextPage, fetchNextPage } = useInfiniteQuery(
        'colors', fetchInfiniteQueries, {
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 4) {
                return pages.length + 1
            }
            else {
                return undefined
            }
        }
    }
    )
    console.log(data?.pages);
    return (
        <div>
            {data?.pages.map((group, i) => {
                return <Fragment key={i}>
                    {group?.data.map(color => {
                        return <div key={color.id}>
                            <h1>{color.id} - {color.label}</h1>
                        </div>
                    })}
                </Fragment>
            })}
            <button disabled={!hasNextPage} onClick={fetchNextPage}>load more...</button>
        </div>
    );
};

export default InfintieQueries;