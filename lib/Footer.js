class Footer extends React.Component {
  remainingCount() {
    if (this.props.gameState !== "recall") {
      return null;
    }
    return (
      <div className="remainig-count">
        {this.props.activeCellsCount - this.props.correctGuesses.length}
      </div>  
    );
  }

  playAgainButton() {
    if (~["won", "lost"].indexOf(this.props.gameState)) {
      return (
        <button className="play-again-button"
                onClick={this.props.playAgain}>
          Play Again
          </button>
      );
    }
  }

  render() {
    return (
      <div className="footer">
        <div className="hint">
          {this.props.hints[this.props.gameState]}
        </div>
        {this.remainingCount()}
        {this.playAgainButton()}
        <br/>
        Total Score = {this.props.score}
      </div>
    );
  }
}
Footer.defaultProps = {
  hints: {
    ready: "Get Ready",
    memorize: "Memorize",
    recall: "Recall",
    won: "Well Played",
    lost: "Game Over"
  }
}

export default Footer;