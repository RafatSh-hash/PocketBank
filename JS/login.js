document.getElementById('LoginSubmit').addEventListener('click', function(){
 const UserEmail = document.getElementById('Email').value;
 const UserPassword = document.getElementById('Password').value;
    
 if(UserEmail === 'rafatsh800@gmail.com' && UserPassword === 'mysecretpass'){
    document.location.href = 'Bank.html';
 }
 else{
    alert('Please Enter Correct Login Info');
 }
})