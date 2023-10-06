var SignInForma = document.querySelector("#signInForma");
for(let i = 0; i < 2; i++)
{
    var SignInDiv = document.createElement("div");
    SignInDiv.setAttribute("class","top-margin");
    var SignInLabel = document.createElement("label");
    var SignInSpan = document.createElement("span");
    SignInSpan.setAttribute("class", "text-danger")
    SignInSpan.textContent = "*";
    var SignInInput = document.createElement("input");
    SignInInput.setAttribute("class","form-control Provera");
    var pTag = document.createElement("p");
    pTag.setAttribute("class","hide");
    if(i == 0)
    {
        SignInLabel.textContent = "Email";
        SignInInput.setAttribute("type","text");
        SignInInput.setAttribute("Id","Email")
        SignInInput.setAttribute("placeholder","spasicpetar02@gmail.com");
        pTag.textContent = "Exmp: \"petar.spasic.157.20@ict.edu.rs\" ";
        pTag.setAttribute("id","PEmail");
    }else{
        SignInLabel.textContent = "Password";
        SignInInput.setAttribute("type","password");
        SignInInput.setAttribute("Id","Pass")
        pTag.textContent = "Must have at least 8 characters, one digit and special character";
        pTag.setAttribute("id","Ppass");
    }
    SignInLabel.appendChild(SignInSpan);
    SignInDiv.appendChild(SignInLabel);
    SignInDiv.appendChild(SignInInput);
    SignInDiv.appendChild(pTag)
    SignInForma.appendChild(SignInDiv);
}

var DivRow = document.createElement("div");
DivRow.setAttribute("class","row");
var hrTag = document.createElement("hr");
DivRow.appendChild(hrTag);

var divCol8 = document.createElement("div");
divCol8.setAttribute("class","col-lg-8");
var aTag = document.createElement("a");
aTag.setAttribute("href","#");
aTag.textContent = "Forgot password?"

divCol8.appendChild(aTag);
DivRow.appendChild(divCol8);

var divcol4 = document.createElement("div");
divcol4.setAttribute("class","col-lg-4 text-right");
var ButtonTag = document.createElement("button");
ButtonTag.setAttribute("class","btn btn-action");
ButtonTag.setAttribute("type","button");
ButtonTag.setAttribute("Id","Dugme")
ButtonTag.textContent = "Sign in"

divcol4.appendChild(ButtonTag);
DivRow.appendChild(divcol4);

SignInForma.appendChild(DivRow)
console.log(SignInForma);


// Ovde je regex za Sign in formu //

    document.querySelector("#Dugme").addEventListener("click",proveriPolje);

    function proveriPolje()
    {
        //Provera za Email

        var Email = document.querySelector("#Email").value;
        console.log(Email);
        // var reEmail = /^[a-z]{3,15}(\.[a-z]{3,20})+(\.([1-9][0-9]{0,2}|[12][]0-9){3})\.([01][09]|20)?\@ict\.edu\.rs$/
    
        var reEmail = /^[a-z][\w\.]+\@[a-z0-9]{3,20}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/
        if(!reEmail.test(Email))
        {
            document.querySelector("#Email").classList.add("greska");
            document.querySelector("#PEmail").classList.remove("hidden");
            document.querySelector("#PEmail").classList.add("show");
            document.querySelector("#PEmail").classList.add("Pgreska");
        }else
        {
            document.querySelector("#PEmail").classList.remove("show");
            document.querySelector("#PEmail").classList.add("hidden");
            document.querySelector("#Email").classList.remove("greska");
            document.querySelector("#Email").classList.add("dobro");
        }

        //Provera za password

        var password = document.querySelector("#Pass").value;
        var rePass = /^(?=.*\d)(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/
        console.log(password);
        if(!rePass.test(password))
        {
            document.querySelector("#Pass").classList.add("greska");
            document.querySelector("#Ppass").classList.remove("hidden");
            document.querySelector("#Ppass").classList.add("show");
            document.querySelector("#Ppass").classList.add("Pgreska");
        }else
        {
            document.querySelector("#Ppass").classList.remove("show");
            document.querySelector("#Ppass").classList.add("hidden");
            document.querySelector("#Pass").classList.remove("greska");
            document.querySelector("#Pass").classList.add("dobro");
        }
    }