import logo from './logo.svg';
import './App.css';

function App() {
  const langs = ['JSX', 'React', 'Next'];
  return (
    <div>
      <h1>Hello React</h1>
      <p>My languages</p>

      <ul>
        {langs.map((lang) => {
          return <li>{lang}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
