
const BookDetails = ({selectedBook}) => {

    if (!selectedBook ) {
        return (
            <></>
        )
    }
    
    return (
      <>
        <div className="selectedBook">
          <img className="selectedBookImg" src={selectedBook.formats["image/jpeg"]} alt=""/>
          
            <div className="selectedBookInfo">
              <h2>{selectedBook.title}</h2>
    
            <div className="selectedBookDetails">
              <p>Author:</p>
              <p><strong>{selectedBook.authors[0].name}</strong></p>
            </div>
            <div className="selectedBookDetails">
              <p>Subject:</p>
              <p><strong>{selectedBook.subjects[0]}</strong></p>
            </div>
            <div className="selectedBookDetails">
              <p>Languages:</p>
              <p><strong>
                {   {
                     'af': "Afrikaans",
                     'sq': "Albanian",
                     'ar': "Arabic",
                     'eu': "Basque",
                     'be': "Belarusian",
                     'bg': "Bulgarian",
                     'ca': "Catalan",
                     'zh': "Chinese",
                     'hr': "Croatian",
                     'cs': "Czech",
                     'da': "Danish",
                     'nl': "Dutch",
                     'en': "English", 
                     'et': "Estonian",
                     'fo': "Faeroese",
                     'fa': "Farsi",
                     'fi': "Finnish",
                     'fr': "French",
                     'de': "German",
                     'el': "Greek",
                     'he': "Hebrew",
                     'hi': "Hindi",
                     'hu': "Hungarian",
                     'is': "Icelandic",
                     'id': "Indonesian",
                     'ga': "Irish",
                     'it': "Italian",
                     'ja': "Japanese",
                     'ko': "Korean",
                     'ku': "Kurdish",
                     'lv': "Latvian",
                     'lt': "Lithuanian",
                     'mk': "Macedonian",
                     'ml': "Malayalam",
                     'ms': "Malaysian",
                     'mt': "Maltese",
                     'no': "Norwegian",
                     'pl': "Polish",
                     'pt': "Portuguese",
                     'pa': "Punjabi",
                     'rm': "Rhaeto-Romanic",
                     'ro': "Romanian",
                     'ru': "Russian",
                     'sr': "Serbian",
                     'sk': "Slovak",
                     'sl': "Slovenian",
                     'sb': "Sorbian",
                     'es': "Spanish",  
                     'sv': "Swedish",
                     'th': "Thai",
                     'ts': "Tsonga",
                     'tn': "Tswana",
                     'tr': "Turkish",
                     'uk': "Ukrainian",
                     'ur': "Urdu",
                     've': "Venda",
                     'vi': "Vietnamese",
                     'cy': "Welsh",
                     'xh': "Xhosa",
                     'ji': "Yiddish",
                     'zu': "Zulu"
                    }[selectedBook.languages[0]]
                }
                </strong></p>
            </div>
            </div>
        </div>
      </>
    );
}

export default BookDetails