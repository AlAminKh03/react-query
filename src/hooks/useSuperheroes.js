import axios from "axios"
import { useQuery } from "react-query"
const getSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}
export const useSuperheroes = (onSuccess, onError) => {

    return useQuery(
        "super-heroes",
        getSuperHeroes, {
        onSuccess,
        onError,
        select: (data) => {
            const superheroNames = data.data.map((superheroName) => {
                return superheroName.name
            })
            return superheroNames
        }
    }
    )
}