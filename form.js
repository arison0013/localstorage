function validate() {
    // var returnval= true;
    var name = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById('phone').value;
    var pattern = /^[A-Za-z._]{3,}@[A-Za-z._]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    var emptyerror = document.querySelectorAll('.error'); // no error
    for (var i = 0; i < emptyerror.length; i++) {
        document.getElementsByClassName('error')[i].innerHTML = '';
    }

    
    if (name == "") {
        document.getElementById('span-firstname').innerHTML = "**please enter firstname field";
        returnval= false;
    }
    else if(!isNaN(name.match(/^[A-Za-z]+$/))){
        document.getElementById('span-firstname').innerHTML = "**Enter valid aplhabet/space not allowed";
        returnval= false;
    }
    // if (lastname == "") {
    //     document.getElementById('').innerHTML = "**please enter lastname field";
    //     return false;
    // }
    // if (!isNaN(lastname)) {
    //     document.getElementById('span-lastname').innerHTML = "**lastname should be alphabet";
    //     return false;
    // }
    // if (email == "") {
    //     document.getElementById('span-email').innerHTML = "**please enter email field";
    //     returnval= false;
    // }
    if (!email.match(pattern)) {
        document.getElementById('span-email').innerHTML = "**invalid email";
        returnval= false;
    }
    if (email == "") {
        document.getElementById('span-email').innerHTML = "**please enter email field";
        returnval= false;
    }
    if (!phone.match(phoneNum))
    {
        document.getElementById('span-phone').innerHTML = "**enter valid phone number(10 digit)"
        returnval= false;
        
    }
    if (phone == "") {
        document.getElementById('span-phone').innerHTML = "**phone number is required"
        returnval= false;
    }
    // return returnval;

    local();
    /*----------------local storage------------------*/

}


function local() {
        var name =document.getElementById('firstname').value;
        var lastname = document.getElementById('lastname').value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById('phone').value; 
        if (returnval) {
        let user_records = [];
        user_records = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        user_records.unshift({
            'name': name.trim(),
            'lastname': lastname.trim(),
            'email': email,
            'phone': phone,
        })
        user_records = localStorage.setItem('users', JSON.stringify(user_records));
    
        window.location.href = 'show.html';
    } else {
        return;
    }
}