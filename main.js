const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

var phrases = [
    'Não tentes ser bem-sucedido, tenta antes ser um homem de valor.', 
    'Seu intelecto pode se confundir, mas suas emoções nunca mentirão para você.', 
    'A imaginação é mais importante que o conhecimento.',
    'Se alguém está tão cansado que não possa te dar um sorriso deixa-lhe o teu.',
    'Se você pode sonhar, você pode realizar.'
]

function handleCookie () {
    var phrase = phrases[Math.floor(Math.random()*phrases.length)];
     console.log(phrase)

    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 p").innerText = phrase;
}

function reset() {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")


}