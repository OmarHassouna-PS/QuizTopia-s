
class Users {

    constructor(email, userName, password, examType) {
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.examType = examType;
    }

    static signInCheck(email, password) {

        let arrUsers = Users.getUsersInfo();
        console.log(this.getUsersInfo())
        for (let index = 0; index < arrUsers.length; index++) {

            if (arrUsers[index].password == password && arrUsers[index].email == email) {
                return arrUsers[index];
            }
        }
        return false;
    }

    static userNameCheck(userName) {

        let arrUsers = Users.getUsersInfo();

        for (let index = 0; index < arrUsers.length; index++) {

            if (arrUsers[index].userName == userName) {
                return false;
            }
        }
        return true;
    }

    static emailCheck(email) {

        let arrUsers = Users.getUsersInfo();

        for (let index = 0; index < arrUsers.length; index++) {

            if (arrUsers[index].email == email) {
                return false;
            }
        }
        return true;
    }

    // get Array Info To Users from localStorage
    static getUsersInfo() {

        try {
            return JSON.parse(localStorage.arrUsers);
        }
        catch (errMsg) {
            return [];
        }
    }

    // set Array Info To Users from localStorage
    static setUsersInfo(arrUsers) {
        localStorage.setItem('arrUsers' , JSON.stringify(arrUsers));
    }

    static getUserSession() {
        try {
            return JSON.parse(localStorage.user);
        }
        catch (errMsg) {
            return [];
        }
    }
}
// global Variables
const colorErr = '#ff000080';
const colorNotErr = '#4D47C3';

// To print error message in field User : Void
function userNameError (userNameResult) {
    let warningUserName = document.getElementById("warningUserName");
    let InputPassword = document.getElementById("userName");

    if (userNameResult) {
        warningUserName.textContent = 'Username already exists. Please choose different Username';
        warningUserName.style.display = 'inline-block';
        InputPassword.style.borderColor = colorErr;
    }
    else {
        warningUserName.style.display = 'none';
        InputPassword.style.borderColor = colorNotErr;
    }
}

// To print error message in field Email : Void
function emailError (emailResult) {
    let warningEmail = document.getElementById("warningEmail");
    let InputEmail = document.getElementById("email");

    if (emailResult) {
        warningEmail.textContent = 'Email already exists. Please choose different email address';
        warningEmail.style.display = 'inline-block';
        InputEmail.style.borderColor = colorErr;
    }  
    else {
        warningEmail.style.display = 'none';
        InputEmail.style.borderColor = colorNotErr;
    }

}

// To Check the rule of input it : return True or False
function signUpInputsRules(newUser, confirmPassword) {

    // without spaces
    const patternUserName = /^[A-z0-9]+$/;

    // more than 8 characters, with at least 1 number, uppercase, and special characters.
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;

    // follows email format
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;

    const warningEmail = document.getElementById('warningEmail');
    const warningUserName = document.getElementById('warningUserName');
    const warningExamType = document.getElementById('warningExam');
    const warningPassword = document.getElementById('warningPassword');
    const warningConfirmPassword = document.getElementById('warningConfirmPassword');

    const InputEmail = document.getElementById('email');
    const InputUserName = document.getElementById('userName');
    const InputExamType = document.getElementById('examType');
    const InputPassword = document.getElementById('password');
    const InputConfirmPassword = document.getElementById('confirmPassword');

    // Email
    if (newUser.email == '') {
        warningEmail.textContent = 'Email is required';
        warningEmail.style.display = 'inline-block';
        InputEmail.style.borderColor = colorErr;
        return false;  
    }
    else if (!patternEmail.test(newUser.email)) {
        warningEmail.textContent = 'Email Format is incorrect.';
        warningEmail.style.display = 'inline-block';
        InputEmail.style.borderColor = colorErr;
        return false;
    }
    else {
        warningEmail.style.display = 'none';
        InputEmail.style.borderColor = colorNotErr;
    }

    // User Name
    if (newUser.userName == '') {
        warningUserName.textContent = 'Username is required';
        warningUserName.style.display = 'inline-block';
        InputUserName.style.borderColor = colorErr;
        return false;
        
    }
    else if (!patternUserName.test(newUser.userName)) {
        warningUserName.textContent = 'Uesr Name should be without spaces.';
        warningUserName.style.display = 'inline-block';
        InputUserName.style.borderColor = colorErr;
        return false;
    }
    else {
        warningUserName.style.display = 'none';
        InputUserName.style.borderColor = colorNotErr;
    }

    // Exam Type
    if (newUser.examType == 'false') {
        warningExamType.textContent = 'Exam Type is required';
        warningExamType.style.display = 'inline-block';
        InputExamType.style.borderColor = colorErr;
        return false;
        
    }
    else if (newUser.examType !== 'html' && newUser.examType !== 'css' && newUser.examType !== 'javascript') {
        warningExamType.textContent = 'Choose Exam type';
        warningExamType.style.display = 'inline-block';
        warningExamType.style.borderColor = colorErr;
        return false;
    }
    else {
        warningExamType.style.display = 'none';
        InputExamType.style.borderColor = colorNotErr;
    }

    // Password
    if (newUser.password == '') {
        warningPassword.textContent = 'Password is required';
        warningPassword.style.display = 'inline-block';
        InputPassword.style.border = '2px solid red';
        return false;
        
    }
    if (!patternPassword.test(newUser.password)) {
        warningPassword.textContent = 'Password should be more than 8 characters, with at least 1 number, 1 Uppercase and Special character.';
        warningPassword.style.display = 'inline-block';
        InputPassword.style.borderColor = colorErr;
        return false;
    }
    else {
        warningPassword.style.display = 'none';
        InputPassword.style.borderColor = colorNotErr;
    }

    // Confirm Password
    if (confirmPassword !== newUser.password) {
        console.log(confirmPassword, newUser.password)
        warningConfirmPassword.textContent = 'Password does not match';
        warningConfirmPassword.display = 'inline-block';
        InputConfirmPassword.style.borderColor = colorErr;
        return false;
    }
    else {
        warningConfirmPassword.display = 'none';
        InputConfirmPassword.style.borderColor = colorNotErr;
    }

    return true;
}

// To Create new user and order the validation : return Void
function createNewUser(newUser, confirmPassword) {

    let arrUsers = Users.getUsersInfo();

    let emailResult = Users.emailCheck(newUser.email);
    let userNameResult = Users.userNameCheck(newUser.userName);

    emailError(!emailResult);
    userNameError(!userNameResult);

    if (!emailResult || !userNameResult)
        return;
    
    let resultInputsRules = signUpInputsRules(newUser, confirmPassword);

    if (resultInputsRules) {
        arrUsers.push(newUser);
        Users.setUsersInfo(arrUsers)
        window.location.href = "Sign_In.html";
    }
}

// Sign Up Event Listener
const formSignUp = document.getElementById('formSignUp');
try {
    formSignUp.addEventListener('submit', event => {
        
        
        event.preventDefault();

        let newUser = new Users(
            event.target.email.value,
            event.target.userName.value,
            event.target.password.value,
            event.target.examType.value,
        )

        createNewUser(newUser, event.target.confirmPassword.value);
    });
} catch (errMsg) {}

// Sign In Event Listener
const formSignIn = document.getElementById('form');
try {
    formSignIn.addEventListener('submit', event => {

        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        
        const warningEmail = document.getElementById('warningEmail');
        const warningPassword = document.getElementById('warningPassword');

        const InputEmail = document.getElementById('email');
        const InputPassword = document.getElementById('password');

        if (email == '') {
            warningEmail.textContent = 'You must enter your email';
            warningEmail.style.display = 'inline-block';
            InputEmail.style.borderColor = colorErr;
            return;  
        }
        else {
            warningEmail.style.display = 'none';
            InputEmail.style.borderColor = colorNotErr;
        }

        if (password == '') {
            warningEmail.style.display = 'none';
            warningPassword.textContent = 'You must enter your password';
            warningPassword.style.display = 'inline-block';
            InputPassword.style.borderColor = colorErr;
            return;  
        }
        else {
            warningPassword.style.display = 'none';
            InputPassword.style.borderColor = colorNotErr;
        }

        let resultSignIn = Users.signInCheck(email, password);

        if (resultSignIn) {
            sessionStorage.setItem('UserSession', JSON.stringify(resultSignIn));
            window.location.href = "WelcomePage.html";
        } 
        else {
            
            let resultEmail = Users.emailCheck(email);
            console.log(resultEmail)

            if (resultEmail) {
                warningEmail.textContent = 'The email is incorrect';
                warningEmail.style.display = 'inline-block';
                InputEmail.style.borderColor = colorErr;
                return;
            }
            else {
                warningEmail.style.display = 'none';
                InputEmail.style.borderColor = colorNotErr;
            }

            warningPassword.textContent = 'The Password is incorrect';
            warningPassword.style.display = 'inline-block';
            InputPassword.style.borderColor = colorErr;
            return;

            warningPassword.style.display = 'none';
            InputPassword.style.borderColor = colorNotErr;
        }
  
    });

} catch (errMsg) {}
