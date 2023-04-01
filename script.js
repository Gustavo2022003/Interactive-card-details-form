
function getCardName() {

    // nome
    let name = document.getElementById("cardholder-name-input");
    let nameValue = name.value;
    let nameOnCard = document.getElementById("cardholder-name");

    if (nameValue == "") {
        nameOnCard.innerText = "CARDHOLDER NAME";
    } else {
        nameOnCard.innerText = nameValue.toUpperCase();
    }

    if (containsOnlyLetters(nameValue) == false) {
        let name = document.getElementById("cardholder-name-input");
        name.classList.add("input-error");
        let error = document.getElementById("name-error");
        error.innerText = "Wrong format, letters only";
    } else {
        let name = document.getElementById("cardholder-name-input");
        name.classList.remove("input-error");
        let error = document.getElementById("name-error");
        error.innerText = "";
    }

}

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

function containsOnlyLetters(str) {
    return /^[A-Za-z\s]*$/.test(str);
}

function getCardNumber() {
    let numberInput = document.getElementById("card-number-input");
    let numberValue = numberInput.value;
    let numberOnCard = document.querySelectorAll("#card-number span");

    numberOnCard[0].innerText = numberValue.slice(0, 4);
    numberOnCard[1].innerText = numberValue.slice(4, 8);
    numberOnCard[2].innerText = numberValue.slice(8, 12);
    numberOnCard[3].innerText = numberValue.slice(12, 16);

    if (numberValue == "") {
        numberOnCard[0].innerText = "0000"; 
        numberOnCard[1].innerText = "0000"; 
        numberOnCard[2].innerText = "0000";  
        numberOnCard[3].innerText = "0000";
        numberInput.classList.remove("input-error");
        let error = document.getElementById("card-number-error");
        error.innerText = "";
    } else if (!/^\d+$/.test(numberValue)) {
        numberInput.classList.add("input-error");
        let error = document.getElementById("card-number-error");
        error.innerText = "Wrong format, numbers only";
    } else {
        numberInput.classList.remove("input-error");
        let error = document.getElementById("card-number-error");
        error.innerText = "";
    }
}

function getMonthDate() {
    let month = document.getElementById("card-month-input");
    let monthValue = month.value;
    let monthOnCard = document.getElementById("month");
    monthOnCard.innerText = monthValue;

    if (monthValue > 12){
        let error = document.getElementById("date-error");
        error.innerText = "invalid date";
        let month = document.getElementById("card-month-input");
        month.classList.add("input-error");
    } else if (containsOnlyNumbers(monthValue) == false) {
        let month = document.getElementById("card-month-input");
        month.classList.add("input-error");
        let error = document.getElementById("date-error");
        error.innerText = "Wrong format, numbers only";
    } else {
        let error = document.getElementById("date-error");
        error.innerText = "";
        let month = document.getElementById("card-month-input");
        month.classList.remove("input-error");
    }


    if (monthValue == ""){
        monthOnCard.innerText = "00";
        let error = document.getElementById("date-error");
        error.innerText = "";
        let month = document.getElementById("card-month-input");
        month.classList.remove("input-error");
    }
}

function getYearDate() {
    let year = document.getElementById("card-year-input");
    let yearValue = year.value;
    let yearOnCard = document.getElementById("year");
    yearOnCard.innerText = yearValue;

    if (containsOnlyNumbers(yearValue) == false){
        let year = document.getElementById("card-year-input");
        year.classList.add("input-error");
        let error = document.getElementById("date-error");
        error.innerText = "Wrong format, numbers only";
    } else {
        let year = document.getElementById("card-year-input");
        year.classList.remove("input-error");
        let error = document.getElementById("date-error");
        error.innerText = "";
    }

    if (yearValue == ""){
        yearOnCard.innerText = "00";
        let year = document.getElementById("card-year-input");
        year.classList.remove("input-error");
        let error = document.getElementById("date-error");
        error.innerText = "";
    }
}

function getCVC() {
    let cvc = document.getElementById("card-date");
    let cvcValue = cvc.value;
    let cvcOnCard = document.getElementById("cvc");
    cvcOnCard.innerText = cvcValue;

    if (containsOnlyNumbers(cvcValue) == false){
        let error = document.getElementById("cvc-error");
        error.innerText = "Wrong format, numbers only";
        let cvc = document.getElementById("card-date");
        cvc.classList.add("input-error");
    } else {
        let error = document.getElementById("cvc-error");
        error.innerText = "";
        let cvc = document.getElementById("card-date");
        cvc.classList.remove("input-error");
    }

    if (cvcValue.length < 3){
        let error = document.getElementById("cvc-error");
        error.innerText = "must have three numbers!";
        let cvc = document.getElementById("card-date");
        cvc.classList.add("input-error");
    }

    if (cvcValue == ""){
        cvcOnCard.innerText = "000";
    }

}

function submit() {

    function verifyName() {
        let nameValue = document.getElementById("cardholder-name-input").value;

        if (nameValue == "") {
            let name = document.getElementById("cardholder-name-input");
            name.classList.add("input-error");
            let error = document.getElementById("name-error");
            error.innerText = "can't be blank";
        } else {
            return true;
        }
    }

    function verifyNumber() {
        let numberValue = document.getElementById("card-number-input").value;

        if (numberValue == "") {
            let number = document.getElementById("card-number-input");
            number.classList.add("input-error");
            let error = document.getElementById("card-number-error");
            error.innerText = "can't be blank";
        } else if (numberValue.length == 16){
            return true;
        } else {
            let number = document.getElementById("card-number-input");
            number.classList.add("input-error");
            let error = document.getElementById("card-number-error");
            error.innerText = "please, insert a valid number";
        }
    }

    function verifyMonth() {
        let monthValue = document.getElementById("card-month-input").value;

        if (monthValue == "") {
            let month = document.getElementById("card-month-input");
            month.classList.add("input-error");
            let error = document.getElementById("date-error");
            error.innerText = "can't be blank";
        } else {
            return true;
        }
    }

    function verifyYear() {
        let yearValue = document.getElementById("card-year-input").value;

        if (yearValue == "") {
            let year = document.getElementById("card-year-input");
            year.classList.add("input-error");
            let error = document.getElementById("date-error");
            error.innerText = "can't be blank";
        } else {
            return true;
        }
    }


    function verifyCVC(){
        let cvcValue = document.getElementById("card-date").value;

        if (cvcValue == "") {
            let error = document.getElementById("cvc-error");
            error.innerText = "can't be blank";
            let cvc = document.getElementById("card-date");
            cvc.classList.add("input-error");
        } else {
            return true;
        }

    }
    

    verifyName();
    verifyNumber();
    verifyMonth();
    verifyYear();
    verifyCVC();

}

