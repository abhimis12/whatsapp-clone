import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormGroup, Label, Input, Form, Button, Container } from "reactstrap";
// import "../css/login.css";
import { auth } from "../../src/firebase";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import  {Create} from "../components/Create";
import "../css/Login.css";
export const Login = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword] = useState("");
  const [showcreate,setShowcreate]=useState(false);

  const navigate=useNavigate();
  const submitHandler = async (erro) => {
    erro.preventDefault();
    let user =await auth.signInWithEmailAndPassword(email,password);
    if(user){
      localStorage.setItem("abhi",JSON.stringify(user))
      window.location.reload()
    }
    
    console.log("user" ,user);
    
  };
   

  return (
    showcreate ? <Create  setShowcreate={setShowcreate}/> : 
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
              <Label for="email" className="input7">
                Email
              </Label>
              <Input className="input8"  name="email" placeholder="abhi123@gmail.cool" type="email" onChange={(e)=>{
                setEmail(e.target.value)
              }}/>
            </FormGroup>
            <FormGroup  
            className="input1">
              <Label  
              className="input2" for="examplePassword">
                Password
              </Label>
              <Input  className="input12"
               name="password" placeholder="Passowrd"
                type="password"
                onChange={(e)=>{
                  setPassword(e.target.value)
                }
              }
              />
            </FormGroup>
            
            <div className="mt-2">
              
              <Button
               
                style={{
                  marginLeft: 180,
                  marginTop:20,
                  paddingTop: 9,
                  paddingBottom: 1,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                LOG IN
              </Button>
             
            </div>
          </Form>
          
          <div className="aa">
          
          <Typography onClick={()=>{
            setShowcreate(true)
          }}
          textAlign="center">Create</Typography>
          {/* <Link  to="/create"><Typography textAlign="center">Create</Typography></Link> */}
          </div>
         
        </Container>
      </Container> 
      </div>
    </>
  );
};