import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/Chart'
import GoogleMap from "../components/GoogleMap";


class WeatherList extends Component{
    
    
    renderWeather(cityData){
    
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>

                <td>
                    <Chart data={temps} color='orange' units="K" />
                </td>
                 <td>
                    <Chart data={pressures} color='green' units="hPA" />
                 </td>
                  <td>
                    <Chart data={humidities} color='blue' units="%" />
                  </td>
            </tr>
            
        );
    }
    render(){
        console.log('this.props.weather', this.props.weather);
        return(
            <table className="table table-hover"> 
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidty (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.weather.map(this.renderWeather)
                        
                        
                    }
                </tbody>
           </table>
            
            );
        
    }
    
}


function mapStateToProps(state){
  return {
     weather: state.weather
      
  };
    
}

export default connect(mapStateToProps)(WeatherList);