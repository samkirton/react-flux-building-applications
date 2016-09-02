# pluralsight.com | course=react-flux-building-applications

=== Lesson 1 ===

# install gulp, gulp-connect, gulp-open
npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0

# install browserify, reactify, vinyl-source-stream
npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0

# install bootstrap, jquery, gulp-concat
npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0

# install gulp-eslint
npm install --save gulp-eslint@0.15.0

# install react, react-router, flux
npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3


=== Lesson 3 ===

# install loadash
npm install --save lodash

=== Lesson 5 ===

# install toastr
npm install --save toastr@2.1.0

=== Lifecycle methods ===

# componentWillMount
When
- Before initial render, both client and server

Why
- Good spot to set initial state

# componentDidMount
When
- After render

Why
- Access DOM, integrate with frameworks, set timers, AJAX requests

# componentWillReceiveProps
When 
- When receiving new props, Not called on initial render. (When properties has changed)

Why
- Set state before a render.

# shouldComponentUpdate
When 
- Before render when new props or state are being received.
- Not called on initial render
- When the component does not need to render when the date changes

Why
- Performance. Return false to void unnecessary re-renders.

# componentWillUpdate
When 
- Immediately before rendering when new props or state are being received.
- Not called on initial render.

Why
- Prepare for an update

# componentDidUpdate
When 
- After component's updates are flushed to the DOM.
- Not called for the initial render.

Why
- Work with the DOM after an update

# componentWillUnmount
When 
- Immediately before component is removed from the DOM

Why
- Clean up