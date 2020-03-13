import React from "react";
import TheUserInteractionCycle from "./svg/TheUserInteractionCycle.svg";
import TheEventEffectProcessingModel from "./svg/TheEventEffectProcessingModel.svg";

interface Props {}

class App extends React.Component<Props> {
  render() {
    return (
      <div id="root">
        <header>
          <h1>The Notebook of Alex Yuly</h1>
          <h2>👋 Hi, there! I build software and write about it.</h2>
        </header>
        <main>
          <section>
            <h1>
              <a href="#2020-03-12">
                Software Development Should Focus On User Interactivity
              </a>
            </h1>
            <p className="published-time">
              Published by Alex Yuly on{" "}
              <time dateTime="2020-03-12">March 12, 2020</time>.
            </p>
            <p>
              The core of any software application is user interactivity.
              Ideally, software development should focus on optimizing user
              interactions with hardware, namely the Intent and View of the
              User. Software development should avoid overly optimizing the
              design of the Model, a technical concern that is secondary to the
              main goal of delivering a product to users based on their
              feedback.
            </p>
            <p>
              The cycle of user interaction flows from the User, to the Intent,
              to the Model, to the View, and finally back again. The interaction
              of User, View, and Intent is material, while that of Model, View,
              and Intent is virtual, taking the form of data.
            </p>
            <figure>
              <a href={TheUserInteractionCycle} target="_blank">
                <img
                  src={TheUserInteractionCycle}
                  alt="Figure 1: The User Interaction Cycle"
                />
                <figcaption>Figure 1: The User Interaction Cycle</figcaption>
              </a>
            </figure>
            <p>
              The Intent represents a bridge from material action to virtual
              reaction, through inputs from the material world to the virtual
              system. For example, the Intent may be expressed as the physical
              motion of a mouse clicked, a command spoken into a microphone, or
              an image captured by a camera.
            </p>
            <p>
              Just the inverse, the View represents a bridge from virtual action
              to material reaction, through outputs from the virtual system to
              the material world. For example, the View may be expressed as
              pixels on a monitor, sounds from a speaker, or the physical motion
              of a machine.
            </p>
            <p>
              These same concepts apply whether the User is a human or a
              machine: For example, two computers communicating across a network
              interface are still bound by the provisions of User, Intent,
              Model, and View. The User represents any subject with the power to
              make some object (the Model) produce a desired result.
            </p>
            <p>
              User interaction is a cycle, but cycles are hard to reason about.
              So, computer programmers write linear code, like a sequence of
              procedural statements, and hierarchical code, like a tree of
              function calls. These two techniques are complementary: An
              algorithm is best expressed with a procedure, while data is best
              expressed with a hierarchy.
            </p>
            <p>
              Ideally, a programming language should strive to balance these two
              concerns, which are often at odds:
            </p>
            <ol>
              <li>
                directly representing the cyclic nature of user interactivity;
              </li>
              <li>
                facilitating intuitive developer comprehension and expression.
              </li>
            </ol>
            <p>
              It is possible to balance the reality of cyclic interactivity with
              a more expressive programming model by breaking cycles into linear
              sections. The execution of an application can be represented as a
              many-to-many relationship between a set of events and a set of
              effects. The relationship consists of directed paths for dataflow
              from an event to an effect. An event represents data input from
              some hardware, while an effect represents data output to some
              hardware.
            </p>
            <figure>
              <a href={TheEventEffectProcessingModel} target="_blank">
                <img
                  src={TheEventEffectProcessingModel}
                  alt="Figure 1: The Event-Effect Processing Model"
                />
                <figcaption>
                  Figure 2: The Event-Effect Processing Model
                </figcaption>
              </a>
            </figure>
            <p>
              In a typical application, the Intent is represented as events,
              each of which causes an effect that updates the state of the
              Model. Updating the Model is represented as an event, which causes
              an effect that renders the View. In turn, the User responds to the
              View by recycling the Intent.
            </p>
            <p>
              I envision a programming language that reifies the concepts of
              event and effect, as first-class members of its syntax. Such a
              language could bridge the conceptual gap between cyclic
              interaction and linear processing.
            </p>
          </section>
          <footer>Copyright &copy; 2020 Alex Yuly</footer>
        </main>
      </div>
    );
  }
}

export default App;

// TODO Make the header hide when scrolling down past a certain point.
