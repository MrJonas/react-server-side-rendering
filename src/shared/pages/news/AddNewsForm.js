import React from "react";
import "./NewsList.css";

export default class AddNewsForm  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        };
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render() {
        return <div>
            <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
            <button onClick={() => this.props.addNews(this.state.inputValue)}>Pridėti</button>
        </div>
    }
}
