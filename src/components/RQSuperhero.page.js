import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const RQSuperhero = () => {
    const { hero } = useParams()
    console.log(hero);

    const { isLoading, data, isError, error } = useQuery(
        'singleHero',
        () => axios.get(`http://localhost:4000/superheroes/${hero}`)

    )
    console.log(data);
    if (isLoading) {
        <p>Loading ....</p>
    }
    if (isError) {
        console.log(error.message)
    }
    return (
        <div>
            <p>Super hero details</p>
            <p>{data?.data.name}</p>
        </div>
    );
};
export default RQSuperhero;