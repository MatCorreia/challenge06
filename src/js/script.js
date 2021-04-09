const form = document.querySelector('.form-contact');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const mail = document.querySelector('#email');
const pwd = document.querySelector('#pwd');



function errorFunc(el){
  el.classList.remove('valid')
  el.classList.add('error');
}

function correctFunc(el){
  el.classList.remove('error')
  el.classList.add('valid');
}

function validateFirstName(){
  if (fname.value.length < 1){
    errorFunc(fname)
    document.getElementById('fnamespan').style.display = 'block';
  }else{
    document.getElementById('fnamespan').style.display = 'none';
    correctFunc(fname)

}}

function validateLastName(){
  if (lname.value.length < 1){
    errorFunc(lname)
    document.getElementById('lnamespan').style.display = 'block';
  }else{
    document.getElementById('lnamespan').style.display = 'none';
    correctFunc(lname)
}}

function validatePassword(){
  if (pwd.value.length < 8 || pwd.value.length > 30){
    errorFunc(pwd)
    document.getElementById('pwdspan').style.display = 'block';
  }else{
    document.getElementById('pwdspan').style.display = 'none';
    correctFunc(pwd)
}}

function validateEmail(){
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (mail.value.match(mailformat)){
    document.getElementById('mailspan').style.display = 'none';
    correctFunc(mail)
  }else{
    errorFunc(mail)
    document.getElementById('mailspan').style.display = 'block';
}}

function validateForm(){
form.addEventListener('click', (e) => {
  e.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
})};

