import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import './Home.css';

export class Home extends Component {
    render() {
        return (
            <div>
                {
                    <Button color="secondary"  >  <Link to="/signup"> SIGN UP</Link></Button>
                }
                {
                    <Button color="secondary"  >  <Link to="/login"> LOGIN</Link></Button>
                }
                {
                    <Button color="secondary"  >  <Link to="/resume"> CREATE RESUME</Link></Button>
                }

            </div>
        )
    }
}

export default Home
