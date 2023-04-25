const PalindromeInput = (input) =>{
    let output = input.split("").reverse().join("");
    if(input===output){
     return alert(`"The given input" ${output} "is palindrome"`);
    }
    else{
        return alert("The given input is not a palindrome");
    }
}
const input =()=>{
    userinput=prompt("Enter the input");
    PalindromeInput(userinput);
}
input();
// console.log(PalindromeInput("MALAYALAM"));