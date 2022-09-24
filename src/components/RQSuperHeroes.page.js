import { Link } from "react-router-dom"
import { useSuperheroes } from "../hooks/useSuperheroes"

export const RQSuperHeroesPage = () => {

  const { isLoading, data, isError, error } = useSuperheroes()
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data.data.map(hero => {
        return (
          <p>  <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link></p>
        )
      })}
    </>)
}
