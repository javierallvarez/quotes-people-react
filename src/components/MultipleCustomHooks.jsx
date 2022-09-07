import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote, Header, Footer } from ".";


export const MultipleCustomHooks = () => {
  

  // Destructuring counter, returned in useCounter.js:
  const {   counter,
    increment,
    decrement,
    reset } = useCounter();



  const apiKey = ''
  
  const { data, isLoading, hasError } = useFetch(`https://zenquotes.io/api/quotes/${apiKey}`)

  

  /**
   * Destructuring the data object. 
   * Double negation:
   * if data == undefined => !data == false => !!data == true.
   * So, if there is data, show the first position of the info [0]:
  **/
  //const { author, quote } = !!data && data[0];
  const { a, q, i } = !!data && data[`${counter}`];


  
    return (
    <>
        <Header/>

        <article>
          {/* We pass props to Quote to destructuring there: */}
          {
            isLoading
              ? <LoadingQuote/>
              : <Quote a={ a } q={ q } i={ i }/>
          }
        </article>
        
        <div className="button-box">  

          <span></span>
          {/* button disabled when page is loading: */}
          <button 
              className="btn btn-primary"
              onClick={ () => increment() }
              disabled={ isLoading }>
              Next Quote
          </button>

          <a 
            href={`https://twitter.com/intent/tweet?text='${ q }' –${ a }–`}
            className='share'
            target="_blank"
            rel="noopener noreferrer">
              <i class="bi bi-twitter"></i>
              Share
          </a>

        </div>  
    </>    
  )
}
