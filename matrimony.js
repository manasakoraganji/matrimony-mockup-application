let singUpFormEl = document.getElementById("signUpForm");

const emailElement = document.getElementById("email");
const emailElement1 = document.getElementById("emailPara");

const firstNameElement = document.getElementById("firstName");
const firstNameElement1 = document.getElementById("firstNamePara");
const middleNameElement = document.getElementById("middleName");
const middleNameElement1 = document.getElementById("middleNamePara");
const lastNameElement = document.getElementById("lastName");
const lastNameElement1 = document.getElementById("lastNamePara");

const casteElement = document.getElementById("caste");
const casteElement1 = document.getElementById("castePara");

const permanentElement = document.getElementById("permanent");
const permanentElement1 = document.getElementById("permanentPara");

const currentElement = document.getElementById("current");
const currentElement1 = document.getElementById("currentPara");

const occupationElement = document.getElementById("occupation");
const occupationElement1 = document.getElementById("occupationPara");

const companyElement = document.getElementById("company");
const companyElement1 = document.getElementById("companyPara");

const experianceElement = document.getElementById("experiance");
const experianceElement1 = document.getElementById("experiancePara");

const preferenceElement = document.getElementById("preference");
const preferenceElement1 = document.getElementById("preferencePara");

const ageElement = document.getElementById("age");
const ageElement1 = document.getElementById("agePara");

const partnerElement = document.getElementById("partner");
const partnerElement1 = document.getElementById("partnerPara");

const phoneNumberElement = document.getElementById("phoneNumber");
const phoneNumberElement1 = document.getElementById("phoneNumberPara");

const registedListEl = document.getElementById("registedListEl");

let rootPage = document.getElementById("root");
let loginPage = document.getElementById("loginPage");
let registerPage = document.getElementById("registerPage");
let homePage = document.getElementById("homePage");

loginPage.classList.add("d-none");
homePage.classList.add("d-none");
registerPage.classList.add("d-none");


let formData = {
    email: "",
    firstName: "",
    middleName: "",
    lastName: "",
}

emailElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailElement1.textContent = "Required*";
    } else {
        emailElement1.textContent = ""
    }
    formData.email = event.target.value;
    console.log(formData.email)
})

firstNameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        firstNameElement1.textContent = "Required*";
    } else {
        firstNameElement1.textContent = "";
    }
    formData.firstName = event.target.value;
})

middleNameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        middleNameElement1.textContent = "Required*";
    } else {
        middleNameElement1.textContent = ""
    }
    formData.middleName = event.target.value;
})

lastNameElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastNameElement1.textContent = "Required*";
    } else {
        lastNameElement1.textContent = ""
    }
    formData.lastName = event.target.value;
})

casteElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        casteElement1.textContent = "Required*";
    } else {
        casteElement1.textContent = ""
    }
})

permanentElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        permanentElement1.textContent = "Required*";
    } else {
        permanentElement1.textContent = ""
    }
})

currentElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        currentElement1.textContent = "Required*";
    } else {
        currentElement1.textContent = ""
    }
})

occupationElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        occupationElement1.textContent = "Required*"
    } else {
        occupationElement1.textContent = ""
    }
})

companyElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        companyElement1.textContent = "Required*";
    } else {
        companyElement1.textContent = ""
    }
})

experianceElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        experianceElement1.textContent = "Required*";
    } else {
        experianceElement1.textContent = ""
    }
})

preferenceElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        preferenceElement1.textContent = "Required*";
    } else {
        preferenceElement1.textContent = ""
    }
})

ageElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        ageElement1.textContent = "Required*";
    } else {
        ageElement1.textContent = ""
    }
})

partnerElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        partnerElement1.textContent = "Required*";
    } else {
        partnerElement1.textContent = ""
    }
})

phoneNumberElement.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        phoneNumberElement1.textContent = "Required*";
    } else {
        phoneNumberElement1.textContent = ""
    }
})


let registeredList = []

function saveFormData(formData) {
    registeredList.push(formData)
    console.log(registeredList)
}
singUpFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    saveFormData(formData);
})



function register() {
    let UserFound = localStorage.getItem("UserFound");
    if (UserFound == null) {
        registerPage.classList.add("visible");
        rootPage.classList.toggle("hidden");
        homePage.classList.add("d-none");
        registerPage.classList.add("d-none");
    } else {
        localStorage.setItem("UserFound", true);
        loginPage.classList.remove("visible");
        rootPage.classList.add("d-none");
        homePage.classList.add("visible");
        registerPage.classList.add("d-none");

    }
}

function login() {
    let UserFound = localStorage.getItem("UserFound");
    if (UserFound == null) {
        loginPage.classList.add("visible");
        rootPage.classList.add("hidden");
        homePage.classList.add("d-none");
        registerPage.classList.add("d-none");
    } else {
        localStorage.setItem("UserFound", true);
        loginPage.classList.remove("visible");
        rootPage.classList.add("d-none");
        homePage.classList.add("visible");
        registerPage.classList.add("d-none");

    }
}

function loginBtn() {
    localStorage.setItem("UserFound", true);
    loginPage.classList.remove("visible");
    rootPage.classList.add("d-none");
    homePage.classList.add("visible");
    registerPage.classList.add("d-none");
}

function registerBtn() {
    let UserFound = localStorage.getItem("UserFound");
    if (UserFound == null) {
        loginPage.classList.add("visible");
        rootPage.classList.add("hidden");
        homePage.classList.add("d-none");
        registerPage.classList.add("hidden");
    } else {
        localStorage.setItem("UserFound", true);
        loginPage.classList.remove("visible");
        rootPage.classList.add("d-none");
        homePage.classList.add("visible");
        registerPage.classList.add("d-none");

    }
}

function logoutBtn() {
    localStorage.removeItem("UserFound");
    loginPage.classList.add("d-none");
    homePage.classList.remove("visible");
    rootPage.classList.add("visible");
    rootPage.classList.toggle("hidden");
    registerPage.classList.add("d-none");
}


// function openForm() {
//     document.getElementById("myForm").style.display = "block";

// }

// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
// }
