import React from 'react'

export default class JumpToTurn extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div>
                <label>Go back to turn: </label>
                <select onChange={event => this.setState({value: event.target.value})}>
                    {[...Array(this.props.turnNumber).keys()].map((i) => <option value={i}>Turn {i + 1}</option>)}
                </select>
                <button onClick={(e) => {
                    this.props.onSubmit(this.state.value);
                    e.preventDefault();
                }}>Go
                </button>
            </div>
        )
    }
}