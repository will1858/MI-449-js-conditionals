var secretButton = document.getElementById('start')

secretButton.addEventListener('click', function () {
  var codeword = window.prompt('You are in a park you hear someone someone scream. What will you do? RUN to help, CALL the police, MIND you business.')
  var odds = 0
  if (codeword === null) {
    window.alert('That is not an option')
  }
  if (codeword.toUpperCase().trim() === 'RUN') {
    var weapon = window.confirm('do you pick up a stick before you go? YES or NO?')
    if (weapon) {
      odds += 0.3
    }
    var choice1 = window.prompt('You choose to be a hero and run to help the person. the voice leads you to an allyway. and you see someone being robbed at gunpoint. What will you do? CALM down the robber? or FIGHT the robber?')
    if (choice1 === null) {
      window.alert('That is not an option')
    }
    if (choice1.toUpperCase().trim() === 'CALM') {
      window.alert('your clever wordplay clamed the robber down and he ran away.')
    } else if (choice1.toUpperCase().trim() === 'FIGHT') {
      var rand = Math.random()
      if (odds && rand) {
        rand += odds
      }
      if (rand < 0.7) {
        window.alert('You were shot and killed')
      } else {
        window.alert('You took the gun away from the robber and detained him until police arived.')
      }
    } else {
      window.alert('That is not an option')
    }
  } else if (codeword.toUpperCase().trim() === 'CALL') {
    window.alert('you call the police')
  } else if (codeword.toUpperCase().trim() === 'MIND') {
    window.alert('you act like you heard nothing')
  } else {
    window.alert('That is not an option')
  }
})
