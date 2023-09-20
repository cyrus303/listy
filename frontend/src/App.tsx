import {useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import Cards from './components/Cards';

function App() {
  const [searchText, setSearchText] = useState<string>('');
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    if (searchText !== '') {
      const searchEncoded = encodeURI(searchText);
      console.log(searchEncoded);
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchEncoded}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGFjM2MyODI2Y2ZhN2E4NTg5MDdmYjUyNzYwNDRhNyIsInN1YiI6IjY1MDg4YTA3ZmEyN2Y0MDE0ZWIyNzQ5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wSiNaFkW_FZNJTq3Rsk64PIOU0leckacxK8JKB35Jb8',
        },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          setMovieData((prev) => [...prev, json]);
        })
        .catch((err) => console.error('error:' + err));
    }
  }, [searchText]);

  return (
    <>
      <Header />
      <SearchBox setSearchText={setSearchText} />
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          margin: '2rem',
        }}
      >
        {movieData.map((element) => (
          <Cards data={element} />
        ))}
      </div>
    </>
  );
}

export default App;
