import './App.css'
import Card from './Card'

function App() {
  const item1 = {
  numero: '#' + 1,
  tipo: 'Grama/Venenoso',
  nome: 'Bulbasaur',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
}
const item2 = {
  numero: '#' + 2,
  tipo: 'Grama/Venenoso',
  nome: 'Ivysaur',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
}
const item3 = {
  numero: '#' + 3,
  tipo: 'Grama/Venenoso',
  nome: 'Venusaur',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png'
}
const item4 = {
  numero: '#' + 4,
  tipo: 'Fogo',
  nome: 'Charmander',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
}
const item5 = {
  numero: '#' + 5,
  tipo: 'Fogo',
  nome: 'Charmeleon',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
}
const item6 = {
  numero: '#' + 6,
  tipo: 'Fogo/Voador',
  nome: 'Charizard',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
}
const item7 = {
  numero: '#' + 7,
  tipo: 'Água',
  nome: 'Squirtle',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
}
const item8 = {
  numero: '#' + 8,
  tipo: 'Água',
  nome: 'Wartortle',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png'
}
const item9 = {
  numero: '#' + 9,
  tipo: 'Água',
  nome: 'Blastoise',
  foto: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png'
}

  const personagens = [item1, item2, item3, item4, item5, item6, item7, item8, item9]

  return (
    <>
    <img className='Logo' src='src/pokemon-logo.jpg' />
    <div className='lista'>
     {
      personagens.map(function (umPersonagem){
        return <Card info={umPersonagem} />
      })
     }
    </div>
    </>
  )
}

export default App
