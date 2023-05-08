import styled from "styled-components";
import { Button } from "./addproduct";

export const ProductDiv = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    margin-bottom: 5rem;
`;
export const ProductBox =  styled.div`
    width: calc(25% - 30px);
    border: 2px solid black;
    overflow: hidden;
    padding: 1rem 0rem;
    margin: 15px;
    box-sizing: border-box;
    height: 100%;
`;
export const MassDeleteButton = styled(Button)`
width: 150px;  
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
border: 1px solid black; 
margin-left: 15px;
`;

export const ProductDetailsBox = styled.div`
text-align: center;
`;

export const ProductDetails = styled.p`
font-size: 15px
font-weight: 700;
`;