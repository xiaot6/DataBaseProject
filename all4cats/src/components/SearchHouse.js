import React, { Component } from "react";
import HouseDataService from "../services/house.service";
import {Button, TextField} from '@material-ui/core'
import {auth, addFavoriteHouse} from '../firebase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class SearchHouse extends Component {
    constructor(props) {
        super(props);
        this.onChangeSaveBed = this.onChangeSaveBed.bind(this);
        this.onChangeSavePrice = this.onChangeSavePrice.bind(this);
        this.searchByBed = this.searchByBed.bind(this);
        this.searchByPrice = this.searchByPrice.bind(this);
        this.state = {
            user: null,
            bedForSearch: '',
            priceForSearch: null,
            houseArrayJSON: []
        };
    }

    onChangeSaveBed(e) {
        const bed = e.target.value;
        this.setState({
            bedForSearch: bed
        });
    }
    onChangeSavePrice(e) {
        const price = e.target.value;

        this.setState({
            priceForSearch: price
        });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({user})
            } 
        })
    }

    searchByBed() {
        HouseDataService.getByBed(this.state.bedForSearch)
            .then(response => {
            this.setState({
                houseArrayJSON: response.data
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }

    searchByPrice() {
        HouseDataService.getByPrice(this.state.priceForSearch)
            .then(response => {
            this.setState({
                houseArrayJSON: response.data
            });
            console.log(response.data);
            })
            .catch(e => {
            console.log(e);
        });
    }

    render() {
        return(
            <div>
                <h2>Search your favorite houses</h2>
                <Button onClick = {() => {addFavoriteHouse(this.state.user, "2333")}}>
                    Add Fav
                </Button>
                <form noValidate autoComplete="off" className="formStyle">
                    {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
                    <TextField id="outlined-basic1" label="Lowest Price" value={this.state.priceForSearch} onChange={this.onChangeSavePrice} variant="outlined"/>
                    <TextField id="outlined-basic2" label="Number of Bedrooms" value={this.state.bedForSearch} onChange={this.onChangeSaveBed} variant="outlined"/>
                </form>
                <Button onClick={this.searchByPrice}>
                    Search By Price
                </Button>
                <Button onClick={this.searchByBed}>
                    Search By Number of Bedrooms
                </Button>
                <Card>
                <CardContent>
                {this.state.houseArrayJSON &&
                this.state.houseArrayJSON.map((houseJSON, index) => (
                    <Typography>Address: {houseJSON.address}, Company: {houseJSON.company}, Floor Plan: {houseJSON.floor_plan}, Number of Rooms: {houseJSON.number_of_rooms}, Price: {houseJSON.price}</Typography>
                ))}
                </CardContent>
                </Card>
            </div>
        )
    }
}