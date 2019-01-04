import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor (props) {
        super(props)
        this.state = { hasError: false }
    }
    /* componentDidCatch: new lifecyle method in React16 => try/catch in Java*/
    componentDidCatch (error, info) {
        this.setState({ hasError: true })
    }

    render () {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>
    }

    /*NB:  Remember that children is anything ErrorBoundary is enclosed with */
    return this.props.children
  }
}

export default ErrorBoundary

