import React, { Component } from 'react'

export class MarkdownPanel extends Component {

    textChanged = (e) =>{
        this.props.textChanged(e.target.value);
    }
    
    render() {
        return (
            <div>
                <textarea
                    style={this.textareaStyle}
                    onChange={this.textChanged}
                    defaultValue = {this.props.text}>
                </textarea>
            </div>
        )
    }

    textareaStyle = {
        width: '100%',
        resize: 'none',
        height: '60vh'
    }
}

export default MarkdownPanel
