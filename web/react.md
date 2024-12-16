# Contents
- [HTML, CSS, JS](#html-css-js)
- [Fragments](#fragments)
- [List Rendering](#list-rendering)
- [Conditional Rendering](#conditional-rendering)
- [public Directory](#public-directory)
- [src Directory](#src-directory)
- [Class Components](#class-components)
  - [Class Definition](#class-definition)
  - [State Management](#state-management)
  - [Props](#props)
- [Lifecycle](#lifecycle)
  - [Mounting](#mounting)
    - [Constructor](#constructor)
    - [static getDerivedStateFromProps](#static-getderivedstatefromprops)
    - [render()](#render)
    - [componentDidMount](#componentdidmount)
  - [Updating](#updating)
    - getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
  - [Unmounting](#unmounting)
    - componentWillUnmount()
- [Hooks](#hooks)
    - [useState](#usestate)
    - [useEffect](#useEffect)
    - [Custom Hook](#custom-hook)
- [Controlled Component](#controlled-component)
- [Unontrolled Component](#uncontrolled-component)
# HTML, CSS, JS
## HTML
React uses JSX(Javascript XML), a syntax extension for javascript, which looks similar to HTML but allows you to embed HTML within javascript.

Although JSX looks like javascript, it's not. JSX gets compiled to javascript, specially to `React.createElement` calls, which is why it can only be used within a React environment.

__Differences From HTML:__
- `className` instead of `class`
- camleCase for Attributes
- self-closing tags

### JSX
JSX is a syntax extension for JavaScript that resembles HTML. It allows you to write elements and components in a more readable and familiar way. JSX is neither a string nor HTML; it is JavaScript that gets compiled to `React.createElement()` calls by Babel (a JavaScript compiler).

__How JSX Works:__
JSX is converted into JavaScript function calls. For example:
```jsx
const element = <h1>Hello, world!</h1>;
```
is compiled to:
```jsx
const element = React.createElement('h1', null, 'Hello, world!');
```
### Rendering a React Element
__Example:__
```jsx
const element = <h1>Hello, world!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```
## CSS
1. __External CSS:__
Just import external css file where you want those styles. Those style from the imported files are inherit to all the child component
2. __Inline Style:__
You can apply styles directly to elements using the `style` attribute which accepts a javascript object. One curly is used as js object and another curly is used for jsx and enable js.

    For multiple css variable use `style={{...variable_1, ...variable_2}}`,you can also use `style={{...variable_1, ...{fontSize:"50px",color:"red"}}}`.

3. __Modules:__
CSS modules are locally scoped CSS files, which means the styles defined in them are only applied to the component that imports them.. This prevents global name collisions.
    - create a css file with `.module.css` extension.
        ```css
        .container{ padding: 20px; background-color:"red"; }
        ```
    - import the css file into your react component as a module and aply styles
        ```jsx
        import styles from './App.module.css'
        return( <div className={styles.container}></div>)
        ```
## Javascript
JSX allows you to embed JavaScript expressions directly within the markup. You can use any valid JavaScript expression inside curly braces `{}` in JSX.
# Fragments
It is a way to group multiple elements `without adding extra nodes` to the DOM. They allow to return multiple children from a component without the need to wrap them in an additional HTML like _div_.

__There are tow ways to use fragments:__

1. __Explict Syntax:__
```jsx
<React.Fragment>
</React.Fragment>
```
2. __Shorthand Systax:__
```jsx
<></>
```
The shorthand syntax is more concise and commonly used but doesn't support `key` or other attributes.

Render method can return only one elements. So when you need to return multiple element at a time but you don't want to add extra node to the DOM, use fragment.
# List Rendering
React allows you to render lists by mapping over an array of data and returning JSX for each item in the array. The `map()` function is commonly used for this purpose.

The key prop is a special attribute that helps React identify which items have changed, been added, or removed. It should be unique among the siblings.
# Conditional Rendering
IIFE can be used inside jsx to handle conditional rendering with `if-else` logic.
```jsx
const Example = () => {
  const isLoggedIn = true;
  return (
    <>
      {(()=>{
        if(isLoggedIn){
          return <h1>Welcome Back</h1>
        }else{
          return <h1>Please Login First</h1>
        }
      })}
    </>
  );
};

export default Example;
```
# `public` Diroctory
It contains static assets that will be served directly to the browser without being preprocessed by Webpack so you can't use js imports or other advanced features here. Files in this directory are accessible via a direct URL path.
- `index.html` is the primary HTML file that serves your react application
- `static file`: any images, font, documents
- `manifest.json` is used for configuring how your react app appears when installed as a progressive web app(PWA). It defines the icons, name and other setting
- `robots.txt` tells web crawlers and robots which page to index or ignore on your site.

Everything here is copied directly to the `build` folder when you run `npm run build`. Missing files will not be called at compilation time and will be caused `404` error.
# `src` Directory
It is where all your applications components and logic reside. It contains the actual source code that Webpack will process, bundle and optimize. Unlike `public` folder, files in `src` are not accessible via a direct URL path, they need to be imported into your componets to be included in the build.
- `index.js` is the main entry point where the react app is mounted to the DOM.
- `App.js` is the root component of the application
Scripts and stylesheets get minified and bundled together to avoid extra network request. Missing file cause compoiltation error instead of `404` error
# Class Components
A component is a reusable piece of tha UI that can be thought as a building block of the application.
## Class Definition
A class component is defined as js class that `extends` `React.Component`. It must hve a `render()` method, which returns jsx to be rendered to the DOM.
```jsx
class MyApp extends Component{
    render(){
        return <h1>Hello World</h1>
    }
}
```
## State Management
Class component's have a built-in state object that can be used to store and manage data that affects the components rendering. The state can be updated using the `setState` method, which triggers a re-render of the component
```jsx
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    render(){
        return(
            <>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}
```
## Props
Props are used to pass data from a parent component to a child component and access by `this.props`.
```jsx
class MyApp extends Component{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}
```
# Lifecycle
- [__Mounting__](#mounting): [constructor](#constructor), [static getDerivedStateFromProps](#static-getderivedstatefromprops), [render](#render), [componentDidMount](#componentdidmount)
- [__Updating__](#updating): getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
- [__Unmounting__](#unmounting): componentWillUnmount
- [__Error Handling__](#error-handling): componentDidCatch
## Mounting
It refers to the process of rendering a component for the first time and adding it to the DOM

__Mounting Sequence::__
1. [Constructor](#constructor) - Initializes state and props
2. [static getDerivedStateFromProps](#static-getderivedstatefromprops) - Update state based on initial props
3. [render](#render) - create and insert virtual DOM
4. [componentDidMount](#componentdidmount) - execute any side effects
### Constructor
The constructor method is the first method called when a component is created. It’s used to set up the initial state of the component and bind event hanler. It is called before the component mount.
```jsx
constructor(props) {
  super(props);
  this.state = {
    count: 0,
  };
}
```
### static getDerivedStateFromProps()
It is used to `update the state` before the component mount `based on the props`.
```jsx
``` 
### render()
This method is required in every React component. It returns the JSX that describes the component's UI. This method is pure, meaning it should not modify the state or interact with the DOM.
```jsx
render() {
  return <div>{this.state.count}</div>;
}
```
### componentDidMount()
This method is called immediately after the component is inserted into the DOM. It’s typically used for performing side effects like data fetching, setting up subscriptions, or manually modifying the DOM.

It is executed once in a lifecycle of a component which is just after the first `render()`.
```jsx
componentDidMount() {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => this.setState({ data }));
}
```
# Hooks
Hooks are functions that allow functional components to manage state, perform side effects and other React features. 
- Call hooks at the top level.
- Call hooks in functional component.
- Can't be conditional(loop, condition, nested function).

## useState
It allow you to ad state to your compoents. When the state is updated, react automatically re-renders the component with the new state value, so the UI reflects the updated state.

State generally refers to data or properties that need tracking in an application.

It returs a pair, an array with current state and a function to update it.

When a state is updated:
  - the entire state is overwritten, to update specific item, use `spread` operator.
  - component is re-render

## useEffect
It lets you perform side effect function(data fetching, timers, DOM manipulation) in functional components. Side effect refers to any operation that affects something outside of the components scope, interacting with external system, global state.

It takes two arguments
    - a function containing the side-effect logic which run after the render is committed to the screen.
    - an array of values that the effect depend on, when these values change, the effect is re-run.

If you omit the dependency array, the effect runs after every render, similar to `componentDidMount`, `componentDidUpdate` and `componentWillMount` in class component. Omitting the dependency array or referring a state that changes inside the effect can cause infinite loop of renders.

If you pass an empty array, the effect runs only once, similar to `componentDidMount`

If you pass an array of variables, the effect runs only when those variable change.

## Custom Hook
A function that allow you to `resue` stateful logic from your components.

- Name must start with `use`.
- It can return any type of data(array, object, function etc).

# Controlled Component
A controlled component is a component that renders a form element(like an  input, textarea) whose value is controlled by React state. It gives you more control over the form elements, allowing to manage user inputs, validation and other behaviors in a predictable way.

- input are handled via callbacks(like `onChange`) that update the state
- can validate/manipulate input before updating the state
- give you real-time update
- give you full controll over the form elements
- it give your centralized data management specially when using libraries like `redux`
# Uncontrolled Component
A uncontrolled component is a component that renders a form element whose value is controlled by the DOM directly. Access the input value using a `ref` instead of state.
```jsx
import { useRef } from "react";
const UncontrolledComponent = () => {
  const name = useRef("");
  const age = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" ref={name} />
      <input type="text" name="" id="" ref={age} />
      <input type="submit" value="Submit" />
    </form>
  );
};
export default NotFound;
```
- Component doesn't manage the input's state directly, instead, it just reads the input's value when needed.
- Doesn't re-render the component when the input value changes.
- Can't track value until the form submitted.
