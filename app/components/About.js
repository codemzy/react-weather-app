var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>The Weather Weasel loves the weather. He enjoys travelling to new locations via the vast wires of the internet, checking what the temperature is and reporting back.</p>
            <p>How does he get the temperature? He holds his paw up in the air and can tell the temperature instantly!</p>
              <div className="text-center">
                <p>Built by codemzy.</p>
                <a href="https://www.twitter.com/codemzy" target="_blank"><i className="fa fa-twitter"></i> Twitter</a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/codemzy" target="_blank"><i className="fa fa-github"></i> GitHub</a>&nbsp;&nbsp;&nbsp;
                <a href="https://codemzy.github.io" target="_blank"><i className="fa fa-th"></i> Portfolio</a>
              </div>
        </div>
    ); 
};

module.exports = About;