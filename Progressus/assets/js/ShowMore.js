var ShwMore = document.querySelector("#ShwMore");
console.log(ShwMore);

var Ireci = new Array ("New routine","Fat-free","Healthy","Happy body, Happy mind");
var Tekst = ["Your gym workout routine must be set in sync with your purpose. Whether you plan to shed the extra weight gained during the work-from-home era, or the purpose is to tone your body, it is important that you begin in a planned manner.","Losing body fat can be a challenging task, often requiring hard work, patience, and dedication. Although many fad diets and fat-burning supplements promise quick results, modifying your diet, lifestyle, and exercise routine is the most effective way to reach and maintain a healthy weight.","You may only be starting to take the first steps on the road to fitness. Or you may be excited about exercise and want to improve your results. Either way, a well-rounded fitness training plan is essential.","Exercising can make a huge difference to your mood, especially when you’re feeling depressed, anxious, or stressed out. It increases your endorphin and serotonin levels, which makes you feel more positive and relieves negative emotions. "];
var TekstSkriveno = ["Everyone has different reasons for joining a gym. And lots of people are worried about using the equipment if they’ve never worked out in a gym before. These beginner gym workouts are ideal for various goals, whether you want to lose some weight or burn fat, build muscle and strength or improve your fitness. And don’t forget, your gym membership will include an induction with an expert personal trainer, so make the most of this time with them. Gym staff are really helpful and friendly so they can show you how to do the exercises and answer any questions.","Dietary fats offer several benefits that contribute to a healthful lifestyle. Long-term satiation, an improved cholesterol profile and reduced LDL cholesterol are just a few of the benefits found in 'healthy' lipids such as polyunsaturated and monounsaturated fats. That said, fats' caloric density and lack of vitamin and mineral content makes them tough to fit in a restricted-calorie diet, making the inclusion of fruit, vegetables and lean proteins integral to a balanced nutrition profile.","Worried about heart disease? Hoping to prevent high blood pressure? No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, the 'good' cholesterol, and it decreases unhealthy triglycerides. This one-two punch keeps your blood flowing smoothly, which decreases your risk of cardiovascular diseases.","As The Happiness Warrior there’s a question that I find myself always coming back to: “how do we build a whole and happy being when we don’t understand how the pieces fit together?” Taking better care of ourselves and understanding how our bodies work sounds intuitive but when I look at the world around me, I see so much unnecessary suffering that comes when we neglect the connection between our mental and physical well-being."];
var PSkrivId = ["SkrivenoNR","SkrivenoFF","SkrivenoH","SkrivenoHH"];
var ButtonId = ["PrikaziViseNR","PrikaziViseFF","PrikaziViseH","PrikaziViseHH"]
var ISadrz = ["fa fa-cogs fa-5","fa fa-flash fa-5","fa fa-heart fa-5","fa fa-smile-o fa-5"];
var Row = document.createElement("div");
Row.setAttribute("class","row");
var tekst = "";
for(let i = 0; i < 4; i++)
{
    var classCol = document.createElement("class");
    classCol.setAttribute("class","col-md-3 col-sm-6 highlight");
    var divH = document.createElement("div");
    divH.setAttribute("class","h-caption");
    var H4 = document.createElement("h4");
    var Itag = document.createElement("i");
    Itag.setAttribute("class",ISadrz[i]);
    var divText = document.createElement("div");
    divText.setAttribute("class","h-body text-center");
    var pTag = document.createElement("p");
    pTag.innerHTML = Tekst[i];
    var PtagSkriveno = document.createElement("p");
    PtagSkriveno.setAttribute("id",PSkrivId[i]);
    PtagSkriveno.innerHTML = TekstSkriveno[i];
    var button = document.createElement("button");
    button.setAttribute("type","button");
    button.setAttribute("class","btn btn-dark");
    button.setAttribute("id",ButtonId[i]);
    button.innerHTML = "show more";
    var H4tekst = document.createTextNode(Ireci[i]);

    divText.appendChild(pTag);
    divText.appendChild(PtagSkriveno);
    divText.appendChild(button);
    H4.appendChild(Itag);
    H4.appendChild(H4tekst)
    divH.appendChild(H4);
    classCol.appendChild(divH);
    classCol.appendChild(divText);
    Row.appendChild(classCol);
}

console.log(Row);
ShwMore.appendChild(Row);