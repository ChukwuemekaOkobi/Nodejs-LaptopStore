const http = require('http'); 
const laptopController = require('./Controller/LaptopController'); 
const url = require('url');



const PORT = process.env.PORT || 5001;

const server = http.createServer(async (request, response) =>
{   
    const urldetails =  url.parse(request.url,true); 

    const pathName = urldetails.pathname;

    if(pathName === '/' || pathName.match(/\/products$/))
    {
         laptopController.getLaptops(response);
    }
    else if(pathName.match(/\/products\/[0-9]+$/))
    {
        const id = pathName.match(/[0-9]+$/)[0];
        
        laptopController.getlaptop(response,id); 
        
    }
    else if(pathName.match(/\.(jpg|jpeg|png|gif|json|html|css|js)$/))
    {
    
        laptopController.returnFile(response,pathName); 
       
    }
    else 
    {
        laptopController.pageNotFound(response); 
    }



});

server.listen(PORT, () => { console.log("Server listening on PORT ", PORT)});