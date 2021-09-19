import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;

  button:hover {
    transform: scale(1.1);
    transition: all 0.5s; 
  }
`;

export const SubContainer = styled.div`
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
`;

export const BtnContainer = styled.div`
  display:flex;
  flex-direction: row;
  padding: 16px;
`;
