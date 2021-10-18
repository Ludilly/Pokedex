import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: red;
  height: 100vh;
  justify-content: center;

  img{
    width: 150px;
  }

  button {
    margin-left: 16px;
    margin-right: 16px;
  }

  button:hover {
    transform: scale(1.1);
    transition: all 0.5s; 
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftContainer = styled.div`
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin-top: 16px;
  margin-right: 50px;
`;

export const RightContainer = styled.div`
  border: solid black 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  background-color: white;
  margin-top: 16px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  article {
    display: flex;
    flex-direction: row;
    
    p {
      margin-right: 5px;
    }
  }
`;

export const BtnContainer = styled.div`
  display:flex;
  flex-direction: row;
  margin: 16px 0px 16px 0px;
`;

export const SearchContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: solid 1px black;
  border-radius: 20px;
  height: 30px;
  margin-bottom: 20px;

  input {
    border: none;
    margin-left: 5px;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    border: none;
    background-color: #fff;
  }
`;
