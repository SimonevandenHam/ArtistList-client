import React from "react";
import { connect } from "react-redux";

import { searchArtistResult } from "../../store/addConcert/action";

class SearchArtistForm extends React.Component {
  state = {
    artist: null
  };

  onSubmit = event => {
    event.preventDefault();
    console.log("ARTIST STATE", this.state);
    this.props.searchArtistResult(this.state.artist);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  displayArtistSearchResult = () => {
    console.log("SEARCH RESULTTT", this.props.artistSearchResults);
    if (this.props.artistSearchResults === null) {
      return "can not find this artist";
    } else if (this.props.artistSearchResults.length === 0) {
      return "please enter a artist";
    } else {
      return (
        <div>
          {this.props.artistSearchResults.map(artist => {
            let availableImage = null;
            if (artist.images.length > 0) {
              availableImage = <img src={artist.images[2].url} />;
            } else {
              availableImage = <img src="/media/artistPlaceholder.png" />;
            }
            console.log(artist);
            return (
              <li key={artist.id}>
                <p>{availableImage}</p>
                <p>{artist.name}</p>
                <button>add artist</button>
              </li>
            );
          })}
        </div>
      );
    }
  };

  render() {
    //1 hier checken of artistSearchResults leeg is of al een array met resultaten is
    //2. zo ja, verander die array met behulp van map in divs met daarin plaatjes + artiest naam + button
    //3. zo nee, zorg dat die variabele een null waarde heeft
    //4. laat die variable in de return onder het formulier zien
    console.log("ARTISTSSS", this.props.artistSearchResults);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            type="text"
            required="required"
            name="artist"
            placeholder="Artist"
            value={this.state.artist}
          ></input>

          <button type="submit">search for artist</button>
        </form>
        {this.displayArtistSearchResult()}
      </div>
    );
  }
}

//get information from the store
const mapStateToProps = state => ({
  artistSearchResults: state.artistSearchResults
});

export default connect(mapStateToProps, { searchArtistResult })(
  SearchArtistForm
);
