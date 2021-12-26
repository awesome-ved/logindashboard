function checkform(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    document.getElementById('username_warning').classList.add('error-txt');
    document.getElementById('password_warning').classList.add('error-txt');

    let formfilledsucess = true;
    
    if(email && password){
        
        //email validation
        if(!email.match(/\S+@\S+\.\S+/)){
            document.getElementById('username_warning').classList.remove('error-txt');
            formfilledsucess = false;
        }
        if(final_result && password.match("SmartServTest@123")){
            window.location.href = "dashboard.html";
            return false;
        }
        if(!password.match(/^[A-Z0-9@]/)){
            document.getElementById('password_warning').classList.remove('error-txt');
            final_result = false;
        }

    }else{
        alert("please enter email and password");
        formfilledsucess = false;
    }

    return formfilledsucess;
}