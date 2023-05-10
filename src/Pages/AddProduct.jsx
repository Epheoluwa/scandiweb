import React, { useState } from 'react'
import { Button, ButtonDiv, ButtonLink, FormContainer, FormContainer2, FormInputContainer, Head, HeadDiv, ProductDescription, ProductError, ProductForm, ProductInput, ProductOptions, ProductSelect, ProductTypeDive, Productlabel, SectionBody } from '../styled-component/addproduct'
import Footer from '../Components/Footer'
import { Bookvalidator, DVDvalidator, Furniturevalidator, ProductTypevalidator } from '../Utils/Validation';
import { useEffect } from 'react';

const AddProduct = () => {
  const [productType, setProductType] = useState('');
  const [values, setValues] = useState({
    sku: '',
    name: '',
    price: '',
    productType: productType,
    size: '',
    height: '',
    width: '',
    length: '',
    weight: '',
  });

  const [error, setError] = useState({});

  let handleTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const HandleInputChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const validateForm = () => {
    let validationError = null;
    productType === 'DVD'
      ? validationError =  DVDvalidator(values)
      : productType === 'Furniture'
        ? validationError =  Furniturevalidator(values)
        : productType === 'Book'
          ? validationError =  Bookvalidator(values)
          : validationError =  ProductTypevalidator(values);

    return validationError;
  }

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    // productType === 'DVD'
    //   ? setError(DVDvalidator(values))
    //   : productType === 'Furniture'
    //     ? setError(Furniturevalidator(values))
    //     : productType === 'Book'
    //       ? setError(Bookvalidator(values))
    //       : setError(ProductTypevalidator(values));

    const validationError = validateForm();
    if (Object.keys(validationError).length > 0) {
      // Show error messages to the user
      setError(validationError);
    } else {
      // Validation passed, submit the form
      const data = new FormData(e.currentTarget);
      data.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
  
    }


  }
  useEffect(() => {
    setError({})
  }, [productType])
  return (
    <>
      <SectionBody>
        <ProductForm id='product_form' onSubmit={HandleFormSubmit}>
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
                <ProductTypeDive>
                  <ProductInput id='sku' name='sku' onChange={HandleInputChange} error={error.sku ? 'true' : ''} />
                  {error.sku && <ProductError>{error.sku}</ProductError>}
                </ProductTypeDive>
              </FormInputContainer>

              <FormInputContainer>
                <Productlabel>Name</Productlabel>
                <ProductTypeDive>
                  <ProductInput id='name' name='name' onChange={HandleInputChange} error={error.name ? 'true' : ''} />
                  {error.name && <ProductError>{error.name}</ProductError>}
                </ProductTypeDive>
              </FormInputContainer>

              <FormInputContainer>
                <Productlabel>Price($)</Productlabel>
                <ProductTypeDive>
                  <ProductInput id='price' name='price' onChange={HandleInputChange} error={error.price ? 'true' : ''} />
                  {error.price && <ProductError>{error.price}</ProductError>}
                </ProductTypeDive>
              </FormInputContainer>

              <FormInputContainer>
                <Productlabel>Product Type</Productlabel>
                <ProductTypeDive>
                  <ProductSelect id='productType' name='productType' onChange={handleTypeChange} >
                    <ProductOptions> </ProductOptions>
                    <ProductOptions id='DVD' value='DVD'>DVD</ProductOptions>
                    <ProductOptions id='Furniture' value='Furniture'>Furniture</ProductOptions>
                    <ProductOptions id='Book' value='Book'>Book</ProductOptions>
                  </ProductSelect>
                  {error.productType && <ProductError>{error.productType}</ProductError>}
                </ProductTypeDive>
              </FormInputContainer>

              {
                productType === 'DVD' &&
                <FormInputContainer>
                  <Productlabel>Size(MB)</Productlabel>
                  <ProductTypeDive>
                    <ProductInput id='size' name='size' onChange={HandleInputChange} error={error.size ? 'true' : ''} />
                    {error.size && <ProductError>{error.size}</ProductError>}
                    <ProductDescription>Please provide size in megabyte</ProductDescription>
                  </ProductTypeDive>
                </FormInputContainer>
              }

              {
                productType === 'Furniture' &&
                <>
                  <FormInputContainer>
                    <Productlabel>Height(CM)</Productlabel>
                    <ProductTypeDive>
                      <ProductInput id='height' name='height' onChange={HandleInputChange} error={error.height ? 'true' : ''} />
                      {error.height && <ProductError>{error.height}</ProductError>}
                    </ProductTypeDive>
                  </FormInputContainer>
                  <FormInputContainer>
                    <Productlabel>Width(CM)</Productlabel>
                    <ProductTypeDive>
                      <ProductInput id='width' name='width' onChange={HandleInputChange} error={error.width ? 'true' : ''} />
                      {error.width && <ProductError>{error.width}</ProductError>}
                    </ProductTypeDive>
                  </FormInputContainer>
                  <FormInputContainer>
                    <Productlabel>Length(CM)</Productlabel>
                    <ProductTypeDive>
                      <ProductInput id='length' name='length' onChange={HandleInputChange} error={error.length ? 'true' : ''} />
                      {error.length && <ProductError>{error.length}</ProductError>}
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
                    <ProductInput id='weight' name='weight' onChange={HandleInputChange} error={error.weight ? 'true' : ''} />
                    {error.weight && <ProductError>{error.weight}</ProductError>}
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