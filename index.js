
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    //set holidays here
		var holidaysObj = {
            "Jan":
            {
                holidays: ["01", "10"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Feb":
            {
                holidays: [],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Mar":
            {
                holidays: ["21"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Apr":
            {
                holidays: ["14-15"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "May":
            {
                holidays: ["30"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Jun":
            {
                holidays: ["20", "27"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Jul": {
                holidays: ["04", "20"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Aug":
            {
                holidays: ["15"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Sep":
            {
                holidays: ["30"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Oct": {
                holidays: ["02"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Nov":
            {
                holidays: ["07", "14"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Dec":
            {
                holidays: ["08", "24-31"],
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },
       }
		var today = new Date(); //create new date
        var yyyy = today.getFullYear();

        function getNumberOfDaysThisMonth (month, year)  {
            return new Date(year, month, 0).getDate()
        }
        function getNumberOfDaysNextMonth (month, year)  {
            return new Date(year, month, 1).getDate()
        }
        var mm = today.getMonth();
        var dd = today.getDate();
        if (dd < 10) dd = '0' + dd; //03
        if (mm < 10) mm = '0' + mm; //09

        var days = getNumberOfDaysThisMonth(mm, yyyy) //number of days

        var month = months[today.getMonth()] //+ 1; // Months start at 0!
        let nextMonthIndex = today.getMonth()+1 
        //console.log(nextMonthIndex)
        if(nextMonthIndex === 12 ){
            nextMonthIndex = 0
        }
        var nextMonth = months[nextMonthIndex] //next month
        //console.log(nextMonth)
        var banner = document.getElementById('banner')
        // console.log(document)
        // var hello = document.getElementById('hello')
        // console.log(hello)
        // var userInput = document.getElementById('user_input')
        // console.log(userInput.value) 
        // hello.innerHTML = hello.innerHTML + " World! "
	
    
       	holidaysObj[nextMonth]?.holidays?.length != 0 ? holidaysObj[nextMonth].holidays.map((day, index) => { //loop through all available holidays
            if (day <= 6) {
                holidaysObj[month].nextMonthHoliday.holiday = day

                let compareableDate = Math.abs(day - 6) //5 - 6 = 1 
                let startDate = getNumberOfDaysThisMonth(today.getMonth()+1, yyyy) - compareableDate; //30 - 1 = 29 
                //console.log("startDate: ", startDate)
                for (let i = 0; i < compareableDate + 1; i++) {
                       true?console.log(true):console.log(false)

                    holidaysObj[month].nextMonthHoliday.announcementDates[`${startDate+i}`] = true
                }
                for (let i = 1; i <= day; i++) { // add days for next month
                    holidaysObj[nextMonth].announcementDates[index]? null: holidaysObj[nextMonth].announcementDates.push({})
                    holidaysObj[nextMonth].announcementDates[index][`0${i}`] = true
                }
            }
        }):null

        holidaysObj[month]?.holidays?.length != 0 ? holidaysObj[month].holidays.map((day, index) => { //loop through all available holidays
            //special case when the holiday is between 1-4 
            if (day <= 6) {
                getNumberOfDaysThisMonth(today.getMonth(), yyyy) //get days in the prev month

                let compareableDate = Math.abs(day - 6) //4 is the day where we want the anouncment to be shown 3 - 1
                let startDate = getNumberOfDaysThisMonth(today.getMonth(), yyyy) - compareableDate; //31 - 1 = 30 

                //console.log("startDate: ", startDate)
                for (let i = 1; i <= day; i++) {
                    holidaysObj[month].announcementDates[index]? null: holidaysObj[month].announcementDates.push({})
                    holidaysObj[month].announcementDates[index][`0${i}`] = true
                }
            }
            if (day.length > 2) {
                // let formattedDay = ``
                let holidayStart = "";
                let holidayEnd="";
                //console.log(day)
                for (let i = 0; i<2; i++) {
                    // console.log(day[i])
                    holidayStart += day[i]
                }
                //console.log("holiday start: ",holidayStart)
                for (let i = 3; i < day.length; i++) {
                    holidayEnd += day[i]
                }
                //console.log("holiday end: ",holidayEnd)
                const difference = holidayStart - 6 // 8 - 4 = 4

                for (let i = difference; i < holidayStart; i++) {
                    // holidaysObj[month].announcementDates[index].push(i < 10 ? `0${i}` : `${i}`)
                    holidaysObj[month].announcementDates[index]? null: holidaysObj[month].announcementDates.push({})
                    holidaysObj[month].announcementDates[index][i < 10 ? `0${i}` : `${i}`] = true
                }
                for (let i = holidayStart; i <= holidayEnd; i++) {
                    // holidaysObj[month].announcementDates[index].push(i < 10 ? `0${i}` : `${i}`)
                    holidaysObj[month].announcementDates[index]? null: holidaysObj[month].announcementDates.push({})
                    holidaysObj[month].announcementDates[index][i < 10 ? `0${i}` : `${i}`] = true

                }    

            } // handle what to show to the user in multiple days holiday 
            var difference = day - 6 // 8 - 4 = 4
            // let formattedDay = ``
            for (let i = difference; i <= day; i++) {
                holidaysObj[month].announcementDates[index]? null: holidaysObj[month].announcementDates.push({})
                // holidaysObj[month].announcementDates[index].push(i < 10 ? `0${i}` : `${i}`)
                holidaysObj[month].announcementDates[index][i < 10 ? `0${i}` : `${i}`] = true

            }
}) : null


        console.log("this month: ", holidaysObj[month])
        console.log("next month: ", holidaysObj[nextMonth])

        var thisMonth = false
        holidaysObj[month].announcementDates.map((date,index)=>{
            if(thisMonth) return //get the first occurence
            if(date[dd]){
                thisMonth = true
                banner.classList.remove('b');
            	banner.classList.add('b2');
                if(holidaysObj[month].holidays[index].length>2){
                   banner.innerHTML = `
						<b>In observance of local holiday</b><br/>
						Our team will be taking days off from <b>${parseInt(mm)+1}/${holidaysObj[month].holidays[index].slice(0,2)}/${yyyy}</b> to <b>${parseInt(mm)+1}/${holidaysObj[month].holidays[index].slice(3,5)}/${yyyy}</b>`
            
            }
            else{
                banner.classList.remove('b');
            	banner.classList.add('b2');
            banner.innerHTML = `
						<b>In observance of local holiday</b><br/>
						Our team will be taking the day off on <b>${parseInt(mm)+1}/${holidaysObj[month].holidays[index]}/${yyyy}</b>`            
           }
        }
        })
        if(thisMonth){
            null
        }
        else{
            if(holidaysObj[month].nextMonthHoliday.announcementDates[dd] === true){
                banner.classList.remove('b');
            	banner.classList.add('b2');
                banner.innerHTML = `<b>In observance of local holiday</b><br/>Our team will be taking the day off on <b>${parseInt(mm)+2}/${holidaysObj[month].nextMonthHoliday.holiday}/${yyyy}</b>` 

            }
        }