//var should contain letters, digits, $ or _ only; cannot be let, class, return function 
var array_questions = [
	{
		statement: "JavaScript variables are containers for storing data values.",
		topic: "javascript",
		sub_topic: "variable",
		answer_key: "option1",
		hint: "https://www.w3schools.com/js/js_variables.asp",
	},
	{
		statement: "JavaScript Object Notation is a syntax for styling HTML elements.",
		topic: "javascript",
		sub_topic: "object",
		answer_key: "option2",
		hint: "https://www.w3schools.com/js/js_json_intro.asp",
    },

   
   var altvid = document.getElementById("https://www.youtube.com/watch?v=jBnzICgYNqA");
   console.log(altvid);

    //mystuff//
    const myVideo = document.getElementById('myVideo');
    const btnPlay = document.getElementById('btnPlay');
    const btnPause = document.getElementById('btnPause');
    const btnStop = document.getElementById('btnStop');
    const timeOut = document.getElementById('timeOut');
    const vidNumOut = document.getElementById('vidNum');
    let timer = null;

    btnPlay.addEventListener('click', vidAction);
    btnPause.addEventListener('click', vidAction);
    btnStop.addEventListener('click', vidAction);
    btnNext.addEventListener('click', nextVideo);
    myVideo.addEventListener('ended', vidEnded);

    //vids
    const vids = ["deathstar.mp4", "skyvid.mp4"]; 
    let vidPlaying = 0;

    function vidAction(event){
        switch(event.target.id){
            case "btnPlay":
                playVideo();
                timer = setInterval(update, 100);
                break;
            case "btnPause":
                myVideo.pause();
                break;
            case "btnStop":
                    myVideo.pause();
                    myVideo.currentTime = 0;
                    break;
        }

    function playVideo(){
        myVideo.play();
        timer = setInterval(update, 100);
    }
    function update (){
        timeOut.innerHTML = "Time: " + myTime(myVideo.currentTime) + "/" + myTime(myVideo.duration);
    }
    function myTime(time) {
        var hr = ~~(time / 3600);
        var min = ~~((time % 3600) / 60);
        var sec = time % 60;
        var sec_min = "";
        if (hr > 0) {
            sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
        }
        sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
        sec_min += "" + Math.round(sec);
        return sec_min;
    }
    function vidEnded(){
        clearInterval(timer);
        timeOut.innerHTML = "Timer: 0";
        nextVideo();
        playVideo();
    }
    function nextVideo(){
        // alt:  if(vidPlaying < vids.length){//
        if(vidPlaying < 3){
            vidPlaying++;
        } else {
            vidPlaying = 0;
        }
        myVideo.src = "vids/" + vids[vidPlaying];
        vidNum.innerHTML = (vidPlaying+1) + "/4";
    }
    }
];

var videos = [
    "https://www.youtube.com/watch?v=jBnzICgYNqA",
    "https://www.youtube.com/watch?v=wkgCed9Hc9s"
];

var array_answers = []; 





console.log(array_questions);
console.log(array_answers);

