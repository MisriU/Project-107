function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/gs-4P9zT_/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else{
        document.getElementById("result_label").innerHTML = "I can hear- " + results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy- " + (results[0].confidence*100).toFixed(2) + "%";
    }

}
