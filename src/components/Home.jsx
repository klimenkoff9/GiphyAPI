import React, { Component } from "react";
import axios from "axios";
import Display from "./Display";

class Home extends Component {
  constructor() {
    super();
    this.state = { gifs: [], api: "xEUeZH4bs9tqTvE8vnm0NsPMoq2iDnaI" };
  }

  async componentDidMount() {
    const link = `http://api.giphy.com/v1/gifs/trending?api_key=${this.state.api}`;
    try {
      let gifs = await axios.get(link);
      console.log(gifs);
      this.setState({ gifs: gifs.data.data });
    } catch (error) {
      console.error(error);
    } finally {
      console.log(this.state.gifs);
    }
  }

  render() {
    return (
      <section>
        {this.state.gifs.map((gif) => {
          {/* const {
            url
          } = gif; */}
          return <Display url={gif.images.original.url} />
        })}
      </section>
    );
  }
}

export default Home;
