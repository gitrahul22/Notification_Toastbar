let toastbox=document.getElementById("toastb");
let success='<i class="fa-solid fa-circle-check"></i> Succesfully Created';
let error='<i class="fa-solid fa-triangle-exclamation"></i> Unknown error';
let invalid='<i class="fa-solid fa-circle-xmark"></i> Invalid input try again';
function showT(msg){
    console.log("Clicked");
    let toast=document.createElement('div');
    toast.classList.add('toast') ;
    toast.innerHTML=msg;
    toastbox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
   setTimeout(() => {
        toast.remove(); 
    }, 3000);
}