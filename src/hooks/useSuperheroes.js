import axios from "axios"
import { useMutation, useQuery } from "react-query"
const getSuperHeroes = () => {
    return axios.get("http://localhost:4000/superheroes")
}
const addSuperHero = (hero) => {
    console.log(hero)
    return axios.post("http://localhost:4000/superheroes", hero)


}
export const useSuperheroes = () => {
    return useQuery(
        "super-heroes",
        getSuperHeroes
    )
}

export const useAddSuperhero = () => {
    return useMutation(addSuperHero)
}