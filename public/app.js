class Greetr extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
            </div>
        );
    }
};

ReactDOM.render(<Greetr />, document.getElementById('app'));