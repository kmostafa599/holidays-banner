# Holidays Banner
Holidays Banner is an auto holiday Announcement System based on holidays that are set by the user 

## Holidays Object
You can change holidays array in every month of this object to auto-generate the banner 
```
var holidaysObj = {
            "Jan":
            {
                holidays: ["01", "10"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Feb":
            {
                holidays: [], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Mar":
            {
                holidays: ["21"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Apr":
            {
                holidays: ["14-15"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "May":
            {
                holidays: ["30"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Jun":
            {
                holidays: ["20", "27"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Jul": {
                holidays: ["04", "20"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Aug":
            {
                holidays: ["15"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Sep":
            {
                holidays: [], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Oct": {
                holidays: ["17"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Nov":
            {
                holidays: ["07", "14"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },

            "Dec":
            {
                holidays: ["08", "24-31"], // set holidays here (change this array only)
                announcementDates: [{}],
                nextMonthHoliday:{
                    holiday:"",
                    announcementDates :{

                    }
                }
            },
       }
```
there are three cases in which this object can be manipulated 

## One day holiday
You can add one day by adding a string to the holidays array containing the desired day ie:
 `holidays: ["15"]`
This will add day 15 as the holiday

## Two days holiday
If there is more than one day in a month you can add more than one string to the array ie:`holidays: ["07", "14"]`
## Interval
  If the holidays are in interval you can add `-` between the two days ie:
  `holidays: ["14-18"]` this will generate the banner for days 14 to day 18
