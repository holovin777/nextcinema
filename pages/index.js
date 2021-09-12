import Head from 'next/head'
import Link from 'next/link'

export default function Cinema({movies}) {
  return (
    <div>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Cinema" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center">
          Cinema
        </h1>
       <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.name}
              <p><video controls><source src={movie.movie_url} type="video/mp4"></source></video></p>
            </li>
          ))}
        </ul>
      </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const api_url = process.env.API_URL
  const res = await fetch(api_url)
  const movies = await res.json()
  return {
    props: { movies }
  }
}
