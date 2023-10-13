let passwordGen = document.getElementById("password");
let characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "$", "&", "@"];

function generatePassword() {
    let password = "";
    const passwordLength = 10; // You can change this to the desired length of your password
    
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    
    passwordGen.textContent = password;
}


