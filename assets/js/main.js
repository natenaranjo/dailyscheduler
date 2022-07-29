// Store event data in an object.
const eventData = {
    Date: "",
    Time: "",
    Location: "",
    Subject: "",
    Description: "" 
};

function daySchedule() {
    // builds the day schedule by hours in a day.
    const divMain = document.querySelector('#schedule-box');
    const divTimeBox = document.createElement('div');
        divTimeBox.className = "row d-flex flex-column p-1";
        divTimeBox.id = "time-box";

    let dailyHours = 24;
    for (let hours = 0; hours < dailyHours; hours++){
        const divTBRow = document.createElement('div');
            divTBRow.className = "col-sm p-1 d-flex justify-content-between align-items-end rounded";
            divTBRow.id = "time-box-row";
        const TBRowH6 = document.createElement('h6');
        if(hours < 12) {
            TBRowH6.textContent = hours + " am";
            TBRowH6.id = hours + " am";
        } else {
            TBRowH6.textContent = hours + " pm";
            TBRowH6.id = hours + " pm";
        }
        divTBRow.appendChild(TBRowH6);
        divTimeBox.appendChild(divTBRow);
        divMain.appendChild(divTimeBox);
    }

    // Click event on a row.
    const onClick = function() {
        console.log(this.id, this.innerHTML);
    }
 
}

daySchedule();