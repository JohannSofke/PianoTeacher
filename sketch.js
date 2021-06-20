/* eslint-disable no-undef, no-unused-vars */

let adur
let asdur
let bdur
let cdur
let ddur
let desdur
let edur
let esdur
let fdur
let fisdur
let gdur
let hdur

let amoll
let asmoll
let bmoll
let cmoll
let dmoll
let desmoll
let emoll
let esmoll
let fmoll
let fismoll
let gmoll
let hmoll

let chords = [
  'C-Dur',
  'Des-Dur',
  'D-Dur',
  'Es-Dur',
  'E-Dur',
  'F-Dur',
  'Fis-Dur',
  'G-Dur',
  'As-Dur',
  'A-Dur',
  'B-Dur',
  'H-Dur',
  'C-Moll',
  'Des-Moll',
  'D-Moll',
  'Es-Moll',
  'E-Moll',
  'F-Moll',
  'Fis-Moll',
  'G-Moll',
  'As-Moll',
  'A-Moll',
  'B-Moll',
  'H-Moll',
]
let thisChord
let backgroundColor = '#01DFD7'
let textColor = '#1D2333'
let speak = false
let assetsPath =
  'https://cdn.jsdelivr.net/gh/JohannSofke/PianoTeacher@master/assets/'

function preload() {
  soundFormats('mp3')
  adur = loadSound(assetsPath + 'a-dur')
  asdur = loadSound(assetsPath + 'as-dur')
  bdur = loadSound(assetsPath + 'b-dur')
  cdur = loadSound(assetsPath + 'c-dur')
  ddur = loadSound(assetsPath + 'd-dur')
  desdur = loadSound(assetsPath + 'des-dur')
  edur = loadSound(assetsPath + 'e-dur')
  esdur = loadSound(assetsPath + 'es-dur')
  fdur = loadSound(assetsPath + 'f-dur')
  fisdur = loadSound(assetsPath + 'fis-dur')
  gdur = loadSound(assetsPath + 'g-dur')
  hdur = loadSound(assetsPath + 'h-dur')

  amoll = loadSound(assetsPath + 'a-moll')
  asmoll = loadSound(assetsPath + 'as-moll')
  bmoll = loadSound(assetsPath + 'b-moll')
  cmoll = loadSound(assetsPath + 'c-moll')
  dmoll = loadSound(assetsPath + 'd-moll')
  desmoll = loadSound(assetsPath + 'des-moll')
  emoll = loadSound(assetsPath + 'e-moll')
  esmoll = loadSound(assetsPath + 'es-moll')
  fmoll = loadSound(assetsPath + 'f-moll')
  fismoll = loadSound(assetsPath + 'fis-moll')
  gmoll = loadSound(assetsPath + 'g-moll')
  hmoll = loadSound(assetsPath + 'h-moll')
}

function setup() {
  createCanvas(400, 400)
  background(backgroundColor)
  fill(textColor)

  textStyle(BOLD)
  textAlign(CENTER, CENTER)
  textSize(20)
  text('Tippe um einen neuen Akkord zu sehen', width / 2, height / 2)
}

function draw() {
  if (mouseIsPressed) {
    speak = true

    background(backgroundColor)
    fill(textColor)

    textSize(80)
    textAlign(RIGHT, CENTER)
    thisChord = random(chords)
    text(thisChord, width / 1.22, height / 2)
  } else {
    if (thisChord && speak) {
      speak = false

      switch (thisChord) {
        case 'A-Dur':
          adur.play()
          break
        case 'As-Dur':
          asdur.play()
          break
        case 'B-Dur':
          bdur.play()
          break
        case 'C-Dur':
          cdur.play()
          break
        case 'D-Dur':
          ddur.play()
          break
        case 'Des-Dur':
          desdur.play()
          break
        case 'E-Dur':
          edur.play()
          break
        case 'Es-Dur':
          esdur.play()
          break
        case 'F-Dur':
          fdur.play()
          break
        case 'Fis-Dur':
          fisdur.play()
          break
        case 'G-Dur':
          gdur.play()
          break
        case 'H-Dur':
          hdur.play()
          break

        case 'A-Moll':
          amoll.play()
          break
        case 'As-Moll':
          asmoll.play()
          break
        case 'B-Moll':
          bmoll.play()
          break
        case 'C-Moll':
          cmoll.play()
          break
        case 'D-Moll':
          dmoll.play()
          break
        case 'Des-Moll':
          desmoll.play()
          break
        case 'E-Moll':
          emoll.play()
          break
        case 'Es-Moll':
          esmoll.play()
          break
        case 'F-Moll':
          fmoll.play()
          break
        case 'Fis-Moll':
          fismoll.play()
          break
        case 'G-Moll':
          gmoll.play()
          break
        case 'H-Moll':
          hmoll.play()
          break
      }
    }
  }
}
