class Greetr extends React.Component {
    render() {
        var name = this.props.name;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>This is from the component.</p>
            </div>
        );
    }
};

ReactDOM.render(<Greetr name="codemzy" />, document.getElementById('app'));