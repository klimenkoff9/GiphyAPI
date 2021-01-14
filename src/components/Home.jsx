import React, { Component } from "react";
import axios from "axios";


class SearchBar extends Component {
  constructor() {
    super();
    this.state = { gifs: [], api: "xEUeZH4bs9tqTvE8vnm0NsPMoq2iDnaI" };


  }

  async componentDidMount() {
    const link = `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.api}`;
    try {
      let gifs = await axios.get(link);
      this.setState({ gifs: gifs.data });
    } catch (error) {
      console.error(error);
    } finally {
      console.log(this.state.gifs);
    }
  }


  render() {
    return (
     <section>
        
        
     </section>
    );
  }
}

export default SearchBar;

