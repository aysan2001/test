import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct'

const Product = () => {

    const [apidata,setApidata]=useState([])
    useEffect(()=>{
        const fetchapi = async()=>{
            const comingData = await axios.get('https://fakestoreapi.com/products')
            setApidata(comingData.data)
        }
        fetchapi();
    },[])
  return (
    <Container>
        <Row gap={5}>
            {apidata.map(item=>{
    return  <SingleProduct title={item.title} desc={item.description} photo={item.image} key={item.id} />
            })}
    
        </Row>
    </Container>
  )
}

export default Product