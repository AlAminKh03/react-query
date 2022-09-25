import axios from 'axios';
import React from 'react';
import { useQueries } from 'react-query';

const getSuperHeroes = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const RQdynamicParallel = ({ heroIds }) => {
    const countingId = useQueries(
        heroIds.map(id => {
            return {
                queryKey: ['superheroes', id],
                queryFn: () => getSuperHeroes(id)
            }
        })
    )
    console.log(countingId);
    return (
        <div>

        </div>
    );
};

export default RQdynamicParallel;