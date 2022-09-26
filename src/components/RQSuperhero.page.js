import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import useSuperHeroData from '../hooks/useSuperHeroData';

const RQSuperhero = () => {
    const { hero } = useParams()

    const { isLoading, data, isError, error } = useSuperHeroData(hero)
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