import React, { Component } from 'react';

export default class Select extends Component {
    renderOptions(options) {
        let children = [];
        children.push(
            <option key={0} value={""}>Selecione</option>
        );
        options.forEach( (e,i) => {
            if (typeof e == 'object')
                children.push( 
                    <option key={i+1} value={ e.name }>
                        { e.name }
                    </option> );

            else
                children.push( 
                    <option key={i+1} value={ e }>
                        { e }
                    </option> );   
        });
        return children;
    }

    render () {
        return (
            <div className="form-group">
                { this.props.title }
                <select  className="form-control" name={ this.props.name } onChange={ this.props.onChange } >
                    { this.renderOptions(this.props.options) }
                    { this.props.children }     
                </select>
            </div>
        );
    }
}