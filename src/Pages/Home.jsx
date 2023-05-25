import React, { useState } from 'react'
import { ButtonDiv, ButtonLink, Head, HeadDiv, SectionBody } from '../styled-component/addproduct'
import Footer from '../Components/Footer'
import { CheckBox, MassDeleteButton, ProductBox, ProductDetails, ProductDetailsBox, ProductDiv } from '../styled-component/Home'


const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (id) => {
    console.log(id);
  };
  return (
    <SectionBody>
      <HeadDiv>
        <Head>Product List</Head>
        <ButtonDiv>
          <ButtonLink to='addproduct'>ADD</ButtonLink>
          <MassDeleteButton id='delete-product-btn'>MASS DELETE</MassDeleteButton>
        </ButtonDiv>
      </HeadDiv>
      <ProductDiv>
        <ProductBox>
          <CheckBox 
            onClick={handleCheckboxChange(15)} className='delete-checkbox' />
          <ProductDetailsBox>
            <ProductDetails>Very good father</ProductDetails>
            <ProductDetails>Very good father</ProductDetails>
            <ProductDetails>Very good father</ProductDetails>
            <ProductDetails>Very good father</ProductDetails>
          </ProductDetailsBox>
        </ProductBox>
        <ProductBox>
          <CheckBox 
            onClick={handleCheckboxChange(16)} className='delete-checkbox'/>
          <ProductDetailsBox>
            <ProductDetails>Very good father</ProductDetails>
            <ProductDetails>Very good father</ProductDetails>
            <ProductDetails>Very good father</ProductDetails>
            <ProductDetails>Very good father</ProductDetails>
          </ProductDetailsBox>
        </ProductBox>
      </ProductDiv>
      <Footer />
    </SectionBody>
  )
}

export default Home