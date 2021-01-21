
const fs  = require('fs');




function result(response, status, data,contentType = 'text/html')
{
    response.writeHead(status, {'Content-Type': contentType});

    return response.end(data);
}

function template(laptop, temp)
{
    let output = temp.replace(/%PRODUCTNAME%/g, laptop.productName); 
    output = output.replace(/%IMAGE%/g,laptop.image); 
    output = output.replace(/%PRICE%/g,laptop.price); 
    output = output.replace(/%SCREEN%/g, laptop.screen); 
    output = output.replace(/%CPU%/g, laptop.cpu); 
    output = output.replace(/%STORAGE%/g, laptop.storage); 
    output = output.replace(/%RAM%/g, laptop.ram); 
    output = output.replace(/%DESCRIPTION%/g, laptop.description); 
    output = output.replace(/%ID%/g, laptop.id); 

    return output; 
}

function readFile(filename,encode = true)
{
    if(encode)
    {
        return new Promise((resolve, reject)=> {

            fs.readFile(filename,'utf-8', (err, data) => {
                if(err)
                {
                   return reject(err); 
                }
    
                resolve(data); 
    
            });
        });
    }
    else 
    {
        return new Promise((resolve, reject)=> {

            fs.readFile(filename, (err, data) => {
                if(err)
                {
                   return reject(err); 
                }
    
                resolve(data); 
    
            });
        });
    }
 
    
}


module.exports = {readFile,template,result }