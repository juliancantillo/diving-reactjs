var React = require('react');

// allows to do server-side rendering
var ReactDOM = require('react-dom');

var App = React.createClass({
   render: function () {
      return (
         <div>
            <h1>React is cool</h1>
         </div>
      );
   }
});

ReactDOM.render(<App />, document.querySelector('#app'));