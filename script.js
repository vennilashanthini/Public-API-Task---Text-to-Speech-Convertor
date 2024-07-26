const textSpace = document.querySelector(".textarea");

const textToSpeechButton = document.querySelector(".textToSpeechBtn");

const speakerIcons = document.querySelector(".speakerIcon");

let speaking = true;

const textToSpeak = () => {
    const synth = window.speechSynthesis;
    const text = textSpace.value;

    if(!synth.speaking && text){
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    if(synth.speaking && speaking) {
        textToSpeechButton.innerText = "Pause";
        synth.resume();
        speaking = false;
        speakerIcons.innerHTML = "&#128266;";
    }else{
        textToSpeechButton.innerText = "Resume";
        synth.pause();
        speaking = true;
        speakerIcons.innerHTML ="&128264;";
    }

    setInterval(() => {
        if(!synth.speaking && !speaking){
            speaking = true;
            textToSpeechButton.innerText = "Text to Speech";
    }
   

    });

};

textToSpeechButton.addEventListener("click",textToSpeak);
