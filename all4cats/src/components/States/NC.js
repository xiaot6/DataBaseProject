import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';


export default class Prediction extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      time: ""
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
            This is NC prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
            x: ["2005-01-31","2005-02-01","2005-02-02","2005-02-03","2005-02-04","2005-02-05","2005-02-06","2005-02-07","2005-02-08","2005-02-09","2005-02-10","2005-02-11","2005-02-12","2005-02-13","2005-02-14","2005-02-15","2005-02-16","2005-02-17","2005-02-18","2005-02-19","2005-02-20","2005-02-21","2005-02-22","2005-02-23","2005-02-24","2005-02-25","2005-02-26","2005-02-27","2005-02-28","2005-03-01","2005-03-02","2005-03-03","2005-03-04","2005-03-05","2005-03-06","2005-03-07","2005-03-08","2005-03-09","2005-03-10","2005-03-11","2005-03-12","2005-03-13","2005-03-14","2005-03-15","2005-03-16","2005-03-17","2005-03-18","2005-03-19","2005-03-20","2005-03-21","2005-03-22","2005-03-23","2005-03-24","2005-03-25","2005-03-26","2005-03-27","2005-03-28","2005-03-29","2005-03-30","2005-03-31","2005-04-01","2005-04-02","2005-04-03","2005-04-04","2005-04-05","2005-04-06","2005-04-07","2005-04-08","2005-04-09","2005-04-10","2005-04-11","2005-04-12","2005-04-13","2005-04-14","2005-04-15","2005-04-16","2005-04-17","2005-04-18","2005-04-19","2005-04-20","2005-04-21","2005-04-22","2005-04-23","2005-04-24","2005-04-25","2005-04-26","2005-04-27","2005-04-28","2005-04-29","2005-04-30","2005-05-01","2005-05-02","2005-05-03","2005-05-04","2005-05-05","2005-05-06","2005-05-07","2005-05-08","2005-05-09","2005-05-10","2005-05-11","2005-05-12","2005-05-13","2005-05-14","2005-05-15","2005-05-16","2005-05-17","2005-05-18","2005-05-19","2005-05-20","2005-05-21","2005-05-22","2005-05-23","2005-05-24","2005-05-25","2005-05-26","2005-05-27","2005-05-28","2005-05-29","2005-05-30","2005-05-31","2005-06-01","2005-06-02","2005-06-03","2005-06-04","2005-06-05","2005-06-06","2005-06-07","2005-06-08","2005-06-09","2005-06-10","2005-06-11","2005-06-12","2005-06-13","2005-06-14","2005-06-15","2005-06-16","2005-06-17","2005-06-18","2005-06-19","2005-06-20","2005-06-21","2005-06-22","2005-06-23","2005-06-24","2005-06-25","2005-06-26","2005-06-27","2005-06-28","2005-06-29","2005-06-30","2005-07-01","2005-07-02","2005-07-03","2005-07-04","2005-07-05","2005-07-06","2005-07-07","2005-07-08","2005-07-09","2005-07-10","2005-07-11","2005-07-12","2005-07-13","2005-07-14","2005-07-15","2005-07-16","2005-07-17","2005-07-18","2005-07-19","2005-07-20","2005-07-21","2005-07-22","2005-07-23","2005-07-24","2005-07-25","2005-07-26","2005-07-27","2005-07-28","2005-07-29","2005-07-30","2005-07-31","2005-08-01","2005-08-02","2005-08-03","2005-08-04","2005-08-05","2005-08-06","2005-08-07","2005-08-08"],
            y: [152045, 152553, 153018, 153624, 154211, 154922, 155674, 156462, 157236, 158067, 158884, 159703, 160500, 161292, 162114, 162927, 163795, 164619, 165492, 166348, 167200, 167971, 168666, 169346, 170069, 170700, 171347, 171959, 172619, 173265, 173810, 174302, 174666, 174937, 175199, 175420, 175590, 175609, 175542, 175387, 175151, 174774, 174316, 173883, 173415, 172902, 172200, 171430, 170604, 170014, 169419, 168698, 167802, 166948, 166269, 165531, 164909, 164394, 164090, 163751, 163440, 162972, 162567, 162326, 162192, 161959, 161441, 160857, 160185, 159561, 158884, 158265, 157566, 156875, 156065, 155117, 154265, 153592, 153100, 152587, 152174, 151642, 151141, 150650, 150292, 150025, 149839, 149858, 149779, 149644, 149515, 149572, 149629, 149737, 149862, 149980, 150138, 150297, 150629, 150976, 151450, 151956, 152480, 153001, 153472, 154009, 154471, 155047, 155525, 156020, 156325, 156576, 156788, 156975, 157134, 157214, 157406, 157629, 158022, 158407, 158896, 159384, 160008, 160540, 161006, 161444, 162006, 162658, 163219, 163718, 164128, 164501, 164922, 165433, 165910, 166517, 167254, 168171, 169052, 169882, 170754, 171611, 172521, 173456, 174342, 175153, 176052, 177019, 177953, 178755, 179461, 180262, 181136, 182209, 183240, 184332, 185430, 186585, 187651, 188584, 189588, 190656, 191839, 192921, 193922, 194718, 195632, 196558, 197630, 198522, 199392, 200307, 201211, 202166, 203002, 203798, 204552, 205338, 206143, 206915, 207688, 208641, 209706, 210860, 212064, 213297, 214667, 216190, 217867, 219690],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A NC Plot'} }
          />
  
        </div>
        <div>
        <form noValidate autoComplete="off" className="formStyle">
              {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
              <TextField id="outlined-basic" label="State" value={this.state.stateForPredict} onChange={this.onChangeSaveState} variant="outlined"/>
            </form>
            <Button onClick={this.predictThisState}>
                Predict the state
            </Button>
        </div>

      </div>
    )
  }
}