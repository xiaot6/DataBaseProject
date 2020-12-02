import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText, Grid} from '@material-ui/core'
import Plot from 'react-plotly.js';
// import YParaMap from '../predictPara.js';



    
export default class CAPredict extends Component {
  constructor(props) {
    super(props);

    this.predictThisData = this.predictThisData.bind(this);
    this.onChangeSaveMonth = this.onChangeSaveMonth.bind(this);
    this.onChangeSaveYear = this.onChangeSaveYear.bind(this);
    this.state = {
      monthForPredict: "",
      yearForPredict: "",
      priceArrayJSON: [],
      predictedPrice: "",
      x: [],
      y_ax: [],
      stateForPredict : ""
    };

  }

  predictThisData() {
    console.log("clicked");
    const x = parseFloat(this.state.monthForPredict) + (parseFloat(this.state.yearForPredict) - 2005) * 12;
    let state = 533510.32 + -4263.94 * x + 25.84 * x * x;

    if (this.props.dataFromParent.toUpperCase() == "CA") {
      state = 533510.32 + -4263.94 * x + 25.84 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "GA") {
      state = 187600.19685002754 + -1232.55835873 * x + 7.47471534 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "FL") {
      state = 276893.96656448056 + -2462.86133224 * x + 13.24612877 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "IL") {
      state = 255193.6283824745 + -1511.58358371 * x + 7.1501021 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "MI") {
      state = 169953.69219309723 + -1428.96078561 * x + 8.34600635 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "NC") {
      state = 176321.79091347478 + -590.83080141 * x + 4.13723569 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "NJ") {
      state = 412541.86494385503 + -1966.74692885 * x + 8.8387983 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "NY") {
      state = 298486.55941202806 + -845.42532215 * x + 5.777375 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "OH") {
      state = 145249.8006768393 + -727.29477089 * x + 4.26083127 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "PA") {
      state = 178451.22592656378 + -400.72759846 * x + 2.76650911 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "TX") {
      state = 144563.37974131992 + -395.11679176 * x + 4.47240522 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "AL") {
      state = 136737.47323126203 + -383.59314902 * x + 2.37051515 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "AZ") {
      state = 276961.0812689445 + -2406.27749531 * x + 13.49304968 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "CO") {
      state = 262887.9984827087 + -1247.16556742 * x + 11.79954859 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "IN") {
      state = 128969.09982433176 + -437.71293967 * x + 3.29019553 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "MA") {
      state = 320364.91230194265 + -2054.33845275 * x + 14.46137136 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "MD") {
      state = 365422.9821713971 + -1798.80626657 * x + 8.5830226 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "MN") {
      state = 246124.8157911959 + -1527.10604921 * x + 9.16624327 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "MO") {
      state = 148557.1760092312 + -609.0573013 * x + 3.84690063 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "SC") {
      state = 174602.04636435656 + -626.61311204 * x + 4.05608023 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "TN") {
      state = 147172.14380338934 + -542.42270498 * x + 4.23604056 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "VA") {
      state = 287638.34706014046 + -1095.06944996 * x + 6.07600665 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "WA") {
      state = 320364.91230194265 + -2054.33845275 * x + 14.46137136 * x * x;
    } else if (this.props.dataFromParent.toUpperCase() == "WI") {
      state = 177735.42314859462 + -848.68609029 * x + 5.08628006 * x * x;
    }
    // const t = parseFloat(this.state.monthForPredict) + (parseFloat(this.state.yearForPredict) - 2005) * 12;
    this.setState({
      predictedPrice: state
    });
  }

  onChangeSaveMonth(e) {
    const state = e.target.value;
        this.setState({
          monthForPredict: state
        });
  } 

  onChangeSaveYear(e) {
    const state = e.target.value;
        this.setState({
          yearForPredict: state,
          stateForPredict: this.props.stateForPredict
        });
  } 


  render() {
    return (
      <div style={{display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'}}>
        <h2 style={{marginTop: "50px", marginBottom: "30px", fontWeight: "normal"}}>
                This is prediction for {this.props.dataFromParent}.
        </h2>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Plot
                data={[
                  {
                    x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
                    y: this.props.yFromParent,
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                  },
                  {type: 'scatter', x: this.state.x, y: this.state.y},
                ]}
                layout={ {width: 500, height: 400, title: 'Time V.S. Average Price'} }
                  />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{display: 'flex',
                  flexDirection: "column",
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: "7rem"}}>
                <TextField style={{marginBottom: "20px"}} id="outlined-basic10" label="Month (1~12)" value={this.state.monthForPredict} onChange={this.onChangeSaveMonth} variant="outlined" />
                <TextField style={{marginBottom: "20px"}} id="outlined-basic11" label="Year (e.g. 2022)" value={this.state.yearForPredict} onChange={this.onChangeSaveYear} variant="outlined"/>
                <Button style={{marginBottom: "20px"}} onClick={this.predictThisData} variant='outlined' color='primary'>
                    Predict Housing Price
                </Button>

                <Typography>
                      Predicted State Average Price:
                </Typography>
                <Typography style={{marginBottom: "20px"}}>
                  {this.state.predictedPrice}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

