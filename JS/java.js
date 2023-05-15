// 1 -- vazifa -----------------------------------------------------------------------------------------

// let numbers = [55,39,21,2,-10]
// function teskariTartib(){
//     for (let i = numbers.length - 1 ; i >=0 ; i--){
//         console.log(numbers[i]);
//     }
// }
// teskariTartib()



// 4 -- vazifa ------------------------------------------------------------------------------------------

// let maqola = {
//     id: 1,
//     sarlavha: "Soff Study",
//     tavsifi: "O'quv markaz",
//     yuklangan_sana: "10-05-2023",
//     rasm_manzili: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flthub.ubc.ca%2Ffiles%2F2021%2F06%2FGitHub-Logo.png&tbnid=ECqRgpVdvbaoQM&vet=12ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygDegUIARDFAQ..i&imgrefurl=https%3A%2F%2Flthub.ubc.ca%2Fguides%2Fgithub-instructor-guide%2F&docid=TFZCaK9_x2BnIM&w=3840&h=2160&q=github&ved=2ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygDegUIARDFAQ",
//     link: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2FPCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU&tbnid=9r1XlBMbu-wI3M&vet=12ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygCegUIARDDAQ..i&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.github.android%26hl%3Den_US&docid=U-aXoYxKRUkMRM&w=512&h=512&q=github&ved=2ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygCegUIARDDAQ",
//     kategoriyalar: ["Front-End" , "Back-End" , "Fullstack"]
// }


// 3 -- vazifa ---------------------------------------------------------------------------------------------

// let sonlar = [2 , 10 , 15 , 4 , 55 , 77] 

// sonlar.map(son => {
//     if(son % 2==0){
//         let summa = son * 5
//         console.log(summa);
//     } else{
//         let raqam = son - 15
//         console.log(raqam)
//     }
// })


// 2 -- vazifa -----------------------------------------------------------------------------------------------------

// let array = {
//     id: 1,
//     sarlavha: "Soff Study",
//     tavsifi: "O'quv markaz",
//     yuklangan_sana: "10-05-2023",
//     rasm_manzili: "https://www.google.com/imgres?imgurl=https%3A%2F%2Flthub.ubc.ca%2Ffiles%2F2021%2F06%2FGitHub-Logo.png&tbnid=ECqRgpVdvbaoQM&vet=12ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygDegUIARDFAQ..i&imgrefurl=https%3A%2F%2Flthub.ubc.ca%2Fguides%2Fgithub-instructor-guide%2F&docid=TFZCaK9_x2BnIM&w=3840&h=2160&q=github&ved=2ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygDegUIARDFAQ",
//     link: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fplay-lh.googleusercontent.com%2FPCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU&tbnid=9r1XlBMbu-wI3M&vet=12ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygCegUIARDDAQ..i&imgrefurl=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.github.android%26hl%3Den_US&docid=U-aXoYxKRUkMRM&w=512&h=512&q=github&ved=2ahUKEwjxso3Hwvf-AhW-AxAIHZN-BlMQMygCegUIARDDAQ"
// }

// let copyInfo = []

// function copy(){
//     let copied = {
//         id: array.id,
//         sarlavha: array.sarlavha,
//         tavsifi: array.tavsifi,
//         yuklangan_sana: array.yuklangan_sana,
//         rasm_manzili: array.rasm_manzili,
//         link: array.link
//     }
//     copyInfo.push(copied)
// }
// copy()
// console.log(copyInfo);




// 6 -- vazifa --------------------------------------------------------------------------------------------------


// $.ajax('https://api.npoint.io/511e72cd83cab84374d6', {
//     success: function (response) {
//         response.map(item => {
//             let col = `
//                 <div class="col-6 mt-2">
//                     <div class="card p-3">
//                         <img src="${item.photo}" alt="">
//                         <p>${item.id}</p>
//                         <p>${item.url}</p>
//                         <p>${item.title}</p>
//                         <p>${item.categories}</p>
//                     </div>
//                 </div>
//             `
//             $('.row').append(col)
//         })
//     }
// })



// 5 -- vazifa ------------------------------------------------------------------------------------------


let works = {
    birinchi_iw: "Soff Study o’quv markaziga borish",
    ikkinchi_iw: "Sport bilan shug’illanish",
    uchinchi_iw: "Jiyanim bilan aylanish"
}


function drawTable (){
    
}
drawTable()