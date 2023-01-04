let allKey=document.querySelectorAll('.key');

function addSounds(newUrl){
    // console.log(allKey)
    new Audio(newUrl).play()
}
allKey.forEach((pianoKey, i) => {
    const newUrl='audio/key-' + (i+1) + '.mp3'
    pianoKey.addEventListener('click', () => addSounds(newUrl))
});