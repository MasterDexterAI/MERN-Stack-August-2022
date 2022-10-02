window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const s = new SpeechRecognition();

// console.log(s);

s.lang = 'en-US'
s.interimResult = true


const p = document.createElement('p');
const d = document.querySelector('.words')

d.appendChild(p);


s.addEventListener('result', e => {

    let transcript = Array.from(e.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join(" ");


    // console.log(e);

    p.textContent = transcript;

    if(e.results[0].isFinal){
        const p = document.createElement('p');
        d.appendChild(p)
    }
    
    console.log(transcript);

})

s.addEventListener('end', s.start)

s.start()
