import { GraphQLClient } from "graphql-request";
const isClient = typeof window !== 'undefined'; //it will check if it server side rended page.If it is server side,it will be false

export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql", {
    headers: () => ({
        Authorization: isClient? `Bearer ${window.localStorage.getItem("__SamVaad_token")}`: "",
    }),//check if it is client,then only send the token else dont sent it
});