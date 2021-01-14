import React, { Component } from "react";
import axios from "axios";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: "",
        }
    }

    handleSubmit = async (e) => {
    e.preventDefault();
    const link = `https://api.giphy.com/v1/gifs/search?q=${this.state.searchInput}&api_key=xEUeZH4bs9tqTvE8vnm0NsPMoq2iDnaI`;
    try {
      let gifs = await axios.get(link);
      this.props.updateState(gifs.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      searchInput: value,
    });
  };

    render() {
        return(
        <form>
          <div>
            <label htmlFor="Search GIF">Search GIF </label>
            <input
              name="searchInput"
              placeholder="Search GIF"
              value={this.state.searchInput}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        </form>
        )
    }
}

export default SearchForm;