import PropTypes from 'prop-types';

import {
  FilmPoster,
  CardWrap,
  InfoWrap,
  Title,
  ReleaseDate,
  Overview,
  UserScore,
  OverviewText,
  Genres,
  GenresList,
} from './InfoCard.styled';
import defaultImg from '../../defaultImg/defaultImg.jpg';

export default function InfoCard({ movieInfo }) {
  const {
    title,
    release_date,
    overview,
    vote_average,
    poster_path,
    backdrop_path,
    genres,
  } = movieInfo;

  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  const posterImg =
    poster_path || backdrop_path
      ? IMG_PATH + (poster_path ?? backdrop_path)
      : defaultImg;

  return (
    <CardWrap>
      <FilmPoster src={posterImg} alt={title} />
      <InfoWrap>
        <Title>{title}</Title>
        <ReleaseDate>
          Release date: {release_date && release_date.slice(0, 4)}
        </ReleaseDate>
        <UserScore>User Score: {Math.round(vote_average * 10)}%</UserScore>
        <Overview>Overview:</Overview>
        <OverviewText>{overview}</OverviewText>
        <Genres>Genres</Genres>
        <p>
          {genres &&
            genres.map(({ id, name }) => (
              <GenresList key={id}>{name},</GenresList>
            ))}
        </p>
      </InfoWrap>
    </CardWrap>
  );
}

InfoCard.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
