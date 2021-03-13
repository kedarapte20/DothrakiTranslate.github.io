var btn = document.querySelector("#btn-transalte");
var txtinput = document.querySelector("#input-text");
var outputDiv = document.querySelector("#output-text");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslatedURL(input)
{
    return serverURL + "?" + "text=" + input
}
function errorHandler(error){
     console.log("error occured! ", error )
     alert("server is down! try again after some time")
}

function clickHandler() {
     //input
     var inputText = txtinput.value;
     
     //processing
     fetch(getTranslatedURL(inputText))
     .then(response=> response.json())
     .then(json => {
          var translatedText= json.contents.translated;
          outputDiv.innerText= translatedText;//output
          })
     .catch(errorHandler)
};

btn.addEventListener("click", clickHandler);