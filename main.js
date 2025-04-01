
var vid = [
    "https://www.youtube.com/embed/r6yGC_aF0qc",
    "https://www.youtube.com/embed/1-M4JrFcrNY",
    "https://www.youtube.com/embed/S7cQ3b0iqLo",
    "https://www.youtube.com/embed/xFYQQPAOz7Y",
    "https://www.youtube.com/embed/9XvXF1LrWgA",
    "https://www.youtube.com/embed/9xn0OHEZZ8Q",
    "https://www.youtube.com/embed/22tVWwmTie8",
    "https://www.youtube.com/embed/8CdcCD5V-d8",
    "https://www.youtube.com/embed/gmlKBsPCiUk",
    "https://www.youtube.com/embed/_wN3wl473M0"
    ];
var ee = [
  "https://www.youtube.com/embed/HW67vJWP9VU",
  "https://www.youtube.com/embed/h9MBXvtBrkM",
  "https://www.youtube.com/embed/B5Chm-kCV4k"
]
  
    
    //initialize the variable i to 0
    var i =0;
    function next() { 
       i++;
       if(i == 10)
         {
           i=0;
         }
        document.getElementById("videoo").src = vid[i];
     }
    
    
    