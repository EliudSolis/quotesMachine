const QuotesBox = ({quote, color}) => {
    return (
         
        <div className={"QuoteBox" + color} >

            <div className="center-div-quote">{quote.quote}</div>
            <div className="center-div-author">{quote.author}</div>
               
        
        
        </div>

)
      
    
   
    
}

export default QuotesBox