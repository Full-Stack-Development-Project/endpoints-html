import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div>
            <div>
            {
                <Button>  <Link to="/signup"> SIGN UP</Link></Button>
            }
            {
                <Button>  <Link to="/login"> LOGIN</Link></Button>
            }
            {
                <Button>  <Link to="/resume"> CREATE RESUME</Link></Button>
            }
            </div>
            <div>
            <p>
            <br/>
            <br/>
            <br/>
            <h1>Hello, we welcome you to RESUME BUILDER TOOL AND JOB SEARCH!</h1>
            <br/>
            You can use this website to create yourself a RESUME by entering your details. 
            You can also search for jobs you can apply to using the JOB SEARCH feature.
            <h1>Enjoy your stay!</h1>
            <br/>
            </p>

            </div>
            </div>
        )
    }
}

export default Home
