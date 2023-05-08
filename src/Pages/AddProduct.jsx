import React, { useState } from 'react'
import { Button, ButtonDiv, ButtonLink, FormContainer, FormContainer2, FormInputContainer, Head, HeadDiv, ProductDescription, ProductForm, ProductInput, ProductOptions, ProductSelect, ProductTypeDive, Productlabel, SectionBody } from '../styled-component/addproduct'
import Footer from '../Components/Footer'

const AddProduct = () => {

  const [productType, setProductType] = useState('');
  let handleTypeChange = (e) => {
    setProductType(e.target.value);
  };

  console.log(productType);
  return (
    <>
      <SectionBody>
        <ProductForm id='product_form'>
          <HeadDiv>
            <Head>Product Add</Head>
            <ButtonDiv>
              <Button>Save</Button>
              <Button> <ButtonLink to='/'>Cancel</ButtonLink> </Button>
            </ButtonDiv>
          </HeadDiv>

          <FormContainer>
            <FormContainer2>
              <FormInputContainer>
                <Productlabel>SKU</Productlabel>
                <ProductInput id='sku' name='sku' />
              </FormInputContainer>
              <FormInputContainer>
                <Productlabel>Name</Productlabel>
                <ProductInput id='name' name='name' />
              </FormInputContainer>
              <FormInputContainer>
                <Productlabel>Price($)</Productlabel>
                <ProductInput id='price' name='price' />
              </FormInputContainer>
              <FormInputContainer>
                <Productlabel>Product Type</Productlabel>
                <ProductSelect id='price' name='price' onChange={handleTypeChange}>
                  <ProductOptions> </ProductOptions>
                  <ProductOptions id='DVD' value='DVD'>DVD</ProductOptions>
                  <ProductOptions id='Furniture' value='Furniture'>Furniture</ProductOptions>
                  <ProductOptions id='Book' value='Book'>Book</ProductOptions>
                </ProductSelect>
              </FormInputContainer>
              {
                productType === 'DVD' &&
                <FormInputContainer>
                  <Productlabel>Size(MB)</Productlabel>
                  <ProductTypeDive>
                    <ProductInput id='size' name='size' />
                    <ProductDescription>Please provide size in megabyte</ProductDescription>
                  </ProductTypeDive>
                </FormInputContainer>
              }

              {
                productType === 'Furniture' &&
                <>
                  <FormInputContainer>
                    <Productlabel>Height(CM)</Productlabel>
                    <ProductInput id='height' name='height' />
                  </FormInputContainer>
                  <FormInputContainer>
                    <Productlabel>Width(CM)</Productlabel>
                    <ProductInput id='width' name='width' />
                  </FormInputContainer>
                  <FormInputContainer>
                    <Productlabel>Length(CM)</Productlabel>
                    <ProductTypeDive>
                      <ProductInput id='length' name='length' />
                      <ProductDescription>Please provide dimension in HxWxL format</ProductDescription>
                    </ProductTypeDive>
                  </FormInputContainer>
                </>
              }

              {
                productType === 'Book' &&
                <FormInputContainer>
                  <Productlabel>Weight(KG)</Productlabel>
                  <ProductTypeDive>
                    <ProductInput id='weight' name='weight' />
                    <ProductDescription>Please provide weight in kilogram</ProductDescription>
                  </ProductTypeDive>
                </FormInputContainer>
              }


            </FormContainer2>
          </FormContainer>
        </ProductForm>
        <Footer />
      </SectionBody>

    </>
  )
}

export default AddProduct