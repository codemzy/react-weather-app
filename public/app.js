/* global React */
/* global ReactDOM */

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
        this.props.onNewName(update);
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <input type="text" placeholder="Your name" ref="name" /><br />
                    <textarea placeholder="Your message..." ref="message"></textarea><br />
                    <button>Update</button>
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
    
    _handleNewName(object) {
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
                <GreetrForm onNewName={this._handleNewName.bind(this)} />
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