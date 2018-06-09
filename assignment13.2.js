/*fetch method accepts return data after concatenation of the https://api.github.com/users/pradeepkrishnarao value is passed to Promise.resolve or Promise.reject to return data.*/
fetch('https://api.github.com/users/pradeepkrishnarao').then(response => { 
    if(response.ok){    
            let data = response.json();
            return Promise.resolve(data);
    }else{
            return Promise.reject({
            status: response.status,
            statusText: response.statusText
        })
}
}).then(function(data){ // fetch method data is the outcome of the Promise result of asynchronous operation.
                console.log(data); //log the data
                return "Success";
    }).catch(error => { //catch error displays system generated error message of the promise asynchronous operation. 
            if(error.status == 404){
                console.log("Input user name is incorrect, 404 error");
                return "Input user name is incorrect, 404 error";
        }else{
                console.log(error); //log the data
                return "Request failed";
        }
    });
