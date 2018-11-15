import React, {Component} from 'react';

class Example extends Component {
    render() {
        return (
            <div>
                ok
                {this.children}
            </div>
        );
    }
}

export default Example;