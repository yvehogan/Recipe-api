import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import '../styles/Home.css';


const Home = () => {

	return (
		
		<div className="home-page">
			<div className="blue-box">
				<div className="box-width">
				<h3 className="bluebox-text">Welcome </h3>
				<p className="bluebox-paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias earum impedit odit repellat non ducimus fugit ullam veniam, necessitatibus dolor.</p>
				
				<Link to={`/register`}> 
				<button className="bluebox-button">Register
				</button>
				</Link>
				</div>
			
			</div>
			<div className="white-box">
			<Login />
			</div>
		</div>
	);
};

export default Home;
