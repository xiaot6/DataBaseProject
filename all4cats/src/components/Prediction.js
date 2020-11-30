import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import USA from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import { getLocationId, getLocationName } from './utils';
import PriceDataService from "../services/price.service";
import CA from '../assets/CA.png';
import TX from '../assets/TX.png';
import locationMap from './utils.js';


export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.predictThisState = this.predictThisState.bind(this);
    this.onChangeSaveState = this.onChangeSaveState.bind(this);

    
    this.state = {
      stateForPredict: "",
      index: 0,
      imgToShow: [CA, TX],
      tooltipStyle: {
				display: getLocationName
      }
    };

  }
  
  predictThisState() {
    console.log("clicked search");
    if (this.state.stateForPredict == "CA") {
      this.setState({
        index : 0
      })
    } else if (this.state.stateForPredict == "TX") {
      this.setState({
        index : 1
      })
    }
    
  }

  onChangeSaveState(e) {
    const state = e.target.value;
        this.setState({
          stateForPredict: state
        });
  } 


  render() {
    return (
        <div>
          <h2>
            This is prediction.
          </h2>
            <form noValidate autoComplete="off" className="formStyle">
              {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
              <TextField id="outlined-basic" label="State" value={this.state.stateForPredict} onChange={this.onChangeSaveState} variant="outlined"/>
            </form>
            <Button onClick={this.predictThisState}>
                Predict the state
            </Button>
        <div style={{ display: "flex", justifyContent: "center", height:"10rem", marginBottom:"2rem"}}>
            <img src={this.state.imgToShow[this.state.index]} alt= ""/>
        </div>
        <div style={{ display: "flex", justifyContent: "center", height:"43rem", marginBottom:"2rem"}}>
          <SVGMap map={USA}
                  type="link"
              onLocationMouseOver={this.handleLocationMouseOver}
              onLocationMouseOut={this.handleLocationMouseOut}
              onLocationClick={this.handleLocationClick}
              onLocationFocus={this.handleLocationFocus}
              onLocationBlur={this.handleLocationBlur} />
        </div>
      
    )
  }
}