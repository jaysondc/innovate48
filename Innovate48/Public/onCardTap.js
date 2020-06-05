// -----JS CODE-----
// -----JS CODE-----
/*
cat and pics are 2 variables declared below in coments, and
thus any scene object using this script will obtain
these variables. However, they must be  
*/

//@input SceneObject[] allScenes


var count = 0 

var rewardDetail = script.allScenes[0]
var rewardTitle = script.allScenes[3]

var transactionsDetail = script.allScenes[1]
var transactionTitleLeft = script.allScenes[4]
var transactionTitleRight = script.allScenes[5]

var spendingDetail = script.allScenes[2]
var spendingTitle = script.allScenes[6]

var navigation = script.allScenes[7]
var details = script.allScenes[8]

var SCREEN = {
    REWARDS: 0,
    TRANSACTIONS: 1,
    SPENDING: 2
}

// Initial State
var currentState = SCREEN.TRANSACTIONS


// END INIT

print("Tap script initialized...")
function onTapped(eventData)
{
    
   if(eventData.getTapPosition().x < .5){   // TAP LEFT
        
        switch (currentState) {
            case SCREEN.REWARDS: 
                rewardsToTransaction()
                currentState = SCREEN.TRANSACTIONS
                break
            case SCREEN.TRANSACTIONS:
                transactionToSpending()
                currentState = SCREEN.SPENDING
                break
            case SCREEN.SPENDING:
                // Nothing
                break
        }
        
    }
    else {                                   // TAP RIGHT
        switch (currentState) {
            case SCREEN.REWARDS: 
                // Nothing
                break
            case SCREEN.TRANSACTIONS:
                transactionToRewards()
                currentState = SCREEN.REWARDS
                break
            case SCREEN.SPENDING:
                spendingToTransaction()
                currentState = SCREEN.TRANSACTIONS
                break
        }
    }
    

}


function transactionToRewards() {
//    // Fade
//    global.tweenManager.startTween(transactionsDetail, "fade out")
//    global.tweenManager.startTween(rewardDetail, "fade in")
//    
//    global.tweenManager.startTween(details, "nav left")
//    
//    // Navigation
//    global.tweenManager.startTween(navigation, "nav left")
//    
//    global.tweenManager.startTween(transactionTitleLeft, "fade in")
//    global.tweenManager.startTween(rewardTitle, "fade out")
}

function transactionToSpending() {
//    // Details
//    global.tweenManager.startTween(transactionsDetail, "fade out")
//    global.tweenManager.startTween(spendingDetail, "fade in")
//    
//    global.tweenManager.startTween(details, "nav right")
//    
//    // Navigation
//    global.tweenManager.startTween(navigation, "nav right")
//    
//    global.tweenManager.startTween(transactionTitleRight, "fade in")
}

function rewardsToTransaction() {
//    // Details
//    global.tweenManager.startTween(rewardDetail, "fade out")
//    global.tweenManager.startTween(transactionsDetail, "fade in")
//    
//    global.tweenManager.startTween(details, "nav right")
//    
//    // Navigation
//    global.tweenManager.startTween(navigation, "nav right")
//    
//    global.tweenManager.startTween(transactionTitleLeft, "fade in")
//    global.tweenManager.startTween(rewardTitle, "fade out")    


}

function spendingToTransaction() {
//    // Details
//    global.tweenManager.startTween(spendingDetail, "fade out")
//    global.tweenManager.startTween(transactionsDetail, "fade in")
//    
//    global.tweenManager.startTween(details, "nav left")
//    
//    // Navigation
//    global.tweenManager.startTween(navigation, "nav left")
}



var event = script.createEvent("TapEvent");
event.bind(onTapped);