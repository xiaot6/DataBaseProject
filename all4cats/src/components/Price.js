import React, { Component } from "react";
import logo from '../assets/logo_transparent.png';
import {Typography, Button, TextField, List, ListItem, ListItemText} from '@material-ui/core'
import PriceDataService from "../services/price.service";

import ReactDOM from "react-dom";
import USA from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import "./Price.css";

import { getLocationId, getLocationName } from './utils';

import { Link } from "react-router-dom";

export default class Price extends Component {
    constructor(props) {
        super(props);
        this.onChangeSaveTitle = this.onChangeSaveTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationClick = this.handleLocationClick.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
		this.handleLocationBlur = this.handleLocationBlur.bind(this);

        // this.state = {
		// 	pointedLocation: null,
		// 	tooltipStyle: {
		// 		display: 'none'
		// 	}
		// };

		
        this.state = {
          titleForSearch: "",
          tutorials: [],
          currentTutorial: null,
            currentIndex: -1,
            pointedLocation: null,
			focusedLocation: null,
			clickedLocation: null
        };

        this.links = {
			AL: 'https://en.wikipedia.org/wiki/Auvergne-Rh%C3%B4ne-Alpes',
			AK: 'https://en.wikipedia.org/wiki/Bourgogne-Franche-Comt%C3%A9',
			AS: 'https://en.wikipedia.org/wiki/Brittany_(administrative_region)',
			AZ: 'https://en.wikipedia.org/wiki/Centre-Val_de_Loire',
			AR: 'https://en.wikipedia.org/wiki/Corsica',
			CA: 'https://en.wikipedia.org/wiki/Grand_Est',
			CO: 'https://en.wikipedia.org/wiki/Hauts-de-France',
			CT: 'https://en.wikipedia.org/wiki/%C3%8Ele-de-France',

		};
    }

    componentDidMount() {
    this.retrieveTutorials();
    }

    onChangeSaveTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            titleForSearch: searchTitle
        });
    }

    retrieveTutorials() {
        PriceDataService.getAll()
        .then(response => {
        this.setState({
            tutorials: response.data
        });
        console.log(response.data);
        })
        .catch(e => {
        console.log(e);
        });
    }

    refreshList() {
        this.retrieveTutorials();
        this.setState({
            currentTutorial: null,
            currentIndex: -1
        });
    }

    setActiveTutorial(tutorial, index) {
        console.log("set active");
        this.setState({
            currentTutorial: tutorial,
            currentIndex: index
        });
    }

    removeAllTutorials() {
    PriceDataService.deleteAll()
        .then(response => {
        console.log(response.data);
        this.refreshList();
        })
        .catch(e => {
        console.log(e);
        });
    }

    searchTitle() {
        console.log("clicked");
        PriceDataService.findByTitle(this.state.titleForSearch)
            .then(response => {
            this.setState({
                tutorials: response.data
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }

    
    
    // for map:
	handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation: pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null });
	}

	handleLocationClick(event) {
		const clickedLocation = getLocationName(event);
		const clickedLocationId = getLocationId(event);
		this.setState({ clickedLocation: clickedLocation });
		window.open(this.links[clickedLocationId], '_blank');
	}

	handleLocationFocus(event) {
		const focusedLocation = getLocationName(event);
		this.setState({ focusedLocation: focusedLocation });
	}

	handleLocationBlur() {
		this.setState({ focusedLocation: null });
	}


    render() {
        const { titleForSearch, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <header>
                    <img src={logo} alt='Logo' height='300'></img>

                </header>
                <h4 >
                    Searching A House
                </h4>
                <form noValidate autoComplete="off">
                    {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
                    <TextField id="standard-basic" label="Title" value={this.state.titleForSearch} onChange={this.onChangeSaveTitle}/>
                </form>
                <Button onClick={this.searchTitle}>
                    Search
                </Button>
                <div style={{display:"flex", justifyContent: "center"}}>
                    <div style={{width: 360}}>
                        <List component="nav">
                            {this.state.tutorials &&
                            this.state.tutorials.map((tutorial, index) => (
                                <ListItem button
                                    onClick={() => this.setActiveTutorial(tutorial, index)}
                                    key={index}
                                >
                                    <ListItemText>{tutorial.title} {tutorial.description}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", height:"50rem" }}>
                    <SVGMap map={USA}
                        type="link"
						onLocationMouseOver={this.handleLocationMouseOver}
						onLocationMouseOut={this.handleLocationMouseOut}
						onLocationClick={this.handleLocationClick}
						onLocationFocus={this.handleLocationFocus}
						onLocationBlur={this.handleLocationBlur} />
                    <div className="tooltip" style={this.state.tooltipStyle}>
						{this.state.pointedLocation}
					</div>
                </div>
                <Typography class = "welcome">
                    CS 411 Final Project - All4Cats.
                </Typography>
                <a
                    className="App-link"
                    href="https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Our Homepage
                </a>
                <footer>
                    <div style={{display:"flex", justifyContent: "center", marginTop: "20vmin"}}>
                        <p style={{fontSize: "10px"}}>All Rights Reserved @All4CatsTeam</p>
                    </div>
                </footer>
            </div>
        )

    }

    
    
}
 

