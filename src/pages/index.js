import styles from '@/styles/Home.module.css'

import Card from '../Components/Card'

export async function getStaticProps() {
  const maxPokemons = 260
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  // add pokemon index
  data.results.forEach((item, index) => {
    item.id = index + 1
})

return {
  props: {
    pokemons: data.results,
  },
}
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Dex</span></h1>
       </div>
      <div className={styles.pokemon}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        )
        )}
  </div>
  </>
  )
}
