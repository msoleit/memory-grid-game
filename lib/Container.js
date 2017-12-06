import Game from "./Game";

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = { gameId: 1,
                     rows: 5,
                     columns: 5,
                     activeCellsCount: 6 };
    }

    createNewGame() {
      this.setState({ gameId: this.state.gameId + 1,
                      rows: this.state.rows + 1,
                      columns: this.state.columns + 1,
                      activeCellsCount: this.state.activeCellsCount + 1 });
    }
    render() {
    return (
        <div>
          <Game key={this.state.gameId}
          createNewGame={this.createNewGame.bind(this)}
          rows={this.state.rows} columns={this.state.columns}
          activeCellsCount={this.state.activeCellsCount} /> 
        </div>
    );
    }
   }
   export default Container;