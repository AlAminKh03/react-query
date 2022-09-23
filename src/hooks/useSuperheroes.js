import axios from "axios"
import { useQuery } from "react-query"
const getSuperHeroes = () => {
    return fetch("../../db.json")
        .then(res => res.json)
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
}
console.log(getSuperHeroes)
export const useSuperheroes = () => {
    return useQuery(
        "super-heroes",
        getSuperHeroes
    )
}