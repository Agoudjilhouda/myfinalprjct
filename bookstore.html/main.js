

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


 
