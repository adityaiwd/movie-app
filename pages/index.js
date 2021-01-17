import Head from 'next/head'
import React,{useState,useEffect} from 'react';
import Container from '../layout/Container'
import Navbar from '../components/navigation/Navbar'
import Airing from '../components/UI/Airing'
import GenreList from '../components/UI/GenreList'
import moviedb from './api/moviedb'
import MovieList from '../components/UI/MovieList'

const Home = () => {
  const [listOfImage, setListOfImage] = useState([]);
  const [Loading, setLoading] = useState(true);
  const imageArray = JSON.stringify(listOfImage);
  useEffect(() => {
    const fetchImage = async () => {
      const res = await moviedb.get(`/discover/movie`, {
        params: { },
      });
      setListOfImage(res.data.results);
      setLoading(false);
    };
    fetchImage();
  }, [imageArray]);
  return (
    <Container>
      <Head>
        <title>Movie App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Airing />
      <GenreList />
      <MovieList listOfMovies={listOfImage} Loading={Loading} />
    </Container>
  )
}

export default Home