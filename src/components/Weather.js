import React from 'react';


export default class Weather extends React.Component {
    render() {
        return (
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>  }
                { this.props.temp &&  <p>Teamperature: {this.props.temp}</p>}
                { this.props.description && <p> Description: {this.props.description}</p>}
                { this.props.humidity && <p> Humidity: {this.props.humidity}</p>}   
                <p>{this.props.error}</p>
            </div>
        )
    }
}