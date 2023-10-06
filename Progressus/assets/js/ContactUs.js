
var formTag = document.querySelector("#forma");
for(let i = 0; i < 4; i++){
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
                pTag.setAttribute("id","PName");
                divCol.appendChild(inputTag);
            }else if(j == 1)
            {
                inputTag.setAttribute("placeholder","Email");
                inputTag.setAttribute("id","Email");
                pTag.textContent = "Exmp: \"petar.spasic.157.20@ict.edu.rs\" "
                pTag.setAttribute("id","PEmail");
                divCol.appendChild(inputTag);
            }else{
                for(let k = 0; k < 3; k++)
                {
                    
                    var DivInline = document.createElement("div");
                    var inputRTag = document.createElement("input");
                    var LabelTag = document.createElement("label");
                    DivInline.setAttribute("class","form-check InlineRadio")
                    inputRTag.setAttribute("class","form-check-input");
                    inputRTag.setAttribute("type","radio");
                    inputRTag.setAttribute("name","inlineRadioOptions");
                    if(k == 0)
                    {
                        inputRTag.setAttribute("id","inlineRadio1");
                        inputRTag.setAttribute("value","option1");
                        LabelTag.setAttribute("for","inlineRadio1")
                        LabelTag.innerHTML = "Workout"
                    }else if(k == 1)
                    {
                        inputRTag.setAttribute("id","inlineRadio2");
                        inputRTag.setAttribute("value","option2");
                        LabelTag.setAttribute("for","inlineRadio2")
                        LabelTag.innerHTML = "Meals"
                    }else{
                        inputRTag.setAttribute("id","inlineRadio3");
                        inputRTag.setAttribute("value","option3");
                        LabelTag.setAttribute("for","inlineRadio3")
                        LabelTag.innerHTML = "Others"
                        inputRTag.checked = "true";
                    }
                    LabelTag.classList.add("RadioLabel")
                    DivInline.appendChild(inputRTag);
                    DivInline.appendChild(LabelTag);
                    divCol.appendChild(DivInline)
                }
            }
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
        
    }else if(i == 2){
        var OptionTagsValues = [" < 18","18 - 35"," > 35"];
        var classInput = document.createElement("class");
        classInput.setAttribute("class","col-sm-6");
        classInput.setAttribute("id","Select");
        var label = document.createElement("label");
        label.setAttribute("class","input-group-text");
        label.setAttribute("for","Age");
        var tekst = document.createTextNode("Age:");
        label.appendChild(tekst);
        var selectTag = document.createElement("select");
        selectTag.setAttribute("class","form-select");
        selectTag.setAttribute("id","Age");
        selectTag.setAttribute("required","");
        var PrviOption = document.createElement("option");
        PrviOption.setAttribute("id","Greska")
        PrviOption.innerHTML = "Choose...";
        selectTag.appendChild(PrviOption);
        for(let j = 0; j < 3; j++)
        {
            var optionTag = document.createElement("option");
            optionTag.setAttribute("value",OptionTagsValues[j]);
            var OptionTagTekst = document.createTextNode(OptionTagsValues[j]);
            optionTag.appendChild(OptionTagTekst)

            selectTag.appendChild(optionTag);
        }
        var Pselect = document.createElement("p");
        Pselect.innerHTML = "Select your age";
        Pselect.setAttribute("id","Pselect");
        Pselect.setAttribute("class","hidden");

        classInput.appendChild(label);
        classInput.appendChild(selectTag);
        classInput.appendChild(Pselect);
        DivRow.appendChild(classInput);
    }else{
        for(let j = 0; j < 2; j++){
            var divCol = document.createElement("div");
            if(j == 0){
                divCol.setAttribute("class","col-sm-6 InlineBox");
                var LabelTag = document.createElement("label");
                LabelTag.setAttribute("class","checkbox");
                var inputTag = document.createElement("input");
                inputTag.setAttribute("type","checkbox");
                LabelTag.textContent = "Sign up for newsletter";
                LabelTag.setAttribute("class","labelBox")
                divCol.appendChild(inputTag)
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
    var greske = 0;
    // Name provera //
    var Name = document.querySelector("#Name").value;
    console.log(Name);
    var reName = /^[A-ZŽĐŠĆČ][a-zžđšćč]{2,14}(\s[A-ZŽĐŠĆČ][a-zžđšćč]{2,19})+$/

    if(!reName.test(Name))
    {
        document.querySelector("#Name").classList.remove("dobro");
        document.querySelector("#Name").classList.add("greska");
        document.querySelector("#PName").classList.remove("hidden");
        document.querySelector("#PName").classList.add("show");
        document.querySelector("#PName").classList.add("Pgreska");
        greske++;
    }else
    {
        document.querySelector("#PName").classList.add("hidden");
        document.querySelector("#Name").classList.remove("greska");
        document.querySelector("#Name").classList.add("dobro");
        greske--;
    }

    // Email provera
    var Email = document.querySelector("#Email").value;
    console.log(Email);
    // var reEmail = /^[a-z]{3,15}(\.[a-z]{3,20})+(\.([1-9][0-9]{0,2}|[12][]0-9){3})\.([01][09]|20)?\@ict\.edu\.rs$/

    var reEmail = /^[a-z][\w\.]+\@[a-z0-9]{3,20}(\.[a-z]{3,5})?(\.[a-z]{2,3})$/
    if(!reEmail.test(Email))
    {
        document.querySelector("#Email").classList.remove("dobro");
        document.querySelector("#Email").classList.add("greska");
        document.querySelector("#PEmail").classList.remove("hidden");
        document.querySelector("#PEmail").classList.add("show");
        document.querySelector("#PEmail").classList.add("Pgreska");
        greske++;
    }else
    {
        document.querySelector("#PEmail").classList.add("hidden");
        document.querySelector("#Email").classList.remove("greska");
        document.querySelector("#Email").classList.add("dobro");
        greske--;
    }

    // TextArea provera

    var textArea = document.querySelector("#textArea").value;
    console.log(textArea);

    if(textArea == "")
    {
        document.querySelector("#textArea").classList.remove("dobro");
        document.querySelector("#textArea").classList.add("greska");
        document.querySelector("#PText").classList.remove("hidden");
        document.querySelector("#PText").classList.add("show");
        document.querySelector("#PText").classList.add("Pgreska");
        greske++;
    }else
    {
        document.querySelector("#PText").classList.add("hidden");
        document.querySelector("#textArea").classList.remove("greska");
        document.querySelector("#textArea").classList.add("dobro");
        greske--;
    }

    // Provera za Select

    var ObjSelect = document.querySelector("#Age");
    var selectProvera = ObjSelect.options[ObjSelect.selectedIndex].value;
    console.log(selectProvera)
    if(selectProvera == "Choose...")
    {
        document.querySelector("#Pselect").classList.remove("hidden");
        document.querySelector("#Pselect").classList.add("show");
        document.querySelector("#Pselect").classList.add("Pgreska");
        greske++;
    }else
    {
        document.querySelector("#Pselect").classList.add("hidden");
        greske--;
    }

    if(greske == -4)
    {
        document.querySelector("#greske").classList.remove("hidden");
        document.querySelector("#greske").classList.add("show");
    }else
    {
        document.querySelector("#greske").classList.remove("show");
        document.querySelector("#greske").classList.add("hidden");
    }
    console.log(greske);
}

