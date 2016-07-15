var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

class ErrorModal extends React.Component {
    
    componentDidMount() {
        var {title, message}= this.props;
        var modalMarkup = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
              <h4>{title}.</h4>
              <p>{message}</p>
              <p>
              <button className="button hollow expanded" data-close="" aria-label="Close" type="button">
                Close
              </button>
              </p>
            </div>
        );
        
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
    
    render() {
        
        return (
            <div>
            </div>
        );
    }
    
}

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
    title: "Error"
};

module.exports = ErrorModal;