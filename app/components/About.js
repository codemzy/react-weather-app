var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>The Weather Weasel loves the weather. He enjoys travelling to new locations via the vast wires of the internet, checking what the temperature is and reporting back.</p>
            <p>How does he get the temperature? He holds his tail up in the air and can tell the temperature instantly!</p>
            <img src="/img/weatherweaselnavy.png" className="float-center"></img>
        </div>
    ); 
};

module.exports = About;