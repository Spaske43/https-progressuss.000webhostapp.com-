var FormaTag = document.querySelector("#RegistracijaForma");

for(let i = 0; i < 4; i++)
{
    var TopMarginDiv = document.createElement("div");
    if(i == 3)
    {
        TopMarginDiv.setAttribute("class","row top-margin");
        for(let j = 0; j < 2; j++)
        {
            var pTag = document.createElement("p");
            pTag.setAttribute("class","hidden");
            var labelTag = document.createElement("label");
            var inputTag = document.createElement("input");
            var divCol6 = document.createElement("div");
            divCol6.setAttribute("class","col-sm-6")
            if(j == 0)
            {
                labelTag.textContent = "Password ";
                inputTag.setAttribute("Id","Pass");
                pTag.setAttribute("id","Ppass")
                pTag.textContent = "Must have at least 8 characters, one digit and special character"
            }else{
                inputTag.setAttribute("Id","CPass");
                pTag.setAttribute("id","CPpass")
                labelTag.textContent = "Confirm Password ";
                pTag.textContent = "Must be same as the Password"
            }
            var spanTag = document.createElement("span");
            spanTag.setAttribute("class","text-danger");
            spanTag.textContent = "*";
            inputTag.setAttribute("class","form-control");
            inputTag.setAttribute("type","password");

            labelTag.appendChild(spanTag);
            divCol6.appendChild(labelTag);
            divCol6.appendChild(inputTag);
            divCol6.appendChild(pTag)
            TopMarginDiv.append(divCol6);
        }
    }else{
        var pTag = document.createElement("p")
        pTag.setAttribute("class","hidden")
        TopMarginDiv.setAttribute("class","top-margin");
        var labelTag = document.createElement("label");
        var inputTag = document.createElement("input");
        inputTag.setAttribute("class","form-control");
        inputTag.setAttribute("type","text");
        if(i == 0)
        {
            labelTag.textContent = "First Name";
            inputTag.setAttribute("id","Name");
            pTag.textContent = "Exmp: Petar"
            pTag.setAttribute("id","PName")
        }else if(i == 1)
        {
            labelTag.textContent = "Last Name";
            inputTag.setAttribute("id","LName");
            pTag.textContent = "Exmp: Spasic"
            pTag.setAttribute("id","PLName")

        }else if(i == 2)
        {
            inputTag.setAttribute("id","Email");
            labelTag.textContent = "Email Adress";
            var spanTag = document.createElement("span");
            spanTag.setAttribute("class","text-danger");
            spanTag.textContent = " *";
            labelTag.appendChild(spanTag);
            pTag.textContent = "Exmp: \"petar.spasic.157.20@ict.edu.rs\" "
            pTag.setAttribute("id","PEmail")
        }
        TopMarginDiv.appendChild(labelTag);
        TopMarginDiv.appendChild(inputTag);
        TopMarginDiv.appendChild(pTag);
    }



    FormaTag.appendChild(TopMarginDiv);
}

var hrTag = document.createElement("hr");

FormaTag.appendChild(hrTag);

var DivRow = document.createElement("div");
DivRow.setAttribute("class","row");

for (let i = 0; i < 2; i++)
{
    var divCols = document.createElement("div");
    if(i == 0)
    {
        divCols.setAttribute("class","col-lg-8");
        var labelTag = document.createElement("label");
        var inputTag = document.createElement("input");
        inputTag.setAttribute("type","checkbox")
        labelTag.setAttribute("class","checkbox");
        labelTag.textContent = "I've read the ";
        var aTag = document.createElement("a");
        aTag.setAttribute("href","https://www.termsandcondiitionssample.com/live.php?token=N5JG36Z5RWtOZKBsDahq8uQFNSkue9L4");
        aTag.textContent = "Terms and Conditions";

        labelTag.appendChild(inputTag);
        labelTag.appendChild(aTag);
        divCols.appendChild(labelTag);
    }else{
        divCols.setAttribute("class","col-lg-4 text-right");
        var buttonTag = document.createElement("button");
        buttonTag.setAttribute("class","btn btn-action");
        buttonTag.setAttribute("type","button");
        buttonTag.setAttribute("Id","Dugme")
        buttonTag.textContent = "Register"

        divCols.appendChild(buttonTag);
    }

    DivRow.appendChild(divCols);
}

FormaTag.appendChild(DivRow);


window.onload = function(){
    document.querySelector("#Dugme").addEventListener("click",proveriPolje);
}

function proveriPolje(){

    var Name = document.querySelector("#Name").value;
    var reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,14}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,14})*$/  

    if(!reName.test(Name))
    {
        document.querySelector("#Name").classList.add("greska");
        document.querySelector("#PName").classList.remove("hidden");
        document.querySelector("#PName").classList.add("show");
        document.querySelector("#PName").classList.add("Pgreska");
    }else
    {
        document.querySelector("#PName").classList.remove("show");
        document.querySelector("#PName").classList.add("hidden");
        document.querySelector("#Name").classList.remove("greska");
        document.querySelector("#Name").classList.add("dobro");
    }


    var LName = document.querySelector("#LName").value;

    if(!reName.test(LName))
    {
        document.querySelector("#LName").classList.add("greska");
        document.querySelector("#PLName").classList.remove("hidden");
        document.querySelector("#PLName").classList.add("show");
        document.querySelector("#PLName").classList.add("Pgreska");
    }else
    {
        document.querySelector("#PLName").classList.remove("show");
        document.querySelector("#PLName").classList.add("hidden");
        document.querySelector("#LName").classList.remove("greska");
        document.querySelector("#LName").classList.add("dobro");
    }

    //Provera za Email

    var Email = document.querySelector("#Email").value;
    console.log(Email);

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


            //Provera za Confirm password

            var Cpassword = document.querySelector("#CPass").value;
            console.log(Cpassword);
            if(Cpassword != password || Cpassword == "")
            {
                document.querySelector("#CPass").classList.add("greska");
                document.querySelector("#CPpass").classList.remove("hidden");
                document.querySelector("#CPpass").classList.add("show");
                document.querySelector("#CPpass").classList.add("Pgreska");
            }else
            {
                document.querySelector("#CPpass").classList.remove("show");
                document.querySelector("#CPpass").classList.add("hidden");
                document.querySelector("#CPass").classList.remove("greska");
                document.querySelector("#CPass").classList.add("dobro");
            }



}