import styled from 'styled-components';

export const Ul = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  column-gap: 5px;
  list-style: none;

  width: 1250px;
  margin: 0 auto;
  object-fit: contain; */

  /* width: 1250px; */
  display: grid;
  max-width: calc(100vw - 200px);
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  grid-gap: 10px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
