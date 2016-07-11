var React = require('react');

// components
var GreeterMessage = require('./GreeterMessage.js');
var GreeterForm = require('./GreeterForm.js');

class Greeter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            message: this.props.message
        };
    }
    
    _handleNewData(object) {
        // set state with name if passed up from the form
        if (object.name) {
            this.setState({
              name: object.name
            });
        }
        // set state with message if passed up from the form
        if (object.message) {
            this.setState({
              message: object.message
            });
        } 
    }
    
    render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this._handleNewData.bind(this)} />
            </div>
        );
    }
    
}

Greeter.defaultProps = {
    name: "React",
    message: "This is from the component."
};

module.exports = Greeter;