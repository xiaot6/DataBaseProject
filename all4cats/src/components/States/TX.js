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
        const state = parseFloat(this.state.monthForPredict)*  parseFloat(this.state.yearForPredict)
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
            This is TX prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
            x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
            y: [132814, 133229, 133486, 133668, 133932, 134333, 134669, 135017, 135308, 135494, 135804, 136044, 136416, 136833, 137294, 137741, 138267, 138811, 139366, 139844, 140360, 141036, 141614, 142200, 142607, 142904, 143113, 143440, 143812, 144235, 144537, 145011, 145468, 145868, 146142, 146378, 146176, 145767, 145201, 144846, 144449, 144068, 143775, 143368, 142859, 142303, 141707, 141139, 140832, 140819, 140887, 140768, 140608, 140465, 140432, 140345, 140290, 140216, 140432, 140604, 140697, 140672, 140685, 140780, 140806, 140684, 140207, 139666, 139123, 138687, 138164, 137729, 137311, 136777, 136195, 135612, 135140, 134708, 134520, 134494, 134591, 134614, 134486, 134314, 134286, 134527, 134880, 135182, 135506, 135864, 136301, 136694, 136992, 137279, 137740, 138341, 139046, 139701, 140471, 141333, 142215, 143106, 144018, 144974, 146029, 147140, 148243, 149217, 150100, 151011, 151820, 152602, 153417, 154357, 155251, 156221, 157187, 158185, 159176, 160205, 161248, 162283, 163391, 164520, 165573, 166609, 167627, 168612, 169517, 170480, 171358, 172279, 173241, 174176, 175081, 175957, 177009, 178003, 179082, 180023, 181028, 181937, 183073, 184274, 185357, 186432, 187374, 188378, 189226, 190100, 190882, 191686, 192550, 193539, 194525, 195421, 196230, 197084, 198105, 199257, 200393, 201484, 202450, 203422, 204173, 204992, 205687, 206600, 207572, 208540, 209214, 209752, 210404, 211147, 211920, 212562, 213152, 213378, 213605, 213802, 214248, 214724, 215449, 216301, 217197, 218140, 219241, 220550, 222123, 224065],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A TX Plot'} }
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
