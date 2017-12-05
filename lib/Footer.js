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
  render() {
    return (
      <div className="footer">
        <div className="hint">
          {this.props.hints[this.props.gameState]}
        </div>
        {this.remainingCount()}
      </div>
    );
  }
}
Footer.defaultProps = {
  hints: {
    ready: "Get Ready",
    memorize: "Memorize",
    recall: "Recall"
  }
}

export default Footer;