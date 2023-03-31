import { useState } from "react"
import axios from 'axios'

function Pokemon(){
    //const [pesquisa, setPesquisa] = useState("pikachu")
    const [pokemon, setPokemon] = useState("vazio")
    const [varios, setVarios] = useState("nenhum")

    const getPokemon= async()=>{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/bagon")
        setPokemon(response.data)
        console.log(pokemon)
        //console.log(pokemon.stats.map((item)=>console.log(item)))
    }

    const getVarios = async()=>{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
        setVarios(response.data.results)
        console.log(varios)
    }
    return(

        <div>

            {/* <p> <input type="text" onChange={(e)=> setPesquisa(e.target.value)} /></p>
            <button onClick={getPokemon(pesquisa)}>Pesquisar</button>
            {pokemon === 'vazio'?
            <h2>Carregando!</h2>:<p> {pokemon.name}</p>
            } */}

            <button onClick={getPokemon}>PESQUISAR</button>
            {pokemon === 'vazio'?
            <h2>Nada pesquisado ainda</h2>:
            <div>
                <h2> Resultado da pesquisa: </h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>Nome: {pokemon.name}</p>
                <p>Tipo: {pokemon.types[0].type.name}</p>
                <p>Altura: {pokemon.height}</p>
                <p>Peso: {pokemon.weight}</p>
                {
                    pokemon.stats.map((item, index)=>(
                    <p key={index}>{item.stat.name}: <progress value={item.base_stat} max ="200">70%</progress>{item.base_stat}</p>
                    ))
                }

            </div>

            }
            <br /><br /><br />
            <button onClick={getVarios}>PESQUISAR VARIOS</button>
            {
            varios !=='nenhum' &&(

                <select >
                    {varios.map((item, index)=> (
                        <option key={index}> {item.name} </option>
                    )
                    ) }
                </select>
            
            )}

        </div>

    )


}

export default Pokemon