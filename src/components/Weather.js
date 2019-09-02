import React from 'react';


const Weather = props => {
        return (
            <div>
                { props.city && props.country && <p>Location: { props.city }, { props.country }</p>  }
                { props.temp &&  <p>Teamperature: { props.temp }</p>}
                { props.description && <p> Description: { props.description }</p>}
                { props.humidity && <p> Humidity: { props.humidity }</p>}
                { props.error && <p>{ props.error }</p>}
            </div>
        )
}

export default Weather;