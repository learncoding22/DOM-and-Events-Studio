// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    console.log('window loaded');
    const takeoff = document.getElementById("takeoff");
    takeoff.addEventListener('click', function () {
        readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyForTakeoff) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            currentHeight = document.getElementById("spaceShuttleHeight").innerHTML;
            updatedHeight = parseInt(currentHeight) + 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = updatedHeight;
        }
    });

    const landing = document.getElementById("landing");
    landing.addEventListener('click', function () {
        landShuttle = window.alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        document.getElementById("rocket").style = "position:absolute; left:40%";

    });

    const abort = document.getElementById("missionAbort");
    abort.addEventListener('click', function () {
        abortMission = window.confirm('Confirm that you want to abort the mission.');
        if (abortMission) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            document.getElementById("rocket").style = "position:absolute; left:40%";
        }
    });

    document.getElementById("rocket").style = "position:absolute; left:40%";
    
    const left = document.getElementById("left");
    left.addEventListener('click', function () {
        document.getElementById("rocket").style.left = (parseInt(document.getElementById("rocket").style.left) - 3) + "%";
        console.log(document.getElementById("rocket").style.left);
    });

    const right = document.getElementById("right");
    right.addEventListener('click', function () {
        document.getElementById("rocket").style.left = (parseInt(document.getElementById("rocket").style.left) + 3) + "%";
        console.log(document.getElementById("rocket").style.left);
        // if (document.getElementById("flightStatus").innerHTML === "Shuttle in flight.") {
        //     document.getElementById("rocket").style.right = "0px"
        //     currentPosition = document.getElementById("rocket").style.right;
        //     console.log('Position: ', currentPosition);
        // } else {
        //     window.alert("The shuttle must be in flight to use these controls.")
        // }
    });


    const up = document.getElementById("up");
    up.addEventListener('click', function () {
        currentHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        increasedHeight = parseInt(currentHeight) + 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = increasedHeight;
    });

    const down = document.getElementById("down");
    down.addEventListener('click', function () {
        currentHeight = document.getElementById("spaceShuttleHeight").innerHTML;
        decreasedHeight = parseInt(currentHeight) - 10000;

        if (decreasedHeight > 0) {
            document.getElementById("spaceShuttleHeight").innerHTML = decreasedHeight;
        } else {
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }

    });
});