var SlikeSrc = new Array("assets/images/slika1.jpg","assets/images/slika2.jpg","assets/images/slika3.jpg","assets/images/slika4.jpg","assets/images/slika5.jpg","assets/images/slika6.jpg");
var SlikeNaslov = new Array("Ledja","Ruke","Stomak","Noge","Grudi","Kondicija");

var gallerija = document.querySelector("#gallery");

for(let i = 0; i < 2; i++)
{
    var GalerijaRow = document.createElement("div");
    GalerijaRow.setAttribute("class","row");

    if(i == 0)
    {
        for(let j = 0; j < 3; j++)
        {
            var RowDiv = document.createElement("div");
            RowDiv.setAttribute("class","img col-sm-3")
            var img = document.createElement("img");
            img.setAttribute("src",SlikeSrc[j]);
            img.setAttribute("class","card-img-top");
            img.setAttribute("alt",SlikeNaslov[j]);
            RowDiv.classList.add("imgSirina");
            
            RowDiv.appendChild(img);
            GalerijaRow.appendChild(RowDiv);
        }
    }else
    {
        for(let j = 3; j < 6; j++)
        {
            var RowDiv = document.createElement("div");
            RowDiv.setAttribute("class","img col-sm-3")
            var img = document.createElement("img");
            img.setAttribute("src",SlikeSrc[j]);
            img.setAttribute("class","card-img-top");
            RowDiv.classList.add("imgSirina");
            img.setAttribute("alt",SlikeNaslov[j]);

            RowDiv.appendChild(img)
    
            GalerijaRow.appendChild(RowDiv);
            
        }
    }



   gallerija.appendChild(GalerijaRow)
}