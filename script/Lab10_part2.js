
var id=null;
var topPosition=100;
var leftPosition=-100;
function runPuppy() {
     document.getElementById("puppy").style.animationIterationCount = "infinite";               
    const puppy = document.getElementById("puppy");
    puppy.style.visibility="visible";
    puppy.style.position="absolute";
    clearInterval(id);
    id=setInterval(frame,10);
    function frame(){
        if(leftPosition>=640){
            leftPosition=-100;
            topPosition=100;
            
        }else{
            leftPosition++;
            topPosition++;
            puppy.style.top=topPosition+"px"
            puppy.style.left=leftPosition+"px";
        }
    }
    			
}
