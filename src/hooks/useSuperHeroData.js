import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
const fetchHero = ({ queryKey }) => {
    const hero = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${hero}`)
}
const useSuperHeroData = (hero) => {
    const queryClient = useQueryClient()
    return (
        useQuery(["super-hero", hero], fetchHero,
            {
                initialData: () => {
                    const heroId = queryClient.getQueryData("super-heroes")?.data?.find(data => data.id === parseInt(hero))
                    if (hero) {
                        return ({
                            data: heroId
                        })
                    }
                    else {
                        return undefined
                    }
                }
            })
    );
};

export default useSuperHeroData;