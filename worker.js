function delay_counter(i,whole){
    postMessage(i);
    i=i+1;
    setTimeout(function() {
      delay_counter(i);
    }, 1000);
  
  }
  
  onmessage = (e) =>{
    delay_counter(e.data);
  }
  