import { useState } from "react"
import { Link } from "react-router-dom"
import { useAddSuperhero, useSuperheroes } from "../hooks/useSuperheroes"

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')



  const { isLoading, data, isError, error } = useSuperheroes()

  const { mutate } = useAddSuperhero()

  const formOnsubmit = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo }
    mutate(hero)
  }
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)} />
        <button onClick={formOnsubmit}>Add one</button>
      </div>
      <h2>React Query Super Heroes Page</h2>
      {data.data.map(hero => {
        return (
          <p key={hero.id}>  <Link to={`/rq-super-hero/${hero.id}`}>{hero.name}</Link></p>
        )
      })}
    </>)
}
