
let dob = document.getElementById('dateOfBirth');

let button = document.getElementById("submitButton")

button.addEventListener("click", verifyAge)

function verifyAge(){
    console.log(dob.value);
    let birthday = dob.value;
    let [bYear, bMonth, bDay] = birthday.split('-');
    console.log(bYear);
    let today = new Date().toISOString().slice(0, 10);
    let [tYear, tMonth, tDay] = today.split('-');

    console.log(tYear);
    console.log(today)

    let diffYear = tYear-bYear;
    let verification = document.querySelector(".verified")
    let invite = document.querySelector(".entrance")

    if (diffYear < 18 && bMonth < tMonth && bDay < tDay ){
        verification.style.color = "red"
        verification.innerHTML ="You are not 18 yet!";
    } else{
        verification.style.color = "navy"
        verification.innerHTML ="You are a grown ass adult and can do whatever you want!";
    }
    
}


