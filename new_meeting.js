let meeting_list = {
    day: 'Monday',
    meetingPending: 0,
    meetingDone: 0,
    
    add_meeting: function(num){
    this.meetingPending = this.meetingPending + num
    this.meetingDone = num - this.meetingPending
    console.log(this.meetingPending)
    },                                                 //declaring 

    summary: function(){
        console.log(`you have ${this.meetingPending} meetings today`)
        console.log(`you have completed ${this.meetingDone} meetings today`)
    },                                                 //to op the meeting

}


meeting_list.add_meeting(5)
meeting_list.summary()




//meeting_list(5)
//console.log(meeting_list.summary())