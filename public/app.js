/* global React */

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
        if (name.length > 0) {
            this.refs.name.value = '';
            // pass name up to the Greetr function
            this.props.onNewName(name);
        }
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
    
}

class Greetr extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }
    
    _handleNewName(name) {
        // set state with name passed up from the form
        this.setState({
          name: name
        });
    }
    
    render() {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <GreetrMessage name={name} message={message} />
                <GreetrForm onNewName={this._handleNewName.bind(this)} />
            </div>
        );
    }
    
};

Greetr.defaultProps = {
    name: "React",
    message: "This is from the component."
};

var name = "Codemzy";

ReactDOM.render(<Greetr name={name} message="This is a new message not the default!" />, document.getElementById('app'));