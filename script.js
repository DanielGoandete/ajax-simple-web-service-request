
function fetchData(){
    //website that i need to get os post my data
    fetch('https://thatsthespir.it/api')
        .then(response =>{
            if(!response.ok){
                //in case of error wil stop in here and not to do all the code!
                throw Error('ERROR');
            } 
            return response.json();    
        })
       .then(data =>{
           console.log(data);
           const quote = data.quote;
           const author = data.author;
           const photo = data.photo;
           
        
           document.getElementById("text").innerHTML = quote;
           document.getElementById("photo").innerHTML = '<img src="'+photo+'" width="350px"/>';
           document.getElementById("author").innerHTML = author +'<br><br>';
        }) 
       .catch(error =>{
        document.getElementById("error").innerHTML = '<h1 style="text-align: center;background-color:red">ERROR TRY AGAIN!</h1>';
       });

}

fetchData();
   
