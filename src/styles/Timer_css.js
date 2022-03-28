import styled from 'styled-components';

export let Titulo = styled.h1`

margin-top: 150px;
padding: 0;
    color: white;
    text-align: center;
`
export let TimerC = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 50px;
`
export let Card = styled.div`
width: 8%;
height: 100%;
margin: 10px;
@media (max-width: 1100px) {
    width: 18%;

  }
`
export let TimerCard = styled.div`
border-bottom: 2px solid #191a23;
border-radius: 10px;
height: 8rem;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;
align-items: center;

background-color: #32374e;
text-decoration: line-through #32374e;
text-align: center;
width: 100%;
font-size: 500%;
color: hsl(345, 95%, 68%);
  @media (max-width: 1100px) {
      font-size: 200%;
      height: 4rem;
  }

`
export let TextCard = styled.p`
    color: #8586a8;
    text-align: center;
`
export let Foot = styled.footer`
background-image: url(https://i.ibb.co/kBzSp56/footer.png);
position: fixed;
width: 100%;
height: 100px;
bottom: 0;
display: flex;
flex-wrap: wrap;
align-content: center;
`
export let Redes = styled.ul`
font-size: 200%;
width: 50%;
margin: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
    color: #8586a8;
    list-style: none;
    &:hover {

      color: white;
    }

`