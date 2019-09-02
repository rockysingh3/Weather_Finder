// left off at 24:40 
import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import KEY from './API_KEY';



export default class App extends React.Component {

  state = {
    temp: '',
    city: '',
    description: '',
    country: '',
    humidity: '',
    error: ''
  }

// maybe you put this function outside the class
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value
      const country = e.target.elements.country.value

      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${KEY.api_key}`)
      const data = await api_call.json()
      

      if(city && country) {
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ''
        });
      }else {
        this.setState({
          error: 'You did not end the values for city or country'
        })
      }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description }
          error={this.state.error}
        />
      </div>
    )
  }
}