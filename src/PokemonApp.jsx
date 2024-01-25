import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  useEffect(() => {
    dispatch(getPokemons(page));
  
  }, [page])
  const {isLoading,pokemons=[]} = useSelector( state => state.pokemons)

  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: {!isLoading ? 'True':'False'}</span>
        <ul>
          {/* {pokemons.map} */}

          {pokemons.map(({name})=>(
            <li key={name}>{name}</li>
          ))}
            {/* <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li> */}
        </ul>
        <button 
        disabled={isLoading}
        // onClick={()=>dispatch(getPokemons(page))}
        onClick={()=>setPage(page+1)}
        >
          Next
        </button>
    </>
  )
}
