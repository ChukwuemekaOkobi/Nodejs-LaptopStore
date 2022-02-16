const fs = require('fs'); 
const path = require('path'); 


//get data via import method
let laptopData = require('../data/data.json');

//get data via sync method  
laptopData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf-8'));


//get data view async return promise 
function getLaptopData(){
     // added some comments
     return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname,'../data/data.json'), 'utf-8', async (err,data) => {
            if(err)
            {
                console.log(err);
                reject(error);
            }
        
            resolve(JSON.parse(data));
        });
        
     });
}


function findLaptopById(id)
{
    return new Promise((resolve, reject) => {

        const laptop = laptopData.find(l => l.id === id); 

        resolve(laptop);
    });
 
}

module.exports = {getLaptopData, findLaptopById}