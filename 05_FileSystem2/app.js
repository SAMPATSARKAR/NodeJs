const fs = require('fs');
// fs.mkdir('tutorial',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log('folder successfully created');
//         // fs.rmdir('tutorial',(err)=>{
//         //     if(err){
//         //         console.log(err);
                
//         //     }else{
//         //         console.log('Successfully deleted the folder');
                
//         //     }
//         // })
//     }})
// creating file
        // fs.writeFile('./tutorial/example.txt','123',(err)=>{
        //     if(err){
        //         console.log(err);
                
        //     }else{
        //         console.log('Successfully created file');
        //     }
        // })
//     }
// })

// fs.unlink('./tutorial/example.txt',(err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         fs.rmdir('tutorial',(err)=>{
//             if(err){
//                 console.log(err);
                
//             }else{
//                 console.log('deleted folder');
                
//             }
//         })
// }
// });

fs.readdir('05_FileSystem2/example',(err,files)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(files);
        for(let file of files){
            // console.log(file);
            
            fs.unlink('05_FileSystem2/example/' + file,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log('Successfully deleted file');
                }
            })
        }
    }
})