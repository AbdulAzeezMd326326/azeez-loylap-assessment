import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import {Card, Button} from "react-bootstrap"
import { useState } from "react";

function Billing({ plans = [], cards = [], company = null }) {
  const navigate = useNavigate()


  const index = cards.findIndex((element) => element.companyId === company.id);
  const index1 = plans.findIndex((element) => element.name === company.plan);
  // used findIndex method to return the particular index object that matches with company's --- 
  //--- details and to display the returned data in our Ui 

  const[plan, setPlan] = useState(plans[index1])
  const [card, setCard] = useState(cards[index]);
  // created state variables for plan and card using useState hook




  if (!company) {
    navigate('/')
  }

  return (
    <React.Fragment>
    <Link to="/">Go back to select</Link>
  
      <h3>Current Plan</h3>
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
          <Card.Text>Price : ${plan.value/100}</Card.Text>
          {/* Converted cents to dollars */}
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
{/* used card and button components from react-bootstrap to display the card and plan details on to the UI */}
      <h3>Payment Method</h3>
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
