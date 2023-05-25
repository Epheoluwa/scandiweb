import { Link } from "react-router-dom";
import styled from "styled-components";


export const SectionBody = styled.section`
    padding: 0.5rem 4rem;
`;

export const ProductForm = styled.form`
width: 100%;
`;

export const HeadDiv = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
height: 5.3rem;
`;

export const Head = styled.h3`
font-weight: 600;
font-size: 2rem;
`;

export const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
padding: 2rem;
height: 1rem;
`;

export const Button = styled.button`
border: 1px solid black;
width: 100px;  
height: 40px;
font-size: 1rem;
cursor: pointer;
`;
export const ButtonLink = styled(Link)`
display: inline-block;
border: 1px solid black;
width: 100px;
height: 40px;
font-size: 1rem;
text-align: center;
text-decoration: none;
line-height: 40px;
cursor: pointer;
color: black;

&:hover {
  background-color: lightgray;
}
`;

export const FormContainer = styled.div`
display: flex;
justify-content: start;
align-items: start;
margin-bottom: 5rem;
`;
export const FormContainer2 = styled.div`
width: 100%;
`;
export const FormInputContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 2rem;
width: 30%;
margin: 2rem 1rem;
`;

export const ProductInput = styled.input`
border: 1px solid black;
width: 100%;
height: 40px;
border-color: ${({ error }) => (error === "true" ? "red" : "black")};
`;
export const Productlabel = styled.label`
display: block;
margin-bottom: 5px;
font-weight: bold;
width: 40%;
`;
export const ProductDescription = styled.p`
font-size: 15px;
`;
export const ProductTypeDive = styled.div`
width: 100%;
`;

export const ProductSelect = styled.select`
border: 1px solid black;
width: 100%;
height: 40px;
font-size: 1rem;
`;

export const ProductOptions = styled.option`
border: 1px solid black;
width: 100%;
height: 40px;
`;

export const ProductError = styled.p`
font-size: 15px;
color: red;
margin-bottom: 1px;
text-align: center;
`;