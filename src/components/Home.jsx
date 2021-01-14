import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";
import SearchForm from "./SearchForm"

class Home extends Component {
  constructor() {
    super();
    this.state = { gifs: [], apiKey: "xEUeZH4bs9tqTvE8vnm0NsPMoq2iDnaI" };
  }

  async componentDidMount() {
    const link = `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.apiKey}`;
    try {
      let gifs = await axios.get(link);
      this.setState({ gifs: gifs.data.data });
    } catch (error) {
      console.error(error);
    } 
  }

    updateState = (newGifs) => {
        this.setState({
            gifs: newGifs
        })
  }

  render() {
      
    return (
      <section>
        <SearchForm 
            apiKey={this.state.apiKey}
            updateState={this.updateState}
            gifs={this.state.gifs}
        />

        {this.state.gifs.map((gif) => {
          return <Display url={gif.images.original.url} />
        })}
      </section>
    );
  }
}

export default Home;
