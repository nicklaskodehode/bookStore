
const BookList = ({searchResults, setSelectedBook, defaultData}) => {

    const handleSelectedBook = (book) =>{
        setSelectedBook(book);
        window.scrollTo({top:0, behavior:"smooth"});
    } 
   return (
     <div>
       <div className="container">
         <div className="bookCard" >
           {
            searchResults.length != 0 ? (
                
            searchResults.map((book) => 
            (
             <div key={book.id} className="books" onClick={() => handleSelectedBook(book)}>
               <img src={book.formats["image/jpeg"]} alt="" />
               <h4>{book.title}</h4>
               <p>{book.authors?.[0]?.name}</p>
             </div>
            ))
            ) : (
                defaultData.map((book) => 
                    (  
                     <div key={book.id} className="books" onClick={() => handleSelectedBook(book)}>
                       <img src={book.formats["image/jpeg"]} alt="" />
                       <h4>{book.title}</h4>
                       <p>{book.authors?.[0]?.name}</p>
                     </div>
                    ))  
           )}
         </div>
       </div>
       
     </div>
   );
}

export default BookList;