import React from "react";

export default class AddArtistForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            onChange={this.props.onChange}
            type="text"
            required="required"
            name="artist"
            placeholder="Artist"
            value={this.props.values.artist}
          ></input>

          <button type="submit">+ add another artist</button>
        </form>
      </div>
    );
  }
}
