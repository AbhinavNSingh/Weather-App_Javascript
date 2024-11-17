// Asynchronous program

// console.log("Start");
// setTimeout(function() {
//   console.log ("How are you doing?")

//   }, 5000);

// console.log("End")

//Callback function

// function loadscript (src, Callback){
// var script = Document,createElement ("script");
// script.src = src;
// document.body.appendChild(script);


// }

const datas=[
    {name:"Abhi", Profession: "Recruiter"}
    {name:"Anshi", Profession: "Recruiter"}
]

function getdatas(){
    setTimeout(()=>{
        let output=:";"
      datas.forEach(data, index)=>{
    output+= '<li>${data.name}</li>'
      }
    }, 2000);
}
getdatas();

