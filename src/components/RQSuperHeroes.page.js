import { Link } from "react-router-dom"
import { useSuperheroes } from "../hooks/useSuperheroes"

export const RQSuperHeroesPage = () => {

  const { isLoading, data, isError, error } = useSuperheroes()

  console.log(data)
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return <>
    <h2>React Query Super Heroes Page</h2>
    {data.map(hero => {
      return (
        <Link to={`/superheroes/${hero.id}`}>{hero.name}</Link>
      )
    })}
  </>
}
