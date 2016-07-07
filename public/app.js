class Greetr extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        };
    }
    
    _onClick(e) {
      e.preventDefault();
      var nameRef = this.refs.name;
      var name = nameRef.value;
      // only set the state if a value has been entered
      if (typeof name === 'string' && name.length > 0) {
          // set state with name submitted in form
          this.setState({
              name: name
          });
      }
      // now clear the field
      nameRef.value = '';
    }
    
    render() {
        var name = this.state.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                
                <form onSubmit={this._onClick.bind(this)}>
                  <input type="text" ref="name" />
                  <button>Set Name</button>
                </form>
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