function formSubmit() {
    firstNameValidation();
    fullNameValidation();
    designationValidation();
    employeeCodeValidation();
    bloodGroupValidation();
    emailValidation();
    phoneNumberValidation();
}

function firstNameValidation() {
    var firstName = $('#firstname').val();
    console.log(firstName);
    if(firstName == "")
        WithError("firstNameError", "firstname", "Field Required");
    else
        WithoutError("firstname", "firstNameError");
}

function fullNameValidation() {
    var fullName = $('#fullname').val();
    if(fullName == "")
        WithError("fullNameError", "fullname", "Field Required");
    else
        WithoutError("fullname", "fullNameError");
}

function designationValidation() {
    var designation = $('#designation').val();
    if(designation == "")
        WithError("designationError", "designation", "Select Suitable Option");
    else
        WithoutError("designation", "desginationError");
}

function employeeCodeValidation() {
    var employeeCode = $('#employeeCode').val();
    var check = employeeCode.match(/[0-9] {6,7}/);
    if(check == null)
        WithError("employeeCodeError", "employeeCode", "Employee Code has only numbers");
    else
        WithoutError("employeeCode", "employeeCodeError");
}

function bloodGroupValidation(){
    var bloodGroup = $("#bloodGroup").val();
    if(bloodGroup == "")
        WithError("bloodGroupError","bloodGroup","Enter valid blood group");
    else
        WithoutError("bloodGroup","bloodGroupError");
}

function emailValidation(){
    var email = $("#email").val();
    var result=email.match(/^[a-z|A-Z][a-z|A-Z|0-9|]+@virtusa.com/);
    if(result == null)
        WithError("emailError","email","Enter valid Virtusa Email Id");
    else
        WithoutError("email","emailError");
}

function phoneNumValidate(){
    var phone = $("#mobileNumber").val();
    var result = phone.match(/^[1-9][0-9]{9}/);
    if(result == null){
        WithError("mobileNumberError","mobileNumber","Enter a valid Mobile Number");
    }
    else{
        WithoutError("mobileNumber","mobileNumberError");
    }
    phone=$("#emergencyContactNumber").val();
    result =  phone.match(/^[1-9][0-9]{9}/);
    if(result == null)
        WithError("emergencyContactNumberError","emergencyContactNumber","Enter a valid Mobile Number")
    else
        WithoutError("emergencyContactNumber","emergencyContactNumberError");
}

function WithError(spanElementId, InputFieldId, message) {
    $("#"+spanElementId).removeClass("spanHide");
    $("#"+spanElementId).html(message);
    $("#"+InputFieldId).css("border-color","red");
}

function WithoutError(spanElementId, InputFieldId, message) {
    $("#"+InputFieldId).css("border-color","green");
}