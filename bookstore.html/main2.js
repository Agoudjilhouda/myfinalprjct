function setFormMessage(formElement , tupe, message){
    const messageElement = document.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message-success" , "form__message-error");
    messageElement.classList.add("form__message--$(type)");}
    
   function setInputError(inputElement ,message) {
       inputElement.classList.add("form__input--error");
       inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
   }
   function clearInputError(inputElement){
       inputElement.classList.remove("form__input--error");
       inputElement.parentElement.querySelector(".form__input-error-message").textContent = '';
   }


document.addEventListener("DOMContentLoaded" , () =>{
 const loginForm = document.getElementById("login");
 const creatAccountForm = document.getElementById("CreatAccount");
   document.getElementById("linkCreateAccount").addEventListener("click" ,(e) => {
       e.preventDefault();
       loginForm.classList.add("form-hidden");
       creatAccountForm.classList.remove("form-hidden");
   });
   document.getElementById("linkLogin").addEventListener("click" ,(e) =>{
   e.preventDefault();
   creatAccountForm.classList.add("form-hidden");
   loginForm.classList.remove("form-hidden")
   });
   loginForm.addEventListener("submit" , e =>{
    e.preventDefault(); 
    setFormMessage(login ,"error" ,"invalid username/password combination")
});
document.querySelectorAll(".form__input").forEach(inputElement =>{
    inputElement.addEventListener("blur" , e =>{
        if(e.target.id ==="signupUsername" && e.value.length> 0 && e.value.length < 10){
            setInputError(inputElement,"username must be at least 10 characters in length");
        }
    });
    inputElement.addEventListener("input" ,e => {
        clearInputError(inputElement);
    });
});
});