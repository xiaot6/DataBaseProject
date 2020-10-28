import React, { Component } from "react";
import logo from '../assets/logo_transparent.png';
import {Typography, Button, TextField} from '@material-ui/core'
import PriceDataService from "../services/price.service";

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

    render() {
        // const { titleForSearch, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <h2>
                    This is Price Page
                </h2>
                <form noValidate autoComplete="off">
                    {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
                    <TextField id="standard-basic" label="Title" value={this.state.titleForSearch} onChange={this.onChangeSaveTitle}/>
                </form>
                <Button onClick={this.searchTitle}>
                    Search
                </Button>
                <ul className="list-group">
                    {this.state.tutorials &&
                    this.state.tutorials.map((tutorial, index) => (
                        <li
                            onClick={() => this.setActiveTutorial(tutorial, index)}
                            key={index}
                        >
                        {tutorial.title}, {tutorial.description}
                        </li>
                    ))}
                </ul>
                <header>
                    <img src={logo} alt='Logo' height='300'></img>
                    <Typography variant='h5'>
                        Welcome to CS 411 Final Project - All4Cats.
                    </Typography>
                    <a
                    className="App-link"
                    href="https://wiki.illinois.edu/wiki/display/CS411AAFA20/All4Cat"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Our Homepage
                    </a>
                </header>
            </div>
        )
    }
}


