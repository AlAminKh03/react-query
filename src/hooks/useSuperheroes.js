import axios from "axios"
import { useQuery } from "react-query"
const getSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}
export const useSuperheroes = () => {
    return useQuery(
        "super-heroes",
        getSuperHeroes
    )
}