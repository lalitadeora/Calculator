let buttons = document.querySelectorAll("button");

let box = document.querySelector(".inp");

let main = document.getElementById("main");
// Make arry..
let buttonsarr = Array.from(buttons);
let light = document.getElementById("light");

let result = "";
let operatorr = "";
let firstv = "";
let secondv = "";


  buttonsarr.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let valu = e.target.innerHTML;
    
    if (valu == "c") {
      box.innerHTML = "";
      firstv = "";
      secondv = "";
      operatorr="";
      return;



    } 
    else if (valu == "#") {
      let randomcolor = "#" + Math.floor(Math.random() * 16000000).toString(16);
      main.style.background = randomcolor;
      box.innerHTML=none;
      return;
    }

    if (valu == "+" || valu == "-" || valu == "*" || valu == "/") {
      operatorr = valu;
      box.innerHTML += operatorr;
      return;

      
    } 
    
     else if (valu == "=") {
      let n1 = parseFloat(firstv);
      let n2 = parseFloat(secondv);


      if (operatorr == "+") {
        result = n1 + n2;
       
      } else if (operatorr == "-") {
        result = n1 - n2;
        
      } else if (operatorr == "*") {
        result = n1 * n2;
        
      } else if (operatorr == "/") {
        result = n1 / n2;
        
      }
      box.innerHTML +=   " =  "   + result;


      firstv  = result.toString();
      secondv  ="";
      operatorr ="";
      return;
    }
    if (operatorr==="")
    {
        firstv   +=valu;
        box.innerHTML =   firstv
    }
    else{
        secondv +=    valu;
        box.innerHTML += valu;
    }
  });
});

















// buttonsarr.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       result = eval(result);
//       box.innerHTML = result;
//     } else if (e.target.innerHTML == "c") {
//       result = " ";
//       box.innerHTML = result;
//     } else if (e.target.innerHTML == "#") {
//       let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//       // Apply color
//       main.style.backgroundColor = randomColor;
//     } else {
//       result += e.target.innerHTML;
//       console.log(result);
//       box.innerHTML = result;
//     }
//   });
// });
