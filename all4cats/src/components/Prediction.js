import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import USA from "@svg-maps/usa";
import { SVGMap } from "react-svg-map";
import { getLocationId, getLocationName } from './utils';
import PriceDataService from "../services/price.service";
import CA from '../assets/CA.png';
import TX from '../assets/TX.png';
// import locationMap from './utils.js';
import Plot from 'react-plotly.js';
import CAPredict from './States/CA'


export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.predictThisState = this.predictThisState.bind(this);
    this.onChangeSaveState = this.onChangeSaveState.bind(this);
    this.handleLocationMouseOver = this.handleLocationMouseOver.bind(this);
		this.handleLocationMouseOut = this.handleLocationMouseOut.bind(this);
		this.handleLocationClick = this.handleLocationClick.bind(this);
		this.handleLocationFocus = this.handleLocationFocus.bind(this);
		this.handleLocationBlur = this.handleLocationBlur.bind(this);
    
    this.state = {
      stateForPredict: "",
      index: 0,
      imgToShow: [CA, TX],
      x: [],
      y:[],
      clicked: false,
      tooltipStyle: {
        display: getLocationName
      }
    };
    this.links = {
      "ca": './states/CA',
      "fl": './states/FL',
      "ga": './states/GA',
      "il": './states/IL',
      "mi": './states/MI',
      "nc": './states/NC',
      "nj": './states/NJ',
      "ny": './states/NY',
      "ph": './states/OH',
      "pa": './states/PA',
      "tx": './states/TX',
      "ak": './states/AK',
      "al": './states/AL',
      "ar": './states/AR',
      "az": './states/AZ',
      "co": './states/CO',
      "ct": './states/DC',
      "de": './states/DE',
      "hi": './states/HI',
      "ia": './states/IA',
      "id": './states/ID',
      "in": './states/IN',
      "ks": './states/KS',
      "ky": './states/KY',
      "la": './states/LA',
      "ma": './states/MA',
      "md": './states/MD',
      "me": './states/ME',
      "mn": './states/MN',
      "mo": './states/MO',
      "ms": './states/MS',
      "mt": './states/MT',
      "mv": './states/MV',
      "my": './states/MY',
      "nd": './states/ND',
      "ne": './states/NE',
      "nh": './states/NH',
      "nm": './states/NM',
      "nv": './states/NV',
      "ok": './states/OK',
      "or": './states/OR',
      "ri": './states/RI',
      "sc": './states/SC',
      "sd": './states/SD',
      "tn": './states/TN',
      "ut": './states/UT',
      "va": './states/VA',
      "vt": './states/VT',
      "wa": './states/WA',
      "wi": './states/WI'
		};

  }


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
  
  predictThisState(event) {
    console.log("clicked search");
    // if (this.state.stateForPredict == "CA") {
    //   this.setState({
    //     index : 0
    //   })
    // } else if (this.state.stateForPredict == "TX") {
    //   this.setState({
    //     index : 1
    //   })
    // }
    // const clickedLocation = getLocationName(event);
		// const clickedLocationId = getLocationId(event);
    // this.setState({ clickedLocation: clickedLocation });
    this.setState({clicked: true});
		// window.open(this.links[this.state.stateForPredict.toLowerCase()], '_blank');
 
    
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
        
        {
        this.state.clicked ?
        <div> 
          <CAPredict>
            
          </CAPredict>
          <Button onClick={() => {this.setState({clicked: false})}}>
            Back
          </Button>
        </div>
        : 
        <div> 
          <form noValidate autoComplete="off" className="formStyle">
            {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
            <TextField id="outlined-basic" label="State" value={this.state.stateForPredict} onChange={this.onChangeSaveState} variant="outlined"/>
          </form>
          <Button onClick={this.predictThisState}>
            Predict the state
          </Button>
          <div>
            <p>
              Please use Postal Abbreviations
            </p>
            <p>
              For instance: "CA", "IL", "NY", "TX","FL", "PA", "NJ", "GA", "MI", "NC", "OH"
            </p>
            <p>
              Or you can click on the map below
            </p>
          </div>
        </div> 
        }
      </div>
    )
  }
}
