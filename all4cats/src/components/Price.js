import React, { Component } from "react";
import logo from '../assets/logo_transparent.png';
import {Typography, Button, TextField, List, ListItem, ListItemText} from '@material-ui/core'
import PriceDataService from "../services/price.service";

import ReactDOM from "react-dom";
import USA from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import "./Price.css";

import { getLocationName } from './utils';

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
		this.handleLocationMouseMove = this.handleLocationMouseMove.bind(this);

        this.state = {
			pointedLocation: null,
			tooltipStyle: {
				display: 'none'
			}
		};

		
        this.state = {
          titleForSearch: "",
          tutorials: [],
          currentTutorial: null,
          currentIndex: -1,
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

    showName() {
        console.log("USA");
    }

    handleLocationMouseOver(event) {
		const pointedLocation = getLocationName(event);
		this.setState({ pointedLocation });
	}

	handleLocationMouseOut() {
		this.setState({ pointedLocation: null, tooltipStyle: { display: 'none' } });
	}

	handleLocationMouseMove(event) {
		const tooltipStyle = {
			display: 'block',
			top: event.clientY + 10,
			left: event.clientX - 100
		};
		this.setState({ tooltipStyle });
	}

	getLocationClassName(location, index) {
		// Generate random heat map
		return `svg-map__location svg-map__location--heat${index % 4}`;
	}


    render() {
        // const { titleForSearch, tutorials, currentTutorial, currentIndex } = this.state;
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
                    <SVGMap map={USA} onLocationMouseOver={this.showName}
                            locationClassName={this.getLocationClassName}
                            onLocationMouseOver={this.handleLocationMouseOver}
                            onLocationMouseOut={this.handleLocationMouseOut}
                        onLocationMouseMove={this.handleLocationMouseMove} />
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
 

