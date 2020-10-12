var speudo = prompt("Quel est votre speudo ?");

var speudoConnexion = document.getElementById("dd")
speudoConnexion.innerHTML = speudo

var questionCourante = 0;

var sondage = document.getElementById("sondage2")




function addHtml(question, reponses){

   var para = document.createElement("p");
   para.innerText = question;
   var form = document.createElement("form");
   reponses.forEach(element => {
      var input = document.createElement("input");
      input.type = 'radio';
      input.name = "choix";
      var label = document.createElement("label");
      label.innerText = element.valeur;
      form.appendChild(input);
      form.appendChild(label);
      input.onclick = ()=> clique(element.isTrue)
   });
   sondage.appendChild(para);
   sondage.appendChild(form);
}



function removeHtml(){
   sondage.innerHTML = "";
}


var playerScore = 0;


function clique(reponsesIsTrue){
   
   if (questionCourante < tableauQuestion.length){
 
      removeHtml();
      addHtml(tableauQuestion[questionCourante].question,tableauQuestion[questionCourante].reponses);
      if(reponsesIsTrue){
         playerScore++
      }

   }else {
      let tableauLongueur = tableauQuestion.length - 1
      alert(speudo + ", vous avez eu " + playerScore*4 + " / " + tableauLongueur*4 + " au questionnaire")
   }
   questionCourante++;

}
addHtml(tableauQuestion[questionCourante].question,tableauQuestion[questionCourante].reponses);
