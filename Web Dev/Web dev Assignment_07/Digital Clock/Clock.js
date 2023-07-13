function updateTime() {
    var dateInfo = new Date();
  
    /* time */
    var hr,
      _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
      sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
      ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
  
    // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
    if (dateInfo.getHours() == 0) {
      hr = 12;
    } else if (dateInfo.getHours() > 12) {
      hr = dateInfo.getHours() - 12;
    } else {
      hr = dateInfo.getHours();
    }
  // Add to time format
  
    var currentTime = hr + ":" + _min + ":" + sec;
  
  
  
  
    // AM/ PM options 
  
    document.getElementsByClassName("hms")[0].innerHTML = currentTime;
    document.getElementsByClassName("ampm")[0].innerHTML = ampm;
};
   
/*  Add Date options */
    
// print time and date once, then update them every second
updateTime();
setInterval(function() {
updateTime()
}, 1000);