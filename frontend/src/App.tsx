import {useState} from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';

function App() {
  const [searchText, setSearchText] = useState<string>('');
  const [movieData, setMovieData] = useState([]);

  console.log(searchText);

  return (
    <>
      <Header />
      <SearchBox setSearchText={setSearchText} />
    </>
  );
}

export default App;
