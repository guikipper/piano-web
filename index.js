const keys = document.querySelectorAll('.key')

const keyMap = {
"q": "C4",
"w" : "Db4",
"e" : "D4",
"r" : "Eb4",
"t" : "E4",
"y" : "F4",
"u" : "Gb4",
"i" : "G4",
"o" : "Ab4",
"p" : "A4",
"ç" : "Bb4",
"0" : "B4",
"a": "C5",
"s" : "Db5",
"d" : "D5",
"f" : "Eb5",
"g" : "E5",
"h" : "F5",
"j" : "Gb5",
"k" : "G5",
"l" : "Ab5",
"n" : "A5",
"m" : "Bb5",
"," : "B5",
};

document.addEventListener('keydown',(event)=>{

  if(keyMap[event.key]) {
    const note = keyMap[event.key]
    const tecla = document.getElementById(note)
    mouseDown(tecla)
    playSound(note)
  } else {
    console.log('Tecla não mapeada!')
  }
})

document.addEventListener('keyup',(event)=>{ 
  if(keyMap[event.key]) {
    const note = keyMap[event.key]
    const tecla = document.getElementById(note)
    mouseUp(tecla)
  }
})

const mouseDown = (key)=> {

  playSound(key.id)

  if (key.className.includes('black')) {
    key.classList.add('black--pressed')
    return
  }

  key.classList.add('white--pressed')

}

const mouseUp = (key)=> {
  if (key.className.includes('black')) {
    key.classList.remove('black--pressed')
    return
  }

  key.classList.remove('white--pressed')
}

keys.forEach((key)=>{
  key.addEventListener('mousedown',()=>{
    playSound(key.id)
  })
})


function playSound(note) {
  console.log('entrou')
  const audioFile = `./audio/electric_piano_1-mp3/${note}.mp3`

  const audio = new Audio(audioFile);
  audio.play();
}
