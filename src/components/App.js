import React from "react";
import Header from "./Header";
import CotestPreview from "./ContestPreview";

class App extends React.Component {
  state = {
    pageHeader: "Naming Contests!",
    contests: this.props.initialContests,
  };
  componentDidMount() {}
  componentWillUnmount() {
    // clean timers, listeners
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <CotestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
