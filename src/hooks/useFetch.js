import { useState } from "react";
import { useEffect } from "react"


// When the url changes, useEffect is activated:
export const useFetch = ( url ) => {


  const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: null
  });


  /**
   * We're using the fetch API to make a request to the 
   * url we defined earlier. We're then using the
   * await keyword to wait for the response from the server.
   * Once we get the response, we're using the
   * await keyword again to wait for the response to be converted to JSON:
   */
  const getFetch = async () => {

    // Firsr, destrtcr and property to true:
    setState({
      ...state,
      isLoading: true
    })

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)

    setState({
      // data: data, // = to:
      data,
      isLoading: false,
      hasError: null
    })
  }


  useEffect(() => {
    getFetch();
  }, [url]);



  // return an object:
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
