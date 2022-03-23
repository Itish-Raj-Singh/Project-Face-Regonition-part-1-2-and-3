Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    
     Webcam.attach('#camera');
    
     function take_snapshot(){
       Webcam.snap(function(data_uri){
           document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
       });
      }
    
      console.log("ml5 version" , ml5.verion);
    
    camera = document.getElementById("camera");
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3aTnxnbrI/model.json',modelloaded)
function modelloaded(){
    console.log("modelloaded");
}
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img ,gotResult);
  }
   function gotResult(error , result){
     if(error){
     console.error(error);
    }
    else{
      console.log(result);
      document.getElementById("results_of_object").innerHTML = result[0].label;
      document.getElementById("results_of_Accuracy").innerHTML= result[0].confidence.toFixed(3);
    }
    }