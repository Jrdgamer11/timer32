 // Imput varibles and date here
 // Date in form of YYYY/MM/DD
 bDate = '2025/12/19'
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
   if (daysLeft <= 0) {
      daysLeft = '00'
   }
   if (hoursLeft <= 0) {
      hoursLeft = '00'
   }
   if (minutesLeft <= 0) {
      minutesLeft = '00'
   }
   if (minutesLeft == 0) {
      if (aSeconds - cSeconds <= 0) {
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
   if (hoursLeft < 10) {
      if (hoursLeft == '00') {

      }else {
      hoursLeft = "0" + hoursLeft
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
   console.log(secondsLeft)
   dayDisplay.innerHTML = daysLeft
   hourDisplay.innerHTML = hoursLeft
   minutesDisplay.innerHTML = minutesLeft
   secodnsDisplay.innerHTML = secondsLeft
   if (aDay - cDay <= 0) {
      if (aHour - cHour <= 0) {
         if (aMinutes - cMinute - 2 < 0) {
               clearInterval(timer)
               setZeros()
   }
   }
   }
 }
const timer = setInterval(updatetimer, 1000)
function setZeros() {
   dayDisplay.innerHTML = '00'
   hourDisplay.innerHTML = '00'
   minutesDisplay.innerHTML = '00'
   secodnsDisplay.innerHTML = '00'
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