var Stranice = new Array("Home", "About Guide", "Gallery","About Us", "Contact Us");
var LinkoviStranica = new Array("index.html", "#AboutGuide", "#gallery", "#AboutUs", "#ContactUs");

var DivMeni = document.querySelector("#dinMeni");
console.log(DivMeni)

var ulTag = document.createElement("ul");
ulTag.setAttribute("class", "nav navbar-nav pull-right");


for(let i = 0; i < Stranice.length; i++)
{
    var LiTag = document.createElement("li");
    var aTag = document.createElement("a");

    aTag.innerHTML = Stranice[i];

    aTag.setAttribute("href", LinkoviStranica[i]);
    var link = LinkoviStranica[i];  

    if(link == "index.html")
    {
        LiTag.setAttribute("class","active");
    }
    if(link == "#ContactUs")
    {
        aTag.setAttribute("class","btn");
    }
    LiTag.appendChild(aTag);
    ulTag.appendChild(LiTag);

}
DivMeni.appendChild(ulTag);



