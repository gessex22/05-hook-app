import React from 'react'
import { useFetch } from '../hooks/useFetch'




export const MultipleCustomHook = () => {


   const { data, hasError, isLoading } = useFetch("https://pokeapi.co/api/v2/pokemon/5")



  return (
  <>
    <div>Pokemon Info</div>
    <hr/>

{isLoading && <p> Cargando...</p>}
<pre> {data?.name}</pre>
  </>)
}
