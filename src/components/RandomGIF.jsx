import React, { Component } from "react";
import axios from "axios";


class RandomGIF extends Component {

    handleSubmit = async (e, props) => {
    e.preventDefault();
    const link = `http://api.giphy.com/v1/gifs/random?api_key=xEUeZH4bs9tqTvE8vnm0NsPMoq2iDnaI`;
    try {
      let gifs = await axios.get(link);
      this.props.updateState([ gifs.data.data ]);
    } catch (error) {
      console.error(error);
    }
  }

    render() {
        return (
        <form>
          <div>
            <button onClick={this.handleSubmit}>Magic Random GIF</button>
          </div>
        </form>
        )
    }
}

export default RandomGIF;