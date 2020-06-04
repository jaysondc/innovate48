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
//@input Component.Text text1
//@input Component.Text text2
//@input Component.RenderMeshVisual box
//@input Component.RenderMeshVisual box2

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
    script.text1.enabled = true;
    script.text2.enabled = true;
    script.box.enabled = true;
    script.box2.enabled = true;
    }    
    else{
    script.image.mainPass.baseTex = script.texture2; 
    script.text1.enabled = false;
    script.text2.enabled = false;
    script.box.enabled = false;
    script.box2.enabled = false;
    }
    
 
    print("Tap Position: (" + eventData.getTapPosition().x + ", " + eventData.getTapPosition().y + ")");
}

var event = script.createEvent("TapEvent");
event.bind(onTapped);