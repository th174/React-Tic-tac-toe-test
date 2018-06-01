import React, {PureComponent} from 'react'
import Tile from "./Tile";

export default class Board extends PureComponent {
    render() {
        return (
            <table style={{margin: 'auto'}}>
                <tbody>
                {this.props.tiles.map((row, i) =>
                    <tr>
                        {row.map((tile, j) =>
                            <td>
                                <Tile
                                    row={i}
                                    col={j}
                                    symbol={this.props.symbols[this.props.tiles[i][j]]}
                                    onClick={this.props.onClick}
                                />
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}
