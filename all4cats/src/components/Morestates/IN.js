import React, { Component } from "react";
import { Typography, Button, TextField, List, ListItem, ListItemText } from '@material-ui/core'
import ReactDOM from "react-dom";
import Plot from 'react-plotly.js';
import PredictDataService from "../../services/predict.service";


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
    const state = 533510.32 + -4263.94 * x + 25.84*x*x
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
            This is IN prediction.
          </h2>
        <div>
        <Plot
        data={[
          {
            x: ["1/31/05", "2/28/05", "3/31/05", "4/30/05", "5/31/05", "6/30/05", "7/31/05", "8/31/05", "9/30/05", "10/31/05", "11/30/05", "12/31/05", "1/31/06", "2/28/06", "3/31/06", "4/30/06", "5/31/06", "6/30/06", "7/31/06", "8/31/06", "9/30/06", "10/31/06", "11/30/06", "12/31/06", "1/31/07", "2/28/07", "3/31/07", "4/30/07", "5/31/07", "6/30/07", "7/31/07", "8/31/07", "9/30/07", "10/31/07", "11/30/07", "12/31/07", "1/31/08", "2/29/08", "3/31/08", "4/30/08", "5/31/08", "6/30/08", "7/31/08", "8/31/08", "9/30/08", "10/31/08", "11/30/08", "12/31/08", "1/31/09", "2/28/09", "3/31/09", "4/30/09", "5/31/09", "6/30/09", "7/31/09", "8/31/09", "9/30/09", "10/31/09", "11/30/09", "12/31/09", "1/31/10", "2/28/10", "3/31/10", "4/30/10", "5/31/10", "6/30/10", "7/31/10", "8/31/10", "9/30/10", "10/31/10", "11/30/10", "12/31/10", "1/31/11", "2/28/11", "3/31/11", "4/30/11", "5/31/11", "6/30/11", "7/31/11", "8/31/11", "9/30/11", "10/31/11", "11/30/11", "12/31/11", "1/31/12", "2/29/12", "3/31/12", "4/30/12", "5/31/12", "6/30/12", "7/31/12", "8/31/12", "9/30/12", "10/31/12", "11/30/12", "12/31/12", "1/31/13", "2/28/13", "3/31/13", "4/30/13", "5/31/13", "6/30/13", "7/31/13", "8/31/13", "9/30/13", "10/31/13", "11/30/13", "12/31/13", "1/31/14", "2/28/14", "3/31/14", "4/30/14", "5/31/14", "6/30/14", "7/31/14", "8/31/14", "9/30/14", "10/31/14", "11/30/14", "12/31/14", "1/31/15", "2/28/15", "3/31/15", "4/30/15", "5/31/15", "6/30/15", "7/31/15", "8/31/15", "9/30/15", "10/31/15", "11/30/15", "12/31/15", "1/31/16", "2/29/16", "3/31/16", "4/30/16", "5/31/16", "6/30/16", "7/31/16", "8/31/16", "9/30/16", "10/31/16", "11/30/16", "12/31/16", "1/31/17", "2/28/17", "3/31/17", "4/30/17", "5/31/17", "6/30/17", "7/31/17", "8/31/17", "9/30/17", "10/31/17", "11/30/17", "12/31/17", "1/31/18", "2/28/18", "3/31/18", "4/30/18", "5/31/18", "6/30/18", "7/31/18", "8/31/18", "9/30/18", "10/31/18", "11/30/18", "12/31/18", "1/31/19", "2/28/19", "3/31/19", "4/30/19", "5/31/19", "6/30/19", "7/31/19", "8/31/19", "9/30/19", "10/31/19", "11/30/19", "12/31/19", "1/31/20", "2/29/20", "3/31/20", "4/30/20", "5/31/20", "6/30/20", "7/31/20", "8/31/20", "9/30/20", "10/31/20"],
                y: [115213, 116186, 117235, 117781, 118264, 118754, 119283, 119700, 120049, 120307, 120570, 120777, 120745, 120697, 120559, 120690, 120887, 121207, 121535, 121870, 122242, 122600, 122814, 123002, 123075, 123200, 123253, 123409, 123440, 123403, 123302, 123278, 123249, 123219, 123352, 123570, 123741, 123736, 123649, 123425, 123233, 123037, 122903, 122665, 122384, 122149, 121826, 121338, 120940, 120540, 120297, 119971, 119732, 119468, 119145, 118855, 118664, 118505, 118463, 118475, 118458, 118516, 118473, 118557, 118505, 118468, 118295, 117993, 117531, 117057, 116579, 116219, 115905, 115531, 115176, 114727, 114334, 113997, 113878, 113957, 114092, 114146, 114137, 114008, 113854, 113738, 113728, 113794, 113902, 113921, 113901, 113822, 113836, 113974, 114012, 114110, 114204, 114442, 114620, 114852, 115091, 115403, 115682, 115969, 116210, 116402, 116719, 117082, 117507, 117872, 118287, 118639, 118959, 119234, 119615, 119997, 120365, 120732, 121114, 121487, 121759, 121996, 122216, 122527, 122824, 123126, 123268, 123441, 123679, 123949, 124307, 124695, 125230, 125697, 126049, 126335, 126721, 127263, 127963, 128629, 129301, 129914, 130436, 130878, 131320, 131935, 132688, 133521, 134329, 135058, 135651, 136318, 136978, 137863, 138708, 139593, 140264, 141013, 141891, 142890, 143807, 144739, 145762, 146716, 147477, 148000, 148712, 149609, 150710, 151507, 152222, 152784, 153572, 154289, 155000, 155696, 156447, 157200, 157811, 158335, 158930, 159722, 160531, 161441, 162276, 163231, 164227, 165316, 166531, 167897],
                type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'scatter', x: this.state.x, y: this.state.y},
        ]}
        layout={ {width: 500, height: 400, title: 'A IN Plot'} }
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