import styled from "styled-components";


export const Container = styled.div`
    background: #0A0A10;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    height: 100%;
   


`;

export const Image = styled.img`
    margin-top: 30px;
    width: 184px;


`;

export const ContainerItens = styled.div`
    padding: 0px 36px;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 100px;
    
 

`;

export const H1 = styled.h1`

    font-size: 28px;
    font-weight: 700;
    line-height: 32.81px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;

`;

export const InputLabel = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: #EEEEEE;
    margin-left: 22px;



`;

export const Input = styled.input`
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
    width: 342px;
    height: 58px;    
    border-radius: 14px;
    font-size: 18px;
    font-weight: 300;
    line-height: 21.09px;
    text-align: left;
    color: #FFFFFF;
    padding-left: 15px;
    border: none;
    outline: none;
    margin-bottom: 25px;
`;

export const Button = styled.button`
width: 342px;
height: 68px;
background: #D93856;
font-size: 17px;
font-weight: 900;
line-height: 2.5px;
text-align: center;
color: #FFFFFF;
border: none;

cursor: pointer;

&:hover{
    opacity: 0.8;

}

&:active{
    opacity: 0.5;
}

`;

