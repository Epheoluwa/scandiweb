import React, { useState, useEffect } from 'react'
import { ButtonDiv, ButtonLink, Head, HeadDiv, SectionBody } from '../styled-component/addproduct'
import Footer from '../Components/Footer'
import { CheckBox, MassDeleteButton, ProductBox, ProductDetails, ProductDetailsBox, ProductDiv } from '../styled-component/Home'
import axios from 'axios';

const Home = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    // const url = 'http://localhost/phpcrudapi/api/getproduct.php';
    const url = 'https://zipagro.a10staffing.com/api/getproduct.php';
    await axios
      .get(url)
      .then((res) => {
        console.log(res);
        let product = res.data;
        setProduct(product);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCheckboxChange = (itemId) => {
    setProduct((prevProduct) => {
      return prevProduct.map((item) => {
        if (item.id === itemId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
    });
  };

  const handleMassDelete = () => {
    const checkedIds = product
      .filter((item) => item.checked)
      .map((item) => item.id);

    const data = {
      'id': checkedIds
    }
    // const url = 'http://localhost/phpcrudapi/api/delete.php';
    const url = 'https://zipagro.a10staffing.com/api/delete.php';

    axios.post(url, data)
    .then((response) => {
      if (response.data.status === true) {
        fetchProduct();
      }
    })
    .catch((error) => {
      console.error('Error deleting items:', error);
    });

  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <SectionBody>
      <HeadDiv>
        <Head>Product List</Head>
        <ButtonDiv>
          <ButtonLink to='addproduct'>ADD</ButtonLink>
          <MassDeleteButton id='delete-product-btn' onClick={handleMassDelete}>MASS DELETE</MassDeleteButton>
        </ButtonDiv>
      </HeadDiv>
      <ProductDiv>
        {
          product && 

          product.map((item) => {
            return (
              // <ProductItemText key={item.id}>
              //   {item.name}
              // </ProductItemText>
              <ProductBox key={item.id}>
                <CheckBox
                  onChange={() => handleCheckboxChange(item.id)}
                  checked={item.checked || false}
                  className='delete-checkbox' />
                <ProductDetailsBox>
                  <ProductDetails>{item.sku}</ProductDetails>
                  <ProductDetails>{item.name}</ProductDetails>
                  <ProductDetails>{item.price}.00 $</ProductDetails>
                  {
                    item.product_type === 'dvd' &&
                    <ProductDetails>Size: {item.size} MB</ProductDetails>
                  }
                  {
                    item.product_type === 'book' &&
                    <ProductDetails>Weight: {item.weight} KG</ProductDetails>
                  }
                  {
                    item.product_type === 'furniture' &&
                    <ProductDetails>Dimension: {item.height}x{item.width}x{item.length}</ProductDetails>
                  }
                </ProductDetailsBox>
              </ProductBox>
            );
          })

        }
        {}
      </ProductDiv>
      <Footer />
    </SectionBody>
  )
}

export default Home