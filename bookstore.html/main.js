/*function minuteConvert(a){
    return a*60
  }
  
  console.log(minuteConvert(3));
  
  
  
  
  //Return the Area of a rectangle:
  function area(a,b){
    return (a*b)
  }  
  console.log(area(6,3))
  
  
  // The next number:
  
  function  next(a){
    return a+1
  }
  console.log(next(6));
  
  //Football Points: 
  function football(a,b,c){
    return a+b+c;
  }
  console.log(football(1,2,1))
  
  
  
  //Between 100 AND 200:
  
  function between(a){
    if(a>=100 || a<= 200){
      return true;
    } else{
      return false
    }
  }
  console.log(between(150))

  //Equality check: 
  function equalityCheck(a,b){
    if(a===b ){
        return true
    }
    else{
        return false
    }
  }
  console.log(equalityCheck(10,"10"))
  
  //Compare Strings by Count of Characters: 


 /* function compareStrings(arr,b) { 
    let i,j ;
    for(i=0;i<length.arr;i++){
     arr[i] =arr[i]
    }
    for(j=0;j<length;j++){
      b[j]=b[j];
    }
    if(i>j){
       return arr()
    }
   else{
       return b()
   }
 }
 console.log(compareStrings("Go My Code","test"))*/
  

  //Max of an array: 
  /*
  function  maxArray(arr){
    var j=0;
    
    for(var i in arr){
        if(arr[i]>j){
            j=arr[i];
        }
    }
   return j;
  }
  console.log(maxArray([4,2,20,24,18])) 
   
//  Convert a number to a month: 
function monthName(n){
    switch (n) {
        case 1:
            console.log("January")
            break;
            case 2: console.log("	February")
            break;
            case 3: console.log("	March")
            break;
            case 4: console.log("	aapril")
            break;
            case 5: console.log("	may")
            break;
           
            case 6: console.log("june")
            break;
            case 7: console.log("july")
            break;
            case 8: console.log("August")
            break;
            case 9: console.log("	September")
            break;
            case 10: console.log("	October")
            break;
            case 11: console.log("November")
            break;
            case 12: console.log("December")
            break;
          
        default: console.log("non")
            break;
    }
}
console.log(monthName(3)) 



//Factorial:

function factorial(n){
    var i=1;
    var s=1;
    while(i<=n){
        s=s*i
      i++;
    }
  return s;
}
console.log(factorial(4))

//Absolute Sum: 
function absoluteSum(arr){
    var s=0;
    for(var i in arr){
     s=s+arr[i];
    }
  return s;
}
console.log(absoluteSum([2, -1, 4, 8, 10]))
*/
/*
const searchWrapper = document.querySelector(".search-input")

const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if user press any key and release 
inputBox.onkeyup = (e)=>{
  let userData =e.target.value;//user enter data 
  let emptyArray = [];
  if(userData){
    emptyArray = suggetions.filter((data)=>{
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArray = emptyArray.map((data)=>{
      return data = '<li>' + data + '</li>' ;
    }
    );
    searchWrapper.classList.add("active")//show autocomplete
    showsuggestions(emptyArray);
    let alllist =suggBox.querySelectorAll("li");
    for(let i=0;i<alllist.length;i++){
      //adding onclickattribute in all li tag
      alllist[i].setAttribute("onclick","select(this");
    }
  }else{
    searchWrapper.classList.remove("active")
  }
}
function showsuggestions(list){
  let listData;
  if(!list.length){

  }else{
    listData=list.join('');
  }
  suggBox.innerHTML = listData;
}

function select(element){
  let selectUserData = element.textContent ;
  inputBox.value = selectUserData //passing user selected data
  console.log(selectUserData);
}
*/


// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;
// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>${data}</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}
function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}





let image = document.getElementById("imagee");

 let images = ['forup.jpg', 'forup-1.jpg' ,'forup-2.jpg' ,'forup-3.jpg' ];
 setInterval(function(){
  let random = Math.floor(Math.random() * 4);
   image.src=images[random];
  
 },700);


 