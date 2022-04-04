import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {Card, Button} from "react-bootstrap"
import { useState } from "react";
// import { width } from "@mui/system";

function Billing({ plans = [], cards = [], company = null }) {
  const navigate = useNavigate()


  const index = cards.findIndex((element) => element.companyId === company.id);
  const index1 = plans.findIndex((element) => element.name === company.plan);

  const[plan, setPlan] = useState(plans[index1])
  const [card, setCard] = useState(cards[index]);




  if (!company) {
    navigate('/')
  }

  return (
    <React.Fragment>
    <Link to="/">Go back to select</Link>
  
      <h3>Current Plan</h3>
      {/*TODO: delete this and replace with your UI component*/}
      <Box  sx={{
        width: 400,
        height: 150,
        border:1,
        borderRadius:5,
        padding:1,
        backgroundColor:"whitesmoke",
      }} >
      <Card >
        <Card.Body>
          <Card.Title> Plan type : {plan.name}`</Card.Title>
          <Card.Text> Description  :  {plan.description}</Card.Text>
          <Card.Text>Price : ${plan.value.toString().substring(0,2)}</Card.Text>
          <Button style={{marginLeft:200,
           color:"white", 
          backgroundColor:"green",
          borderRadius:5,
          height:30,
          width:120
          }}>Change Plan</Button>
        </Card.Body>
      </Card>
      </Box>

      <h3>Payment Method</h3>
      {/*TODO: delete this and replace with your UI component*/}
      <Box sx={{
        width: 400,
        height: 200,
        border:1,
        borderRadius:5,
        padding:1,
        backgroundColor:"whitesmoke",
      }} >
      <Card>
        <Card.Body>
          {card.type === "mastercard" ? (
            <img
              src={
                process.env.PUBLIC_URL + "/assets/cardtypes/mastercard.svg"
              }
              width={50}
              height={50}
              alt="mastercard"
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/assets/cardtypes/visa.svg"}
              width={50}
              height={50}
              alt="visa"
            />
          )}

          <Card.Title >Card Type : {card.type}</Card.Title>
          <Card.Text>Card Expiry : {card.expiry}</Card.Text>
          <Card.Text>Card Number : **** **** **** {card.lastFour}</Card.Text>
          <Button style={{marginLeft:200,
           color:"white", 
          backgroundColor:"green",
          borderRadius:5,
          height:30,
          width:80
          }}>Change</Button>
        </Card.Body>
      </Card>
    </Box>
  </React.Fragment>
  )
}

export default Billing
