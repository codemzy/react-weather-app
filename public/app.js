var React = require('react');
var ReactDOM = require('react-dom');

class GreetrMessage extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
    
}

class GreetrForm extends React.Component {
    
    _onFormSubmit(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var update = {};
        if (name.length > 0) {
            this.refs.name.value = '';
            update.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            update.message = message;
        }
        // pass the update object to the Greetr function
        this.props.onNewData(update);
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <div><input type="text" placeholder="Your name" ref="name" /></div>
                    <div><textarea placeholder="Your message..." ref="message"></textarea></div>
                    <div><button>Update</button></div>
                </form>
            </div>
        );
    }
    
}

class Greetr extends React.Component {
    
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
                <GreetrMessage name={name} message={message} />
                <GreetrForm onNewData={this._handleNewData.bind(this)} />
            </div>
        );
    }
    
}

Greetr.defaultProps = {
    name: "React",
    message: "This is from the component."
};

var name = "Codemzy";

ReactDOM.render(<Greetr name={name} message="This is a new message not the default!" />, document.getElementById('app'));