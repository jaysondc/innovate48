// -----JS CODE-----
// -----JS CODE-----
/*
cat and pics are 2 variables declared below in coments, and
thus any scene object using this script will obtain
these variables. However, they must be  
*/

//@input SceneObject[] allScenes
// Set the Image component's texture

//script.image.mainPass.baseTex = script.texture;
var count = 0 

for(var i = 0; i < script.allScenes.length; i++){
//    if(count == i){
//        script.allScenes[i].enabled = true;
//    }
//    else{
//        script.allScenes[i].enabled = false;
//    }
}
// Set the Image's pivot point
//script.image.pivot = new vec2(1, 1);

//var count = 0 
//script.cat.mainPass.baseTex = script.pics[count] //mainPass allows us to reference to cat and base Text references to the base texture of that which is a picture of my cat
print("Tap Initialize")
function onTapped(eventData)
{
    
   if(eventData.getTapPosition().x > .5){
        count++;
    }
    else{
        count--;
    }
    
    if(count >= script.allScenes.length){
        count = 0;
    }
    
    if(count < 0){
        count = script.allScenes.length - 1
    }
    
//    for(var i = 0; i < script.allScenes.length; i++){
//    if(count == i){
//        script.allScenes[i].enabled = true;
//    }
//    else{
//        script.allScenes[i].enabled = false;
//    }
//}
//   print("value of count : " + count )
//    print("Tap Position: (" + eventData.getTapPosition().x + ", " + eventData.getTapPosition().y + ")");
}

var event = script.createEvent("TapEvent");
event.bind(onTapped);