import React, { Component } from "react";
import logo from '../assets/logo_transparent.png';
import {Typography, Button, TextField} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import PriceDataService from "../services/price.service";

import { Link } from "react-router-dom";


export default class Price extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllTutorials = this.removeAllTutorials.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
    
        this.state = {
          tutorials: [],
          currentTutorial: null,
          currentIndex: -1,
          searchTitle: ""
        };
    }

    componentDidMount() {
    this.retrieveTutorials();
    }

    onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
        searchTitle: searchTitle
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
        PriceDataService.findByTitle(this.state.searchTitle)
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
        const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
        return (
            <div>
                <h2>
                    This is Price Page
                </h2>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" value={searchTitle} onChange={this.onChangeSearchTitle}/>
                </form>
                <Button onClick={this.searchTitle}>
                    Search
                </Button>
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


