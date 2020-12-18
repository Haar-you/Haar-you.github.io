
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();

const analyser = audioContext.createAnalyser();

const input = document.getElementById("input");
const audio = document.getElementById("audio");

input.addEventListener("change", function() {
    if(input.files.length >= 1){
        const file = input.files[0];
        const fileUrl = window.URL.createObjectURL(file);
        audio.src = fileUrl;
    }
});

window.addEventListener("load", function() {
    if(input.files.length >= 1){
        const file = input.files[0];
        const fileUrl = window.URL.createObjectURL(file);
        audio.src = fileUrl;
    }
});

const source = audioContext.createMediaElementSource(audio);

source.connect(analyser);
analyser.connect(audioContext.destination);


const canvas = document.getElementById("visualizer");
const canvasContext = canvas.getContext("2d");

function visualize() {
    analyser.fftSize = 512;

    const len = analyser.fftSize / 2;
    let data = new Uint8Array(len);
    analyser.getByteFrequencyData(data);

    const width = canvas.width;
    const height = canvas.height;

    canvasContext.clearRect(0, 0, width, height);

    canvasContext.fillStyle = "rgb(255, 255, 255)";
    canvasContext.fillRect(0, 0, width, height);

    for(var i = 0; i < len; ++i) {
        canvasContext.fillStyle = `hsl(${i / len * 360}, 100%, 60%)`;

        canvasContext.beginPath();

        const value = (data[i] / 256) * (height / 2);

        const cx = width / 2;
        const cy = height / 2;

        const x = Math.cos(i / len * (Math.PI * 2)) * value + cx;
        const y = Math.sin(i / len * (Math.PI * 2)) * value + cy;

        const x2 = Math.cos((i + 1) / len * (Math.PI * 2)) * value + cx;
        const y2 = Math.sin((i + 1) / len * (Math.PI * 2)) * value + cy;


        canvasContext.moveTo(cx, cy);
        canvasContext.lineTo(x, y);
        canvasContext.lineTo(x2, y2);

        canvasContext.fill();
    }

}

setInterval(visualize, 100);

