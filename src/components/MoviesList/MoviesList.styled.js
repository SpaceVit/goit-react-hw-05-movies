import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  width: 100%;
`;

export const FilmsList = styled.ul`
  padding: 15px 30px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
`;

export const Item = styled.li`
  margin-bottom: 32px;
  margin-right: 15px;
  border-radius: 5px;
`;

export const FilmPoster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  width: 280px;
  height: 402px;
  margin-bottom: 5px;
  box-shadow: rgb(0 0 0 / 70%) 5px 5px 13px 0px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: bold;
  max-width: 280px;
  color: #25468e;
`;
