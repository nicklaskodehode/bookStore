
export const AutoComplete = ({setSearchResults, setSelectedBook}) => {
   
    let debounceTimeout; 

        const fetchSearchedBooks = async (value) => {
        
        if (value.length > 2) {
            try {
            let url = `https://gutendex.com/books?search=${value}`;
            const response = await fetch(url);
            const data = await response.json();
            setSearchResults(
                data.results.filter((books) => 
                books.title.toLowerCase().includes(value.toLowerCase())
                )
            );
            } catch (error) {
            console.error(error);
            }
        } else {
            setSearchResults([]);
        }
        };

        const handleInputTitle = (e) => {
        const value = e.target.value;
        
        clearTimeout(debounceTimeout);
        
        debounceTimeout = setTimeout(() => {
            setSelectedBook("");
            fetchSearchedBooks(value);
        }, 2000);
        };


    const fetchSearchedAuthor = async (value) => {
        if (value.length > 2) {
          try {
            let url = `https://gutendex.com/books?search=${value}`;
            const response = await fetch(url);
            const data = await response.json();
            setSearchResults(
              data.results.filter((books) => 
                books.authors?.[0]?.name.toLowerCase().includes(value.toLowerCase())
              )
              
            );
          } catch (error) {
            console.error(error);
          }
        } else {
          setSearchResults([]);
        }
      };
  
      const handleInputAuthor = (e) => {
        const value = e.target.value;
        
        clearTimeout(debounceTimeout);
      
        debounceTimeout = setTimeout(() => {
            setSelectedBook("");
            fetchSearchedAuthor(value);
        }, 2000);
      };

  return (
    <div className="autoContainer">
      <div className="inputContainer">
        <label name="title">Search Book Title</label>
        <input name="title" type="text" placeholder="Search book title..." onChange={handleInputTitle} />
      </div>
      <div className="inputContainer">
        <label name="author">Search Book Author</label>
        <input name="author" type="text" placeholder="Search author..." onChange={handleInputAuthor}/>
      </div>
    </div>
  );
}

export default AutoComplete;