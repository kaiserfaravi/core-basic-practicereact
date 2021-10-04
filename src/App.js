import logo from './logo.svg';
import './App.css';

function App() {
  const players = [
    { name: 'rakib', job: 'cricketer' },
    { name: 'jakib', job: 'cricketer' },
    { name: 'makib', job: 'cricketer' },
    { name: 'lakib', job: 'cricketer' },
    { name: 'pakib', job: 'cricketer' }
  ];
  return (
    <div className="App">
      {
        players.map(player => <Player name={player.name} kaj={player.job}></Player>)
      }

    </div>
  );
}

function Player(props) {
  const styleCompo = {
    backgroundColor: 'red',
    border: '3px solid green',
    borderRadius: '20px',
    padding: '20px',
    margin: '20px'


  };
  return (
    <div style={styleCompo}>
      <h2>Name:{props.name}</h2>
      <h4>kaj:{props.job}</h4>
    </div>
  )
}
/* 
 <ul>
        {
          players.map(Player => <li>{Player}</li>)
        }
      </ul>
      <Player name={players[0]} job="cricketer" ></Player>
      <Player name={players[1]} job="cricketer" ></Player>
      <Player name={players[2]} job="cricketer" ></Player>
      <Player name={players[3]} job="cricketer" ></Player>
*/

export default App;
