import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    position: absolute;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer

`

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 200px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d4e5eb;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`

const Image = styled.img`
    height: 70%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #eca3a3 ;
        transform: scale(1.3);
    }
`

const ProductItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} alt={item.id}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem
