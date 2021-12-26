
function valid_complete_form(){
    

    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    document.getElementById('username_warning').classList.add('d-none');
    document.getElementById('pass_warning').classList.add('d-none');

    let final_result = true;



    if(email && pass){
        //email validation
        if(!email.match(/\S+@\S+\.\S+/)){
            document.getElementById('username_warning').classList.remove('d-none');
            final_result = false;
        }


        
        if(final_result && pass.match("SmartServTest@123")){
            window.location.href = "dashboard.html";
            return false;
        }

        if(!pass.match(/^[A-Z0-9@]/)){
            document.getElementById('pass_warning').classList.remove('d-none');
            final_result = false;
        }
        
            
        

    }else{
        alert("please enter email and password")
        final_result = false;
    }

    return final_result;
}