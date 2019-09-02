import React from 'react';


export default Weather = (props) => {
        return (
            <div>
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>  }
                { this.props.temp &&  <p>Teamperature: {this.props.temp}</p>}
                { this.props.description && <p> Description: {this.props.description}</p>}
                { this.props.humidity && <p> Humidity: {this.props.humidity}</p>}
                { this.props.error && <p>{this.props.error}</p>}
            </div>
        )
}