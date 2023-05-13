const endDate = "25 May 2023 10:00 AM"

document.getElementById("endDate").innerText = endDate;
 const inputs = document.querySelectorAll("input");
const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
   
    if (diff < 0) return;
    
    //convert in days
    inputs[0].value = (Math.floor(diff/ 3600 / 24));
     //convert in Hours
    inputs[1].value = (Math.floor(diff / 3600) % 24);
     //convert in mintues
    inputs[2].value = (Math.floor(diff / 3600));
     //convert in Seconds
     inputs[3].value = (Math.floor(diff) % 60);

   
}

//intial call
clock()

// 1 day = 24 hours
// 1 hour 60 mints
// 60 min = 3600 sec

setInterval(
    () => {
        clock()
    },
    1000
)