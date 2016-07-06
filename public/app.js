class Greetr extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <p>This is from the component.</p>
            </div>
        );
    }
};

ReactDOM.render(<Greetr />, document.getElementById('app'));