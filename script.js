   let pastDates = true, availableDates = false, availableWeekDays = false
            
            let calendar = new VanillaCalendar({
                selector: "#myCalendar",
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                onSelect: (data, elem) => {
                    console.log(data, elem)
                }
            })
            
            let btnPastDates = document.querySelector('[name=pastDates]')
            btnPastDates.addEventListener('click', () => {
                pastDates = !pastDates
                calendar.set({pastDates: pastDates})
                btnPastDates.innerText = `${(pastDates ? 'Disable' : 'Enable')} past dates`
            })
            
            let btnAvailableDates = document.querySelector('[name=availableDates]')
            btnAvailableDates.addEventListener('click', () => {
                availableDates = !availableDates
                availableWeekDays = false
                btnAvailableDates.innerText = `${(availableDates ? 'Clear available dates' : 'Set available dates')}`
                btnAvailableWeekDays.innerText = 'Set available weekdays'
                if (!availableDates) {
                    calendar.set({availableDates: [], datesFilter: false})
                    return
                }
                let dates = () => {
                    let result = []
                    for (let i = 1; i < 30; ++i) {
                        if (i % 2) continue
                        let date = new Date(new Date().getTime() + (60 * 60 * 24 * 1000) * i)
                        result.push({date: `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}`})
                    }
                    return result
                }
                calendar.set({availableDates: dates(), availableWeekDays: [], datesFilter: true})
            })
            
            let btnAvailableWeekDays = document.querySelector('[name=availableWeekDays]')
            btnAvailableWeekDays.addEventListener('click', () => {
                availableWeekDays = !availableWeekDays
                availableDates = false
                btnAvailableWeekDays.innerText = `${(availableWeekDays ? 'Clear available weekdays' : 'Set available weekdays')}`
                btnAvailableDates.innerText = 'Set available dates'
                if (!availableWeekDays) {
                    calendar.set({availableWeekDays: [], datesFilter: false})
                    return
                }
                let days = [{
                    day: 'monday'
                }, {
                    day: 'tuesday'
                }, {
                    day: 'wednesday'
                }, {
                    day: 'friday'
                }]
                calendar.set({availableWeekDays: days, availableDates: [], datesFilter: true})
            })
