import React from 'react'
import styled from "styled-components"

function Card() {
  return (
    <CardContainer>
        <CardHead>MY CARD</CardHead>
        <CardText>This is a Card designed using internal styled components</CardText>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
height: 100vh;
width: 100%;
background-color: pink;
`

const CardHead = styled.div`
height: 30%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 40px;
color: green;
`

const CardText = styled.div`
height: 70%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`