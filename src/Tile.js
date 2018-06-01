import React, {PureComponent} from 'react'

export default class Tile extends PureComponent {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick(this.props.row, this.props.col);
    }

    render() {
        return (
            <div style={{margin: '10px'}}>
                <button style={{width: '90px', height: '90px', margin: 'auto', fontSize: '30px'}} onClick={this.onClick}>
                    {this.props.symbol}
                </button>
            </div>
        );
    }
}