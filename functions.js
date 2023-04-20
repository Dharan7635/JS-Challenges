// function table(num1,num2)
// {
//    for(;num1<=16;num1++){
//     let num3 = num1*num2;
//     console.log(num3);
//    }
// }
// table(1,16);
// function toPropercase(name){
//     // console.log(name.charAt(0).toUppercase+name.slice(1).toLowercase);
//     console.log(name.charAt(0).toUpperCase()+name.slice(1).toLowerCase());
// }
// toPropercase("hELLLO Woerl");
function mail(email){
    let no = email.indexOf("@")
    console.log(email.slice(0,no));
}
mail("dharanitharan1477@gmailcom")