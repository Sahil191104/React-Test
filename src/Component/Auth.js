import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '@mui/material';
import { styled } from 'styled-components';

function Auth(props) {

    const Button = styled.button`
        border : none;
        background-color: #282c34;
        padding: 10px;
        color: white;
        border-radius: 5px;

        &:hover{
            background-color: #000;
        }
    `

    const Input = styled.input`
        display: block;
        width: 100%;
        padding: 0.400rem 0.80rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #dee2e6;
        appearance: none;
        border-radius: 0.375rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    `

    return (
        <div>
            <>
                <Container sx={{ width: "400px", backgroundColor: "#f0f0f0", margin: "250px 400px 200px 450px", border: "1px solid gray", borderRadius: "var(--bs-border-radius)", padding: "20px" }}>
                    <center><h1>Login</h1></center>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <Input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <Input type="password"  id="exampleInputPassword1" />
                        </div>
                        <center><Button type="submit">Submit</Button></center>
                    </form>
                </Container>
            </> 
        </div>
    );
}

export default Auth;