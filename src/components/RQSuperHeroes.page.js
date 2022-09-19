import axios from "axios"
import { useQuery } from "react-query"

const getSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes1")
}

const onSuccess = () => {
  console.log("server ran successfully ")
}
const onError = () => {
  console.log("server did not run successfully :( ")
}

export const RQSuperHeroesPage = () => {

  const { isLoading, data, isError, error } = useQuery(
    "superHeros",
    getSuperHeroes, {
    onSuccess,
    onError
  }

  )
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return <>
    <h2>React Query Super Heroes Page</h2>
    {data?.data.map(hero => {
      return <p>{hero.name}</p>
    })}
  </>
}
