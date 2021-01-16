import Head from 'next/head'
import Container from '../layout/Container'
import Navbar from '../components/navigation/Navbar'
import Airing from '../components/UI/Airing'
import GenreList from '../components/UI/GenreList'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Airing />
      <GenreList />
    </Container>
  )
}
