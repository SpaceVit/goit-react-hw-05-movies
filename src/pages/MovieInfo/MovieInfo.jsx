import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/api';
import InfoCard from '../../components/InfoCard/InfoCard';

import {
  AddWrap,
  Title,
  Link,
  LinksWrap,
  CastLink,
  BackLink,
} from './MovieInfo.styled';

export default function MovieInfo() {
  const params = useParams();
  const id = params.movieId;

  const [movieInfo, setMovieInfo] = useState({});

  const location = useLocation();

  useEffect(() => {
    if (!id) {
      return;
    }

    async function fetchMovieInfo() {
      try {
        const results = await getMovieDetails(id);
        setMovieInfo(results);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchMovieInfo();
  }, [id]);

  return (
    <div>
      <BackLink to={location.state?.from ?? '/'}> Back </BackLink>
      <InfoCard movieInfo={movieInfo} />
      <AddWrap>
        <Title>Additional Information</Title>
        <LinksWrap>
          <CastLink>
            <Link to="cast" state={location.state}>
              Cast
            </Link>
          </CastLink>
          <li>
            <Link to="reviews" state={location.state}>
              Reviews
            </Link>
          </li>
        </LinksWrap>
      </AddWrap>
      <Outlet context={id} />
    </div>
  );
}
