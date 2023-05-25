import React, { useState } from 'react'
import { Button, ButtonDiv, ButtonLink, FormContainer, FormContainer2, FormInputContainer, Head, HeadDiv, ProductDescription, ProductError, ProductForm, ProductInput, ProductOptions, ProductSelect, ProductTypeDive, Productlabel, SectionBody } from '../styled-component/addproduct'
import Footer from '../Components/Footer'
import { Bookvalidator, DVDvalidator, Furniturevalidator, ProductTypevalidator } from '../Utils/Validation';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();

  let handleTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const HandleInputChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const validateForm = () => {
    let validationError = null;
    productType === 'dvd'
      ? validationError = DVDvalidator(values)
      : productType === 'furniture'
        ? validationError = Furniturevalidator(values)
        : productType === 'book'
          ? validationError = Bookvalidator(values)
          : validationError = ProductTypevalidator(values);

    return validationError;
  }

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (Object.keys(validationError).length > 0) {
      // Show error messages to the user
      setError(validationError);
    } else {
      // Validation passed, submit the form
      const data = new FormData(e.currentTarget);
      // const url = "http://localhost/phpcrudapi/api/create.php";
      const url = "https://zipagro.a10staffing.com/api/create.php";
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
     
          if (res.data.status === true) {
            navigate('/');
          }else{
            setError({
              sku: "SKU must be unique",
            })
          }
          
        })
        .catch((err) => {
          console.log(err.message);
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
              <Button type='submit'>Save</Button>
              <ButtonLink to='/'>Cancel</ButtonLink>
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
                    <ProductOptions id='dvd' value='dvd'>DVD</ProductOptions>
                    <ProductOptions id='book' value='book'>Book</ProductOptions>
                    <ProductOptions id='furniture' value='furniture'>Furniture</ProductOptions>
                  </ProductSelect>
                  {error.productType && <ProductError>{error.productType}</ProductError>}
                </ProductTypeDive>
              </FormInputContainer>

              {
                productType === 'dvd' &&
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
                productType === 'furniture' &&
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
                productType === 'book' &&
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