import React, { Component } from "react";
import "./Portfolio.css";

class Portfolio extends Component {

// When the component mounts, change the background image
componentDidMount() {
    document.body.style.backgroundImage = "url('/images/6.png')";
    document.body.className = "backgroundImage";
}

render() {
    return (
        <div className="container" id="portfolioContainer">
            <div className="card-deck">
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://ektravel.github.io/italian-food/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Word-Guess-Game</div> 
                        </a>
                        <div className="portfolioSlideText">Dynamically updated HTML and CSS powered by JavaScript and jQuery.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://ektravel.github.io/unit-4-game/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">The Magic Sushi Collector Game</div>
                        </a>
                        <div className="portfolioSlideText"> Dynamically updated HTML pages powered by the jQuery library. Enable audio for soundtrack.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://ektravel.github.io/TriviaGame/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Trivia Game</div>
                        </a>
                        <div className="portfolioSlideText">JavaScript used for the logic and jQuery used to manipulate HTML.</div>
                    </div>
                </div>
            </div>

            <div className="card-deck">
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://ektravel.github.io/GifTastic/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">GifTastic</div>
                        </a>
                        <div className="portfolioSlideText">GIPHY API used to make a dynamic page. JavaScript and jQuery used to change HTML. Click on a picture for animation.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://ektravel.github.io/trainScheduler/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Florence Train Schedule</div>
                        </a>
                        <div className="portfolioSlideText"> Firebase used to host data. Information is retrieved and manipulated with Moment.js.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://ektravel.github.io/TeamProject1" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Team Project 1: Eat Drink Cook</div>
                        </a>
                        <div className="portfolioSlideText">Used three APIs and AJAX to pull data.</div>
                    </div>
                </div>
            </div>

            <div className="card-deck">
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://blooming-sierra-90590.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Friend Finder</div>
                        </a>
                        <div className="portfolioSlideText">Full-stack app. Express used to handle routing.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://morning-cliffs-50595.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Feed Me Tacos</div>
                        </a>
                        <div className="portfolioSlideText">A logger created using MySQL, Node, Express, Handlebars and ORM.  MVC design pattern.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href=" https://lit-brook-93746.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Sequelized Tacos</div>
                        </a>
                        <div className="portfolioSlideText">Replaced MySQL Taco model with a Sequelized equivalent.</div>
                    </div>
                </div>
            </div>

            <div className="card-deck" id="lastDeck">
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://cryptic-retreat-79047.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Mongo Scraper</div>
                        </a>
                        <div className="portfolioSlideText">Mongoose and Cheerio used to scrape news from The Onion.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://stormy-earth-97502.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Ducktales</div>
                        </a>
                        <div className="portfolioSlideText">Memory game created with React.</div>
                    </div>
                </div>
                <div className="card portfolio">
                    <div className="card-body">
                        <a href="https://peaceful-caverns-49642.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <div className="portfolioCardText">Friend Bubble (in development)</div>
                        </a>
                        <div className="portfolioSlideText">MERN stack app.</div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
}

export default Portfolio;


