import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';


export default class Prediction extends Component {
    constructor(props) {
        super(props);
    
        this.predictThisData = this.predictThisData.bind(this);
        this.onChangeSaveMonth = this.onChangeSaveMonth.bind(this);
        this.onChangeSaveYear = this.onChangeSaveYear.bind(this);
        this.state = {
          monthForPredict: "",
          yearForPredict: "",
          priceArrayJSON: [],
          predictedPrice: ""
    
        };
    
      }
    
      predictThisData() {
        console.log("clicked");
        const x = parseFloat(this.state.monthForPredict) + (parseFloat(this.state.yearForPredict) - 2005) * 12;
        const state = 187600.19685002754 + -1232.55835873 * x + 7.47471534* x * x
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
              yearForPredict: state
            });
      } 


  render() {
    return (
        <div>
          <h2>
            This is GA prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
                x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
                y: [160433, 160823, 161243, 161752, 162364, 163024, 163624, 164170, 164747, 165321, 165962, 166523, 167163, 167758, 168319, 168753, 169143, 169595, 170118, 170634, 171088, 171498, 171887, 172342, 172786, 173209, 173614, 173942, 174155, 174201, 174134, 174004, 173725, 173402, 173010, 172681, 172066, 171275, 170256, 169409, 168580, 167676, 166593, 165377, 164212, 162918, 161339, 159389, 157580, 155889, 154320, 152447, 150614, 148942, 147699, 146642, 145691, 144679, 143907, 143356, 142784, 142152, 141550, 141305, 141122, 140748, 139798, 138536, 136994, 135665, 134258, 133114, 131880, 130866, 129554, 128105, 126441, 124973, 123863, 123213, 122936, 122683, 122380, 121720, 121227, 120723, 120796, 120984, 121388, 121813, 122326, 122655, 122819, 123035, 123634, 124471, 125528, 126627, 127701, 128710, 129810, 131010, 132227, 133584, 135018, 136476, 137706, 138988, 140077, 141156, 142024, 142899, 143656, 144356, 145117, 145828, 146590, 147288, 148011, 148668, 149309, 149919, 150514, 151201, 152040, 152946, 153722, 154477, 155203, 155894, 156576, 157239, 158082, 158907, 159878, 160827, 161707, 162415, 163043, 163683, 164218, 164941, 165738, 166711, 167516, 168395, 169263, 170173, 171084, 172139, 173327, 174494, 175865, 177152, 178562, 179915, 181362, 182729, 183909, 185114, 186403, 187772, 189091, 190325, 191474, 192595, 193747, 194814, 195791, 196594, 197600, 198607, 199671, 200483, 201269, 202069, 202817, 203424, 203895, 204459, 205235, 206210, 207174, 208179, 209164, 210347, 211620, 213016, 214544, 216314],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A GA Plot'} }
          />
  
        </div>
        <div>
        <form noValidate autoComplete="off" className="formStyle">
              {/* listening for title in value, once change call onChange function to temporarily hold the title, until submission */}
            <TextField id="outlined-basic10" label="Month" value={this.state.monthForPredict} onChange={this.onChangeSaveMonth} variant="outlined" />
            <TextField id="outlined-basic11" label="Year" value={this.state.yearForPredict} onChange={this.onChangeSaveYear} variant="outlined"/>
        </form>
        <Button onClick={this.predictThisData}>
            Predict the state at this Month-Year
        </Button>
        <Typography>
              Predicted State Average Price: {this.state.predictedPrice}
        </Typography>
        
            
          
          
        </div>

      </div>
    )
  }
}
