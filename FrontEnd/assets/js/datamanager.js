async function retriveContent(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
export  default retriveContent