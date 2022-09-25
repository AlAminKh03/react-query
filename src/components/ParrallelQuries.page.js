import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const getSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const getFriends = () => {
    return axios.get('http://localhost:4000/brothers')
}

const ParrallelQuries = () => {
    const { data: superHeroes } = useQuery('superhero', getSuperHeroes)
    console.log(superHeroes)
    const { data: brothers } = useQuery('friends', getFriends)
    return (
        <>
            <div>
                {superHeroes?.data.map(hero => {
                    return (
                        <p>{hero.name}</p>
                    )
                })}
                {brothers?.data.map(brother => {
                    return (
                        <p>{brother.name}</p>
                    )
                })}
            </div>
        </>
    );
};

export default ParrallelQuries;