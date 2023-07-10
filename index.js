function openCV_ready(){
    cv["onRuntimeInitialized"]=()=>{
        console.log("OpenVC ready")
        // read an image from img src and cobert into open cv
       let imgMain =cv.imread("main-img") //image in open cv mat format
    

       //
       


       document.getElementById("button-rgb").onclick=function(){
        let imgMain =cv.imread("main-img")
        console.log("RGB BUTTON PRESSED");
        cv.imshow("main-canvas",imgMain);
        imgMain.delete();
       };

       document.getElementById("button-gray").onclick=function(){
        console.log("gray PRESSED");
        let imgMain =cv.imread("main-img")
        let imgGray=imgMain.clone();
         cv.cvtColor(imgMain,imgGray,cv.COLOR_RGBA2GRAY,0);
       cv.imshow("main-canvas",imgGray);
       imgMain.delete();
       imgGray.delete();
       };

       document.getElementById("button-blur").onclick=function(){
        console.log("BLUR BUTTON PRESSED");
        let imgMain =cv.imread("main-img")
        let imgBlur=imgMain.clone();
        let ksize =new cv.Size(49,49);
        cv.GaussianBlur(imgMain,imgBlur,ksize,0)
        cv.imshow("main-canvas",imgBlur);
        imgMain.delete();
        imgBlur.delete();
    };

       document.getElementById("button-canny").onclick=function(){
        console.log("Canny BUTTON PRESSED");
        let imgMain =cv.imread("main-img")
        let imgCanny=imgMain.clone();
       cv.Canny(imgMain,imgCanny,50,100);
       cv.imshow("main-canvas",imgCanny);
       imgMain.delete();
       imgCanny.delete(); 
       };

       //to free the memory allocated
       
      
      
    }
}