import axios from 'axios'
import { Pokemon } from '../interfaces';




export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {

    // console.log('Hola mundo');
    // if (true) throw new Error('help..')
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    // const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //     .then(response => response.json())
    // console.log(resp.data.name);
    // console.log(data);




    return data;


}