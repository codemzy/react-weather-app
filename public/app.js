class Greetr extends React.Component {
    render() {
        var name = this.props.name;
        var message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
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