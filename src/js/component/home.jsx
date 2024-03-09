import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import { loremIpsumText,loremIpsumShort } from "./textcontent";
import Card from "./card";
import Footer from "./footer";


//create your first component
const Home = () => {
	const renderCard = () => {
		const cardTitles = ["Card 1", "Card 2", "Card 3", "Card 4"]
		const cardText = loremIpsumShort;
		const buttonText = "Find out more!"
		const imageLink = "https://via.placeholder.com/200x200/808080/FFFFFF?text=Image+Placeholder"


		return cardTitles.map((title, index) => (
			<Card key={index} title={title} text={cardText} btnText={buttonText} imgLink={imageLink}/>
		));	
	};

	return (
		<div>
		<Navbar title="Start Bootstrap" />
		<div className="container-fluid">
		  <Jumbotron title="A Warm Welcome!" description={loremIpsumText} btntext="Call to action!" />
		  <div className="d-flex flex-row flex-wrap justify-content-around">
			{renderCard()}
		  </div>
		</div>
		<Footer year="2024"/>
	  </div>
	);
};

export default Home;
