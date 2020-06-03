// -----JS CODE-----
// -----JS CODE-----
/*
cat and pics are 2 variables declared below in coments, and
thus any scene object using this script will obtain
these variables. However, they must be  
*/
//@input Component.Image image
//@input Asset.Texture texture
//@input Asset.Texture texture2
// Set the Image component's texture

script.image.mainPass.baseTex = script.texture;
var count = false 

// Set the Image's pivot point
//script.image.pivot = new vec2(1, 1);

//var count = 0 
//script.cat.mainPass.baseTex = script.pics[count] //mainPass allows us to reference to cat and base Text references to the base texture of that which is a picture of my cat
print("LAST ONE")
function onTapped(eventData)
{
    count = !count;
    if (count){
    script.image.mainPass.baseTex = script.texture;    
    }    
    else{
    script.image.mainPass.baseTex = script.texture2;      
    }
    
 
    print("Tap Position: (" + eventData.getTapPosition().x + ", " + eventData.getTapPosition().y + ")");
}

var event = script.createEvent("TapEvent");
event.bind(onTapped);