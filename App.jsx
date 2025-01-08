import './App.css';
import { TwCard } from './TwCard';
import { SearchUser } from './SearchUser';

function App() {

  return (
    <>
  <div className='inputs'>
    <input className="usernam3" type="text" placeholder='Search for a username...'></input>
    <input className="nam3" type="text" placeholder='Write their name...'></input>
    <button><i class="fa-solid fa-magnifying-glass" onClick={SearchUser}></i></button>
  </div>
    <div className='App'>
      <TwCard name="Olivia Rodrigo" />
      <TwCard username="ariana_marsan" name="ari;" />
      <TwCard username="emiliaclarke" name="Emmie" />
    </div>
    </>
  );
}

export default App;
