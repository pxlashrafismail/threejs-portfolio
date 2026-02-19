import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        console.error('3D Model Loading Error:', error)
        console.error('Error Info:', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ color: 'white', padding: '20px' }}>
                    <h2>3D Model failed to load</h2>
                    <p>Error: {this.state.error?.message}</p>
                    <button onClick={() => this.setState({ hasError: false })}>
                        Try Again
                    </button>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary