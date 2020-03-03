import React from "react";
import TheInteractionModel from "./svg/TheInteractionModel.svg";

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <div id="root">
        <header>
          <h1>alex yuly</h1>
          <h2>web designer</h2>
        </header>
        <main>
          <section>
            <h1>The Interaction Model</h1>
            <a href={TheInteractionModel} target="_blank">
              <img src={TheInteractionModel} />
            </a>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
