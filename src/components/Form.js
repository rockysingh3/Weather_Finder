import React from 'react';



const Form = props => {
        return (
            <div>
                <form onSubmit={props.getWeather}>
                    <input type="text" name="city" placeholder="city..."></input>
                    <input type="text" name="country" placeholder="Country..."></input>
                    <button>Get Weather</button>
                </form>
            </div>
        )
}

export default Form;