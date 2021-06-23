 var video = document.querySelector("#video");
 if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
 }
 var resultb64="";
 function capture() {        
    var canvas = document.getElementById('canvas');     
    var video = document.getElementById('video');
    canvas.width = 200;
    canvas.height = 200;
    canvas.getContext('2d').drawImage(video, 0, 0, 200,200);  
    resultb64=canvas.toDataURL();
    document.getElementById("printresult").innerHTML = canvas.toDataURL();
 }
  document.getElementById("printresult").innerHTML = resultb64;
