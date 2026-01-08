 // Imput varibles and date here
 // Date in form of YYYY/MM/DD
 bDate = '2026/3/13'
 // The zero hour in military time
 bHour = '13'
 // The zero minute
 bMinute = '40'
 //Thx for using Timer32!
 dayDisplay = document.getElementById('Days')
 hourDisplay = document.getElementById('Hours')
 minutesDisplay = document.getElementById('Minutes')
 secodnsDisplay = document.getElementById('seconds')
 lagWarn = alert('WARNING: This website may cause lag to your device!')
 function updatetimer() {
   document.getElementById(':1').innerHTML = ' : '
   document.getElementById(':2').innerHTML = ' : '
   document.getElementById(':3').innerHTML = ' : '
    tDate = new Date()
    cYear = tDate.getFullYear()
    cDay = tDate.getDate()
    cHour = tDate.getHours()
    cMinute = tDate.getMinutes()
    cSeconds = tDate.getSeconds() 
   adate = new Date(bDate)
   adate.setHours(bHour)
   adate.setMinutes(bMinute)
   adate.setSeconds(60)
   aYear = adate.getFullYear()
   aDay = adate.getDate()
   aHour = adate.getHours()
   aMinutes = adate.getMinutes()
   aSeconds = adate.getSeconds()
   daysLeft = aDay - cDay
   hoursLeft = aHour - cHour 
   minutesLeft = aMinutes - cMinute - 2
   secondsLeft = 60 - cSeconds 
   console.log(secondsLeft)
   if (aMinutes - cMinute - 2 < 1) {
      if (aMinutes - cMinute - 2 == 0) {

      }else {
      minutesLeft = 60 + (aMinutes-cMinute - 2)
      }
   }
   if (daysLeft <= 0) {
      daysLeft = '00'
   }
   if (hoursLeft < 1) {
      hoursLeft = '00'
   }
   if (minutesLeft <= 0) {
      minutesLeft = '00'
   }
   if (minutesLeft == 0) {
      if (aSeconds - cSeconds >= 0) {
         secondsLeft = '00'
      }
   }
   console.log(secondsLeft)
   if (daysLeft < 10){
      if (daysLeft == '00') {

      }else {
      daysLeft = "0" + daysLeft
      }
   }
   if (minutesLeft < 10) {
      if (minutesLeft == '00') {

      }else {
      minutesLeft = "0" + minutesLeft
      }
   }
   if (secondsLeft < 10) {
      if (secondsLeft == '00') {

      }else {
      secondsLeft = "0" + secondsLeft
      }
   }
    if (aHour - cHour < 0) {
      if (daysLeft == '00' ) {

      }else {
         hi = aHour - cHour
         daysLeft -= 1
         hoursLeft = 24 + hi
      }

   }
   if (minutesLeft >= bMinute) {
      hoursLeft -= 1
      if (hoursLeft < 1) {
         hoursLeft = '00'
      }
   }
   if (minutesLeft == '60') {
      minutesLeft == '00'
   }
   if (aHour-cHour == '0') {
      if (daysLeft < 0){
      hoursLeft = '23'
      }
   }
   if (hoursLeft < '10') {
      if (hoursLeft == '00') {
         console.log('Changed to 00')
      }else {
      hoursLeft = "0" + hoursLeft
      console.log('Changed to 0+')
      }
   }
   if (adate.getMonth() - tDate.getMonth() > 0) {
      var multi = adate.getMonth() - tDate.getMonth()
      daysLeft = 'COUNTDOWN WILL RELEASE IN MARCH'
      hoursLeft = ''
      minutesLeft = ''
      secondsLeft = ''
      dayDisplay.style.fontSize = '4'
      hourDisplay.style.display = 'none'
      minutesDisplay.style.display = 'none'
      secodnsDisplay.style.display = 'none'
      document.getElementById(':1').display = 'none'
      document.getElementById(':2').display = 'none'
      document.getElementById(':3').display = 'none'
      clearInterval(timer)
   }
   console.log(secondsLeft)
   dayDisplay.innerHTML = daysLeft
   hourDisplay.innerHTML = hoursLeft
   minutesDisplay.innerHTML = minutesLeft
   secodnsDisplay.innerHTML = secondsLeft
   if (aDay - cDay <= 0) {
      if (aHour - cHour <= 0) {
         if (aMinutes - cMinute - 2 < 0) {
               clearInterval(timer)
               timerComplete()
   }
   }
   }
 }
const timer = setInterval(updatetimer, 1000)
function timerComplete() {
   clearInterval(timer)
   dayDisplay.innerHTML = '00'
   hourDisplay.innerHTML = '00'
   minutesDisplay.innerHTML = '00'
   secodnsDisplay.innerHTML = '00'
   document.getElementById('confetti').style.display = ''
}
 function storage() {
  console.log(cYear)
    console.log(cDay)
    console.log(cHour)
    console.log(cMinute)
    console.log(cSeconds)
    console.log(adate.getFullYear())
   console.log(adate.getDate())
   console.log(adate.getHours())
   console.log(adate.getMinutes())
    
 }