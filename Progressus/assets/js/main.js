var Stranice = new Array("Home", "About Us", "Details", "Contact Us", "SIGN IN / SIGN UP");
var LinkoviStranica = new Array("index.html", "about.html", "details.html", "contact.html", "signin.html");

var DivMeni = document.querySelector("#dinMeni");
console.log(DivMeni)

var ulTag = document.createElement("ul");
ulTag.setAttribute("class", "nav navbar-nav pull-right");

var UrlStranice = window.location.href;


for(let i = 0; i < Stranice.length; i++)
{
    var LiTag = document.createElement("li");
    var aTag = document.createElement("a");

    aTag.innerHTML = Stranice[i];

    aTag.setAttribute("href", LinkoviStranica[i]);
    var link = LinkoviStranica[i];
    var signup = "signup.html";

    if(UrlStranice.endsWith(link))
    {
        LiTag.setAttribute("class", "active");
    }

    if(link == "signin.html")
    {
        aTag.setAttribute("class","btn");
    }
    LiTag.appendChild(aTag);
    ulTag.appendChild(LiTag);

}
DivMeni.appendChild(ulTag);



$(document).ready(function(){
    $("#SkrivenoFF").hide();
    $("#SkrivenoH").hide();
    $("#SkrivenoHH").hide();
    $("#SkrivenoNR").hide();

    $(".pointer").hover(function()
    {
        $(this).css("cursor","pointer");
    })
    var brojacFF = 0;
    var brojacH = 0;
    var brojacHH = 0;
    var brojacNR = 0;

    $("#PrikaziViseFF").click(function(e)
    {
        brojacFF++
        e.preventDefault();
        $("#SkrivenoFF").slideToggle();
        if(brojacFF % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" );  
        }
    })

    $("#PrikaziViseH").click(function(e)
    {
        brojacH++;  

        e.preventDefault();
        $("#SkrivenoH").slideToggle();
        if(brojacH % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" );
        }
    })
    $("#PrikaziViseHH").click(function(e)
    {
        brojacHH++;
        e.preventDefault();
        $("#SkrivenoHH").slideToggle();
        if(brojacHH % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" ); 
        }
    })
    $("#PrikaziViseNR").click(function(e)
    {
        brojacNR++;
        e.preventDefault();
        $("#SkrivenoNR").slideToggle();
        if(brojacNR % 2 == 0)
        {
            $(this).html("show more");
        }else
        {
            $(this).html("show less" ); 
        }
    })
})

    
    var formTag = document.querySelector("#forma");
    for(let i = 0; i < 3; i++){
        var DivRow = document.createElement("div");
        DivRow.setAttribute("class","row");
        if(i == 0){
            for(let j = 0; j < 3; j++){
                var divCol = document.createElement("div");
                divCol.setAttribute("class","col-sm-4");
                var inputTag = document.createElement("input");
                inputTag.setAttribute("class","form-control Provera");
                inputTag.setAttribute("type","text");
                var pTag = document.createElement("p");
                pTag.setAttribute("class","hidden");

                if(j == 0)
                {
                    inputTag.setAttribute("placeholder","Full Name");
                    inputTag.setAttribute("id","Name");
                    pTag.textContent = "Exmp: \"Petar Spasic\" "
                    pTag.setAttribute("id","PName")
                }else if(j == 1)
                {
                    inputTag.setAttribute("placeholder","Email");
                    inputTag.setAttribute("id","Email");
                    pTag.textContent = "Exmp: \"petar.spasic.157.20@ict.edu.rs\" "
                    pTag.setAttribute("id","PEmail")
                }else{
                    inputTag.setAttribute("placeholder","Phone");
                    inputTag.setAttribute("id","Phone");
                    pTag.setAttribute("id","PPhone")
                    pTag.textContent = "Exmp: \"+381 644567993\" "

                }
                divCol.appendChild(inputTag);
                divCol.appendChild(pTag);

                DivRow.appendChild(divCol);
            }
        }else if(i == 1){
            var divCol = document.createElement("div");
            divCol.setAttribute("class","col-sm-12");
            var textArea = document.createElement("textarea");
            textArea.setAttribute("placeholder","Type your message here...");
            textArea.setAttribute("class","form-control Provera");
            textArea.setAttribute("id","textArea");

            textArea.setAttribute("rows","9");
            var pTag = document.createElement("p");
            pTag.setAttribute("class","hidden");
            pTag.setAttribute("id","PText");

            pTag.textContent = "You must write message"
            var BrTag = document.createElement("br");
            divCol.appendChild(BrTag);
            divCol.appendChild(textArea);
            divCol.appendChild(pTag);
            DivRow.appendChild(divCol);
            
        }else{
            for(let j = 0; j < 2; j++){
                var divCol = document.createElement("div");
                if(j == 0){
                    divCol.setAttribute("class","col-sm-6");
                    var LabelTag = document.createElement("label");
                    LabelTag.setAttribute("class","checkbox");
                    var inputTag = document.createElement("input");
                    inputTag.setAttribute("type","checkbox");
                    LabelTag.textContent = "Sign up for newsletter";
                    LabelTag.appendChild(inputTag);
                    divCol.appendChild(LabelTag);
                    var BrTag = document.createElement("br");
                    DivRow.appendChild(BrTag);
                }else{
                    divCol.setAttribute("class","col-sm-6 text-right");
                    var inputTag = document.createElement("input");
                    inputTag.setAttribute("class","btn btn-action");
                    inputTag.setAttribute("type","button");
                    inputTag.setAttribute("value","Send message");
                    inputTag.setAttribute("id","Provera");
                    divCol.appendChild(inputTag);
                }
                DivRow.appendChild(divCol);

            }
        }
        formTag.appendChild(DivRow);
    }
    console.log(formTag);

    // Ovde sada treba da uradis Regex za Contact formu //

    window.onload = function(){
        document.querySelector("#Provera").addEventListener("click",proveriPolje);
    }

    function proveriPolje(){

        // Name provera //
        var Name = document.querySelector("#Name").value;
        console.log(Name);
        var reName = /^[A-ZŽĐŠĆČ][a-zžđšćč]{2,14}(\s[A-ZŽĐŠĆČ][a-zžđšćč]{2,19})+$/

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

        // Email provera
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

        // Phone provera 
        var Phone = document.querySelector("#Phone").value;
        console.log(Phone);
        var rePhone = /^(\+381)?(\s|-)?6(([0-6]|[8-9])\d{7}|(77|78)\d{7}){1}$/

        if(!rePhone.test(Phone))
        {
            document.querySelector("#Phone").classList.add("greska");
            document.querySelector("#PPhone").classList.remove("hidden");
            document.querySelector("#PPhone").classList.add("show");
            document.querySelector("#PPhone").classList.add("Pgreska");

        }else
        {
            document.querySelector("#PPhone").classList.remove("show");
            document.querySelector("#PPhone").classList.add("hidden");
            document.querySelector("#Phone").classList.remove("greska");
            document.querySelector("#Phone").classList.add("dobro");
        }

        // TextArea provera

        var textArea = document.querySelector("#textArea").value;
        console.log(textArea);

        if(textArea == "")
        {
            document.querySelector("#textArea").classList.add("greska");
            document.querySelector("#PText").classList.remove("hidden");
            document.querySelector("#PText").classList.add("show");
            document.querySelector("#PText").classList.add("Pgreska");
        }else
        {
            document.querySelector("#PText").classList.remove("show");
            document.querySelector("#PText").classList.add("hidden");
            document.querySelector("#textArea").classList.remove("greska");
            document.querySelector("#textArea").classList.add("dobro");
        }

        
    }



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
    var reName = /^[A-Z]{1}[a-z]{2,}$/  //popravi

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

    var Name = document.querySelector("#LName").value;
    var reName = /^[A-Z]{1}[a-z]{2,}$/

    if(!reName.test(Name))
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

    var LName = document.querySelector("#LName").value;
    var reLName = /^[A-Z]{1}[a-z]{2,20}$/

    if(!reLName.test(LName))
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


