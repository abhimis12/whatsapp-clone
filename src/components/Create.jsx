import React from "react";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Form, Button, Container } from "reactstrap";
import "../css/Login.css";
import { auth } from "../firebase";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Create = ({setShowcreate}) => {
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate();
    const submitHandler = async (erro) => {
        erro.preventDefault();
        let user=await auth.createUserWithEmailAndPassword(email,password);
        if(user){
        
         setShowcreate(false)
          }
        
        console.log("user", user);
      
      };
 
  return (
    <>
<div className="heading">
    
      <Container>
        <div className="heading2">
          
        </div>
        <Container
          style={{
            width: "400px",
            textAlign: "left",
            backgroundColor: "whitesmoke",
            padding: "20px",
            borderRadius: "10px",
            margin: "auto",
            fontSize:"large"
          }}
        >
          <Form inline onClick={submitHandler}>
            <FormGroup 
            style={{
              marginLeft: 60,
             padding:6
             
            }}
            className="input1">
              
            </FormGroup>
            <FormGroup  
            className="input1">
              
            </FormGroup>
            <FormGroup 
            style={{
              marginLeft: 60,
             padding:6
             
            }}
            className="input1">
              <Label for="email" className="input7">
                Email
              </Label>
              <Input className="input8"  name="email" placeholder="Enter email id" type="email"
              onChange={(e)=>{
                setEmail(e.target.value)
              }
            }/>
            </FormGroup>
            <FormGroup  
            className="input1">
              <Label  
              className="input2" for="examplePassword">
                Password
              </Label>
              <Input  
              id="examplePassword" name="password" placeholder="Passowrd"
                type="password"
                onChange={(e)=>{
                    setPassword(e.target.value)
                  }
                }
              />
            </FormGroup>
            <FormGroup className="input6">
         
            </FormGroup>
            
              
              <Button
               
                style={{
                  marginLeft: 140,
                  marginTop:20,
                  paddingTop: 9,
                  paddingBottom: 1,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                Create
              </Button>
               
          </Form>
        </Container>
      </Container> 
      </div>
    </>
  );
};