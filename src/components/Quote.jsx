
export const Quote = ({ a, q, i}) => {

/**
   * Destructuring the data object. 
   * Double negation:
   * if data == undefined => !data == false => !!data == true.
   * So, if there is data, show the first position of the info [0]:
  **/
//   const { author, quote } = !!data && data[0];
//   console.log(!!data)   //true


  return (
        <blockquote>
            {/* <img href={ i } src='Quote image'></img> */}
            <h1>{ q }</h1>
            <h3>{ a }</h3>
        </blockquote>
  )
}
