var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out.</p>
            <ol>
                <li>
                    <Link to='/?location=London'>London, UK</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
                <li>
                    <Link to='/?location=Madrid'>Madrid, Spain</Link>
                </li>
                <li>
                    <Link to='/?location=Sydney'>Sydney, Australia</Link>
                </li>
                <li>
                    <Link to='/?location=New%20York'>New York, USA</Link>
                </li>
            </ol>
        </div>
    ); 
};

module.exports = Examples;