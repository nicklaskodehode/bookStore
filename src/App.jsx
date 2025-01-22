import { useEffect, useState } from 'react';
import './App.css'
import BookList from './BookList';
import AutoComplete from './AutoComplete';
import BookDetails from './BookDetails';
import Header from './Header';


function App() {

  const [selectedBook, setSelectedBook] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [defaultData, setDefaultData] = useState([]);

  useEffect(() => {
    const fetchDefaultBooks = async () => {
      const url = `https://gutendex.com/books`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDefaultData(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDefaultBooks();
  }, []); 

  return (
    <div> 
      <Header/>
      <AutoComplete setSearchResults={setSearchResults} setSelectedBook={setSelectedBook}/>
      <BookDetails selectedBook={selectedBook}/>
      <BookList searchResults={searchResults} setSelectedBook={setSelectedBook} defaultData={defaultData} />     
    </div>
  );
}

export default App;