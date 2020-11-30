import React, { Component } from "react";
import logo from '../assets/logo_transparent.png';
import {Typography, Button, TextField, List, ListItem, ListItemText} from '@material-ui/core'
import PriceDataService from "../services/price.service";

import ReactDOM from "react-dom";
import USA from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import "./Price.css";

import { getLocationId, getLocationName, locationMap } from './utils';

import { Link } from "react-router-dom";

export default class Price extends Component {
    constructor(props) {
        super(props);
        // For the search field
        this.onChangeSaveDate = this.onChangeSaveDate.bind(this);
        this.onChangeSaveZip = this.onChangeSaveZip.bind(this);
        this.onChangeSaveValue = this.onChangeSaveValue.bind(this);
        this.insertInstance = this.insertInstance.bind(this);
        this.updateInstance = this.updateInstance.bind(this);
        this.searchAllPrice = this.searchAllPrice.bind(this);
        // this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        // this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.searchPriceByDateAndZip = this.searchPriceByDateAndZip.bind(this);
        this.deleteAllPrice = this.deleteAllPrice.bind(this);
        this.deletePriceByDateAndZip = this.deletePriceByDateAndZip.bind(this);
        // For city and state
        this.searchPriceByDateStateCity = this.searchPriceByDateStateCity.bind(this);
        this.onChangeSaveCity = this.onChangeSaveCity.bind(this);
        this.onChangeSaveState = this.onChangeSaveState.bind(this);
        //avg
        this.searchStateAvgPrice = this.searchStateAvgPrice.bind(this);

    
        // For the interactive map
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
            // states for search field
            dateForSearch: "",
            zipForSearch: "",
            stateForSearch: "",
            cityForSearch: "",
            valueForSearch: null,
            priceArrayJSON: [],
            stateAvgPrice: null,
            // currentTutorial: null,
            // currentIndex: -1,
            // states for interactive map
            pointedLocation: null,
			focusedLocation: null,
            clickedLocation: null,
			tooltipStyle: {
				display: getLocationName
            }
        };

        this.Links = {
			AL: "https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat",
            AK: "https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat",
			AS: 'https://en.wikipedia.org/wiki/Brittany_(administrative_region)',
			AZ: 'https://en.wikipedia.org/wiki/Centre-Val_de_Loire',
			AR: 'https://en.wikipedia.org/wiki/Corsica',
			CA: 'https://en.wikipedia.org/wiki/Grand_Est',
			CO: 'https://en.wikipedia.org/wiki/Hauts-de-France',
			CT: 'https://en.wikipedia.org/wiki/%C3%8Ele-de-France',

		};
    }

    // componentDidMount() {
    //     this.retrieveTutorials();
    // }

    ////////---- For search field ----////////
    onChangeSaveDate(e) {
        const date = e.target.value;

        this.setState({
            dateForSearch: date
        });
    }

    onChangeSaveZip(e) {
        const zip = e.target.value;

        this.setState({
            zipForSearch: zip
        });
    }

    onChangeSaveValue(e) {
        const value = e.target.value;

        this.setState({
            valueForSearch: value
        });
    }

    onChangeSaveCity(e) {
        const city = e.target.value;

        this.setState({
            cityForSearch: city
        });
    }
    onChangeSaveState(e) {
        const state = e.target.value;

        this.setState({
            stateForSearch: state
        });
    }

    searchPriceByDateAndZip() {
        console.log("clicked search");
        PriceDataService.getByDateAndZip(this.state.dateForSearch, this.state.zipForSearch)
            .then(response => {
            this.setState({
                priceArrayJSON: response.data
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }

    searchPriceByDateStateCity() {
        console.log("clicked");
        PriceDataService.getByDateAndStateAndCity(this.state.dateForSearch, this.state.stateForSearch, this.state.cityForSearch)
            .then(response => {
            this.setState({
                priceArrayJSON: response.data
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }

    searchStateAvgPrice() {
        PriceDataService.getStateAvgPrice(this.state.stateForSearch)
            .then(response => {
                console.log("avgClicked");
                console.log(response.data);
            this.setState({
                priceArrayJSON: [response.data]
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }


    searchAllPrice() {
        console.log("clicked show all");
        PriceDataService.getAll()
            .then(response => {
            this.setState({
                priceArrayJSON: response.data
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }

    refreshList() {
        this.setState({
            priceArrayJSON: [],
            currentIndex: -1
        });
    }

    insertInstance() {
        var data = {
            date: this.state.dateForSearch,
            zipcode: this.state.zipForSearch,
            value: this.state.valueForSearch,
            state: this.state.stateForSearch,
            city: this.state.cityForSearch
        };
      
        PriceDataService.createAll(data)
            .then(response => {
                console.log(response.data);
                this.setState({
                    priceArrayJSON: [response.data],
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateInstance() {
        PriceDataService.updateByDateAndZip(
            this.state.dateForSearch,
            this.state.zipForSearch,
            {
                date: this.state.dateForSearch,
                zipcode: this.state.zipForSearch,
                value: this.state.valueForSearch,
            }
          )
            .then(response => {
              console.log(response.data);
              this.setState({
                priceArrayJSON: [response.data]
              });
            })
            .catch(e => {
              console.log(e);
            });
    }

    deleteAllPrice() {
        PriceDataService.deleteAll()
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    deletePriceByDateAndZip() {
        console.log("delete one clicked");
        PriceDataService.deleteByDateAndZip(this.state.dateForSearch, this.state.zipForSearch)
            .then(response => {
                console.log(response);
                this.setState({
                    priceArrayJSON: [{
                        value: "Deleted Successfully"
                    }]
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    ////////---- End search field ----////////

    // retrieveTutorials() {
    //     PriceDataService.getAll()
    //     .then(response => {
    //     this.setState({
    //         tutorials: response.data
    //     });
    //     console.log(response.data);
    //     })
    //     .catch(e => {
    //     console.log(e);
    //     });
    // }

    // setActiveTutorial(tutorial, index) {
    //     console.log("set active");
    //     this.setState({
    //         currentTutorial: tutorial,
    //         currentIndex: index
    //     });
    // }


    
    
    // for map:
	handleLocationMouseOver(event) {
		const pointLoc = getLocationName(event);
        this.setState({ pointedLocation: pointLoc });
        PriceDataService.getStateAvgPrice(locationMap[pointLoc])
        .then(response => {
            console.log(response);
            this.setState({
                stateAvgPrice: response.data.value
            });
        })
        .catch(e => {
            console.log(e);
        });
	}

	handleLocationMouseOut() {
        this.setState({ 
            pointedLocation: null,
            stateAvgPrice: null,
        });
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
        // const { titleForSearch, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <header>
                    <img src={logo} alt='Logo' height='200'></img>
                </header>
                <h4>
                    Housing Price: CRUD
                </h4>
                <form noValidate autoComplete="off" className="formStyle">
                    {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
                    <TextField id="outlined-basic1" label="Date" value={this.state.dateForSearch} onChange={this.onChangeSaveDate} variant="outlined"/>
                    <TextField id="outlined-basic2" label="Zip Code" value={this.state.zipForSearch} onChange={this.onChangeSaveZip} variant="outlined"/>
                    <TextField id="outlined-basic3" label="Price" value={this.state.valueForSearch} onChange={this.onChangeSaveValue} variant="outlined"/>
                    <TextField id="outlined-basic4" label="City" value={this.state.cityForSearch} onChange={this.onChangeSaveCity} variant="outlined"/>
                    <TextField id="outlined-basic5" label="State" value={this.state.stateForSearch} onChange={this.onChangeSaveState} variant="outlined"/>
                </form>
                <Button onClick={this.searchPriceByDateAndZip}>
                    Search One by Date and Zipcode
                </Button>
                <Button onClick={this.searchPriceByDateStateCity}>
                    Search One by DateStateCity
                </Button>
                <Button onClick={this.searchAllPrice}>
                    Show All Price
                </Button>
                <Button onClick={this.searchStateAvgPrice}>
                    Show State Avg_Price
                </Button>
                <Button onClick={this.refreshList}>
                    Refresh List
                </Button>
                <Button onClick={this.insertInstance}>
                    Insert One
                </Button>
                <Button onClick={this.updateInstance}>
                    Update One
                </Button>

                <Button onClick={this.deletePriceByDateAndZip}>
                    Delete One
                </Button>

                <Button onClick={this.deleteAllPrice}>
                    Delete All
                </Button>

                <div style={{display:"flex", justifyContent: "center"}}>
                    <div style={{width: 380}}>
                        <List component="nav">
                            {this.state.priceArrayJSON &&
                            this.state.priceArrayJSON.map((priceJSON, index) => (
                                <ListItem button
                                    // onClick={() => {this.setActiveTutorial(priceJSON, index)}}
                                    onClick={() => {}}
                                    key={index}
                                >
                                    <ListItemText>Date: {priceJSON.date}, Zip: {priceJSON.zipcode}, Price: {priceJSON.value}, City: {priceJSON.city}, State: {priceJSON.state}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", height:"43rem", marginBottom:"2rem"}}>
                {/* <div className="examples__block__map examples__block__map--usa"> */}
                    <SVGMap map={USA}
                        type="link"
						onLocationMouseOver={this.handleLocationMouseOver}
						onLocationMouseOut={this.handleLocationMouseOut}
						onLocationClick={this.handleLocationClick}
						onLocationFocus={this.handleLocationFocus}
						onLocationBlur={this.handleLocationBlur} />
                </div>
                <Typography className="examples__block__map__tooltip" style={this.state.tooltipStyle}>
						Region: {this.state.pointedLocation}
				</Typography>
                <Typography>
                        Average Price: {this.state.stateAvgPrice}
                </Typography>
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
 

