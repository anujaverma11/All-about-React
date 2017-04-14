React is a Javascript library for building user interfaces. It is also considered as 'V' in MVC.
React was built to solve one problem: building large applications with data that changes over time.

Why React?

- React is compose-able, so the application is broken down in small pieces of reusable components or module
- React interacts with a virtual DOM and eliminates the concept of DOM manipulation
- React syntax is declarative it updates the view as you code.

For working with React following libraries need to be added:
```
   <!-- React -->
    <script src="https://fb.me/react-0.14.1.min.js"></script>
    <script src="https://fb.me/react-dom-0.14.1.min.js"></script>

```

JSX has been ruled out so we can convert JSX code using Babel tool or NPM react-tools.

#### First React Component

Define a variable "HelloWorld" with React.createClass. Define render function and return the component.
As it is using JSX, can write HTML code.

React.render(<component name/>, location)

```
<script type="text/jsx">

      var HelloWorld = React.createClass({
        render: function() {
          return (
                  <div>
                    <h1>Hello {this.props.name}!</h1>
                  </div>
          );
        }
      });

      React.render(<HelloWorld name="Sandy"/>, document.getElementById('example'));
</script>
```

Using Babel Try Babel online: https://babeljs.io/repl/ code can be converted from JSX to Javascript

```
render: function render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Hello ",
        this.props.name,
        "!"
      )
    );
  }
```











