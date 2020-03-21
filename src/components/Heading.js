import React, { Component } from 'react'

export default class Heading extends Component {
    render() {
        return (
            <div className="heading">
                <h1 className="font-weight-bold">{this.props.text}</h1>
                <hr className="horizontal-line-heading"/>
            </div>
        )
    }
}
