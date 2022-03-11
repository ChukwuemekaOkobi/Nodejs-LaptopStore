const laptopModel = require('../Models/LaptopModel');
const path = require('path')
const utils = require('../util');



function pageNotFound(response)
{
   return utils.result(response,404,"Page not found");
}

async function  getLaptops(response)
{
    try {
        let laptop = await laptopModel.getLaptopData();

        if(!laptop)
        {
            return utils.result(response,404,"Product not found");
        }
        else
        {
            let file = await utils.readFile(path.join(__dirname,'../template/cards.html'));
                
            let templist = laptop.map(el => {

                return utils.template(el,file);
            }).join('');

            let overview = await utils.readFile(path.join(__dirname,'../template/overview.html'));

            let output = overview.replace(/%CARDS%/g,templist); 

            return utils.result(response,200, output);
        }
        
    } catch (error) 
    {
        console.log(error);
    }
   

}


async function getlaptop(response, id)
{
    try {
        
        let laptop = await laptopModel.findLaptopById(id);

        if(!laptop)
        {
            return utils.result(response,404,"Product not found",);
        }
        else 
        {
          
           let file = await utils.readFile(path.join(__dirname,'../template/laptop.html'));
    
           let output = utils.template(laptop,file); 
       
           return utils.result(response,200, output);
        }
    } catch (error) {
        console.log(error);
    }


}


async function returnFile(response,pathName)
{
   let contentType = ""; 
   let filePath = ""; 

   let encode = false; 
    const imageExtenstion = pathName.match(/\.(jpg|jpeg|png|gif)$/);
    const fileextention = pathName.match(/\.(js|css|html)$/); 
    const jsonextention = pathName.match(/\.json$/); 

    if(imageExtenstion)
    {
        contentType = `image/${imageExtenstion[1]}`;
        filePath = path.join(__dirname, '../data/img',pathName); 
        encode = false;
    }
    else if(fileextention)
    {
        contentType = `text/${imageExtenstion[1]}`;
        filePath = path.join(__dirname,'..',pathName); 
        encode = true;
    }
    else if(jsonextention)
    {
        contentType = `application/json`;
        filePath = path.join(__dirname,'..',pathName); ;
        encode = true;
    }else{
        return;
    }
 

    
    try {
     
        let file = await utils.readFile(filePath,encode);

        return utils.result(response,200,file,contentType); 
    } catch (error) {
        
        console.log(error);
    }

 
}

function Sum (a , b){
    return a + b; 
}

function SubStract (a , b){
    return a -b; 
}

function GetGrade ( score ){

    if(score  > 80){
        return  "A"; 
    }
    else if(score > 64 ) 
    {
     
        return "B";
    }
    else {
        return 'F';
    }
    
}

function Status(user){
    if(user === "A"){
        return "online";
    }
    else
      return "offline";
}
module.exports = { getLaptops, getlaptop, pageNotFound, returnFile, Status, Sum, SubStract, GetGrade }




