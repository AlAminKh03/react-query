
import { useState } from "react"
import { useSuperheroes } from "../hooks/useSuperheroes"

export const RQSuperHeroesPage = () => {
  const [intervalTime, setIntervaltTime] = useState(3000)
  const onSuccess = (data) => {

    if (data.length === 4) {
      console.log("successfully added")
      setIntervaltTime(false)
    }
  }
  const onError = (error) => {
    if (error) {
      setIntervaltTime(false)
    }
  }

  const { isLoading, data, isError, error } = useSuperheroes(onSuccess, onError)


  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return <>
    <h2>React Query Super Heroes Page</h2>
    {/* {data?.data.map(hero => {
      return <p>{hero.name}</p>
    })} */}
    {data.map((name) => <p>{name}</p>)}
  </>
}
