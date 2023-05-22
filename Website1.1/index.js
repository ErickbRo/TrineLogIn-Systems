function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
function tablesView() {
    open("tables.html")
}
function reportsView(){
    open("reports.html")
}
function formsView(){
    open("forms.html")
}
let uname;let lname;let email;
async function recoverpass(){
    uname = document.getElementById("uname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;

    if(uname == ""|| lname == "" || email == "" ){
        window.alert("Fill in your details")
    }
    else{
        for(let i=10;i>=0;i--){
            await sleep(1000).then(() => {
                document.getElementById("err").innerHTML = "Password in : " + i + " secs"
            })
        }
        document.getElementById("err").innerHTML = "Password is : "
        document.getElementById("passwd").innerHTML = "Pass11221"
    }
    

}