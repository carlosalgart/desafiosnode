function checaIdade(idade){
    return new Promise((resolve, reject) => {   
 // Minha solucao
 //     setTimeout(() => { 
 //          console.log("Um"); 
 //      }, 1000);
 //      setTimeout(() => { 
 //          console.log("Dois"); 
 //           if(idade > 18){     
 //                       return resolve();           
 //                   }else{
 //                       return reject();
 //                   }
 //       }, 2000);

//Solução do professor
      setTimeout(() => idade >= 18 ? resolve(true) : reject(false),2000);        
    });
}

   
  

async function main()   {

    try 
    {
        const idade = await checaIdade(20) 
        console.log('>18');
        
    }        
    catch(err){        
        console.log('<18');    
        
    }     

    
}

main();