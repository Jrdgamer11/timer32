 bob = 0
        bobo = 0
        daydisplay = document.getElementById('Days')
        hourdisplay = document.getElementById('Hours')
        minutesdisplay = document.getElementById('Minutes')
        secodnsdisplay = document.getElementById('seconds')
        function timerupdate() {
            date = new Date()
            year = date.getFullYear()
            day = date.getDate()
            hours = date.getHours()
            minutes = date.getMinutes()
            seconds = date.getSeconds()
            targetdate = new Date("2025-12-20")
            targetdate.setMinutes(30)
            targetdate.setSeconds(0)
            targetdate.setHours(13)
            targetday = targetdate.getDate()
            targetminutes = targetdate.getMinutes()
            targethours = targetdate.getHours()
            targetseconds = 60
            daysuntill = targetday - day
            afterhours = hours - targethours
            if (bobo == 0) {
            hoursuntill = targethours - hours 
            }
            if (bobo == 1) {
                hoursuntill = 24 - afterhours 
            }
            if (hours > 16) {
                daysuntill -= 1
            }
            minutesuntill = 59 - minutes - 30
            secondsuntill = 60 - seconds
            daydisplay.innerHTML = daysuntill
            hourdisplay.innerHTML = hoursuntill
            minutesdisplay.innerHTML = minutesuntill
            secodnsdisplay.innerHTML = secondsuntill
            if (hoursuntill < 0) {
                daysuntill -= 1
                bobo = 1
            }

            if (daysuntill <= 0) {
               if (hoursuntill <= 0) {
                if (minutesuntill <= 0) {
                    if (secondsuntill <= 0) {
                        bob = 1
                        daydisplay.innerHTML = 0
                        hourdisplay.innerHTML = 0
                        minutesdisplay.innerHTML = 0
                        secodnsdisplay.innerHTML = 0

                    }
                }
               }
            }

            
            
        }
        function update() {
                if (bob == 0) {
                timerupdate()
                }
                setInterval(update, 300)
                if (bob == 1) {
                    alert("YAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAY!")
                }
            }
            date = new Date()
            day = date.getDate()

            if (day > 15 ) {
                bob = 1
                        daydisplay.innerHTML = 0
                        hourdisplay.innerHTML = 0
                        minutesdisplay.innerHTML = 0
                        secodnsdisplay.innerHTML = 0
                        alert("YAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAYAY!")
            }
            else {
                update()
            }
        
