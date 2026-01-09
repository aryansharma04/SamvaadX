import { useQuery } from "@tanstack/react-query"
import { graphqlClient } from "../clients/api"
import {getCurrentUserQuery} from "../graphql/query/user"

export const useCurrentUser = () =>{
    const query = useQuery({
        queryKey: ['current-user'],  //cache the current user
        queryFn: () => graphqlClient.request(getCurrentUserQuery)
        
    });

    return { ...query, user: query.data?.getCurrentUser }
}
//going to return user if there is an user
