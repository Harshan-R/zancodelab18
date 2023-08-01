import { Add, Remove } from "@material-ui/icons";
 import React from "react";
import styled  from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: 0.5s all ease;
  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "transparent" : "black"};
    color: ${(props) => (props.type === "filled" ? "black" : "white")};
    border: ${(props) => props.type === "filled" && "solid black"};
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductType = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: gray;
  border: none;
  height: 1px;
  margin: 25px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Cart = () => {
  return (
    <>
      <Container>
        <a id="Cart" ></a>
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
            <TopButton onClick={() => window.location.href="/"}>Continue Shopping</TopButton>
            <TopTexts>
              <TopText>Cart (2)</TopText>
              <TopText>Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">Checkout Now!</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                  <Image src="https://m.media-amazon.com/images/I/61RUueZ1G8L._UX695_.jpg"></Image>
                  <Details>
                    <ProductName>
                      <b>Product : </b>Nike Mercurial
                    </ProductName>
                    <ProductId>
                      <b>Id : </b> 78901621
                    </ProductId>
                    <ProductType>
                      <b>Type: </b> Football Studs
                    </ProductType>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$699</ProductPrice>
                </PriceDetails>
              </Product>
              <Hr />
              <Product>
                <ProductDetails>
                  <Image src="https://m.media-amazon.com/images/I/51btnCwmjqL._SX695._SX._UX._SY._UY_.jpg"></Image>
                  <Details>
                    <ProductName>
                      <b>Product : </b> Adidas Nemeziz
                    </ProductName>
                    <ProductId>
                      <b>Id : </b> 78901623
                    </ProductId>
                    <ProductType>
                      <b>Type: </b> Football Studs
                    </ProductType>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>2</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$699</ProductPrice>
                </PriceDetails>
              </Product>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>$ 1398</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ 1398</SummaryItemPrice>
              </SummaryItem>
              <SummaryButton>Checkout now!</SummaryButton>
            </Summary>
          </Bottom>
        </Wrapper>
      </Container>
    </>
  );
};

export default Cart;