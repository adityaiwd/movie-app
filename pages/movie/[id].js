import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../layout/Container";
import moviedb from "../api/moviedb";
import styled from "styled-components";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import Scores from "../../components/UI/Scores";
import PlusButton from "../../components/UI/PlusButton";
import Genre from "../../components/UI/Genre";
import Casts from "../../components/UI/Casts";
import ScrollMenu from "react-horizontal-scrolling-menu";
import CircularProgress from "@material-ui/core/CircularProgress";

const Backdrop = styled.img`
  width: 100%;
  border-radius: 0 0 0 5rem;
  z-index: -2;
`;

const BackIcon = styled.div`
  border-radius: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  top: 2%;
  left: 3%;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  /* @media only screen and (max-width: 28.125em) {
    left: 10%;
  } */
`;

const Titles = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Genres = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  flex-wrap: wrap;
  & > * {
    margin-top: 1rem;
  }
`;

const Synopsis = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3rem;
  & p {
    margin-top: 1rem;
    text-align: justify;
  }
`;

const CastandCrew = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
`;

const Load = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  min-width:47rem;
  min-height:90rem;
`

const Movie = () => {
  const [MovieData, setMovieData] = useState({
    poster: "",
    title: "",
    tagline: "",
    rate: "",
    count: "",
    genres: [],
    synopsis: "",
    release_date: "",
    runtime: 0,
  });
  const [CastCrew, setCastCrew] = useState([]);
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      const res = await moviedb.get(`/movie/${id}`, {
        params: {},
      });
      const resCast = await moviedb.get(`/movie/${id}/credits`, {
        params: {},
      });
      setMovieData({
        poster: res.data.backdrop_path,
        title: res.data.title,
        tagline: res.data.tagline,
        rate: res.data.vote_average,
        count: res.data.vote_count,
        genres: res.data.genres,
        synopsis: res.data.overview,
        release_date: res.data.release_date,
        runtime: res.data.runtime,
      });
      setCastCrew(resCast.data.cast);
      setLoading(false);
    };
    fetchMovie();
  }, [id]);

  const Menu = (list) =>
    list.map((item) => {
      return (
        <Casts
          key={item.id}
          profpic={item.profile_path}
          name={item.name}
          role={item.character ? item.character : item.job}
        />
      );
    });

  return (
    <Container>
      <Head>
        <title>{MovieData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackIcon onClick={() => router.back()}>
        <ArrowBackIosRoundedIcon style={{ fontSize: "2.5rem" }} />
      </BackIcon>
      {Loading ? (
        <Load>
        <CircularProgress color="secondary" />
        <h3 style={{marginTop:"2rem"}}>Fetching Movie Data</h3>
        </Load>
      ) : (
        <>
          <Backdrop
            src={"http://image.tmdb.org/t/p/w500/" + MovieData.poster}
            alt={MovieData.title}
          />
          <Scores rate={MovieData.rate} count={MovieData.count} />
          <Titles>
            <div>
              <h1>{MovieData.title}</h1>
              <div style={{ display: "flex", fontSize: "1.2rem" }}>
                <h3 style={{ fontWeight: 300, marginRight: "3rem" }}>
                  {MovieData.release_date.substring(0, 4)}
                </h3>
                <h3 style={{ fontWeight: 300 }}>
                  {Math.floor(MovieData.runtime / 60)}h {MovieData.runtime % 60}
                  min
                </h3>
              </div>
            </div>
            <PlusButton />
          </Titles>
          <Genres>
            {MovieData.genres.map((genre) => (
              <Genre
                key={genre.name}
                style={{ marginLeft: 0, marginRight: "1.5rem" }}
              >
                {genre.name}
              </Genre>
            ))}
          </Genres>
          <Synopsis>
            <h1>Plot Summary</h1>
            <p>{MovieData.synopsis}</p>
          </Synopsis>
          <CastandCrew>
            <h1>Cast & Crew</h1>
          </CastandCrew>
          <ScrollMenu
            itemClass="hor-scroll"
            menuStyle={{ marginBottom: "3rem", marginTop: "1rem" }}
            data={Menu(CastCrew)}
            scrollToSelected
          />
        </>
      )}
    </Container>
  );
};

export default Movie;
