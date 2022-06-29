function generateColors() {
  let HRandom = Math.random()
  let h = Math.floor(HRandom * 360)
  let SRandom = Math.random()
  let s = Math.floor(SRandom * 100)
  let BRandom = Math.random()
  let b = Math.floor(BRandom * 100)

  console.log(h)
  console.log(s)
  console.log(b)

  let corTres = document.getElementById('color3')
  corTres.style.background = 'hsl(' + h + ', ' + s + '%, ' + b + '%)'
  let textColor3 = document.getElementById('txtColor3')
  textColor3.textContent = 'hsl(' + h + ', ' + s + '%, ' + b + '%)'

  // cor 1
  let s1 = s + 10
  if (s1 > 100) {
    s1 = 100
  }
  let b1
  if (b >= 50) {
    b1 = b - 30
  } else {
    b1 = b + 30
  }

  let corUm = document.getElementById('color1')
  corUm.style.background = 'hsl(' + h + ', ' + s1 + '%, ' + b1 + '%)'
  let textColor1 = document.getElementById('txtColor1')
  textColor1.textContent = 'hsl(' + h + ', ' + s1 + '%, ' + b1 + '%)'

  // cor 2
  let s2 = s - 10
  if (s === 0) {
    s2 = 0
  }
  let b2 = b + 30
  if (b2 > 100) {
    b2 = 100
  }

  let corDois = document.getElementById('color2')
  corDois.style.background = 'hsl(' + h + ', ' + s2 + '%, ' + b2 + '%)'
  let textColor2 = document.getElementById('txtColor2')
  textColor2.textContent = 'hsl(' + h + ', ' + s2 + '%, ' + b2 + '%)'

  // cor 4
  let h4
  if (h >= 180) {
    h4 = h - 180
  } else {
    h4 = h + 180
  }
  let s4 = s + 20
  if (s4 > 100) {
    s4 = 100
  }

  let corQuatro = document.getElementById('color4')
  corQuatro.style.background = 'hsl(' + h4 + ', ' + s4 + '%, ' + b1 + '%)'
  let textColor4 = document.getElementById('txtColor4')
  textColor4.textContent = 'hsl(' + h4 + ', ' + s4 + '%, ' + b1 + '%)'

  // cor 5
  let corCinco = document.getElementById('color5')
  corCinco.style.background = 'hsl(' + h4 + ', ' + s + '%, ' + b + '%)'
  let textColor5 = document.getElementById('txtColor5')
  textColor5.textContent = 'hsl(' + h4 + ', ' + s + '%, ' + b + '%)'
}

function btnAction() {
  generateColors()
}
