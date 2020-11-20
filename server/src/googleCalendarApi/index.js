function googleCalendar(req){
    const {google} = require('googleapis')
    const {OAuth2} = google.auth
    const oAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.SECRET_KEY)

    oAuth2Client.setCredentials({
        refresh_token: process.env.REFRESH_TOKEN
    })

    const calendar = google.calendar({version: 'v3', auth: oAuth2Client})
    const eventStartTime = new Date()
    eventStartTime.setDate(eventStartTime.getDate() + 2)

    const eventEndTime = new Date()
    eventEndTime.setDate(eventEndTime.getDate() + 2)
    eventEndTime.setMinutes(eventEndTime.getMinutes() + 60)

    const event = {
        summary: req.body.todo,
        description: req.body.description,
        colorId: 6,
        start: {
            dateTime: eventStartTime
        },
        end: {
            dateTime: eventEndTime
        },
        attendees: {
            email: 'cyphermike3@gmail.com'
        }
    }

    calendar.freebusy.query({
        resource: {
            timeMin: eventStartTime,
            timeMax: eventEndTime,
            items: [{id: 'primary'}]
        }
    }, (err, res)=>{
        if (err) return console.log('Free busy query error: ', err)
        
        const eventArr = res.data.calendars.primary.busy
        if (eventArr.length === 0){
            return calendar.events.insert({
                calendarId: 'primary', resource: event},
                err =>{
                    if(err) return console.log('Error creating Calendar Event:', err)
                    return console.log('Event Created Successfully')
                }
            )
        }
        return console.log('Sorry my schedule is busy at the moment')
    })

}
module.exports = googleCalendar