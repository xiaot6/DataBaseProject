import React, { Component } from "react";
import PriceDataService from "../services/price.service";
import {auth, addFavoriteHouse} from '../firebase'
import { Button } from "@material-ui/core";


export default class SearchHouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user})
            } 
        })
    }

    render() {
        return(
            <div>
                <h2>This is AddPrice Page</h2>
                <Button onClick = {() => {addFavoriteHouse(this.state.user, "2333")}}>
                    Add Fav
                </Button>
            </div>
        )
    }
}