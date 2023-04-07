

class Users {
    
    constructor (email, userName, password, examType) {
        this.email = email;
        this.userName  = userName;
        this.password = password;
        this.examType = examType;
    }
    
    checkUserName () {
        
    }
    
    checkUserEmail () {
        
    }
}

let arrUser = [];

try {
    arrUser = JSON.parse(localStorage.arrUser)
}
catch (err){
    console.log('No Users in database')
}

let form = document.getElementById('form');

form.addEventListener('submit', event => {
    
    event.preventDefault();

    let newUser = new Users (
        event.target.email.value,
        event.target.userName.value,
        event.target.password.value,
        event.target.examType.value,
    )

    arrUser.push(newUser);
    localStorage.setItem('arrUser', JSON.stringify(arrUser));
    form.reset();
})
function createNewUser () {

}