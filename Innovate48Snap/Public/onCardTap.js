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
                // Nothing
                print("Showing Rewards Already")
                break
            case SCREEN.TRANSACTIONS:
                currentState = SCREEN.REWARDS
                transactionToRewards()
                print("Showing Rewards")
                break
            case SCREEN.SPENDING:
                currentState = SCREEN.TRANSACTIONS
                spendingToTransaction()
                print("Showing Transactions")
                break
        }
        
    }
    else {                                   // TAP RIGHT
        switch (currentState) {
            case SCREEN.REWARDS: 
                currentState = SCREEN.TRANSACTIONS
                rewardsToTransaction()
                print("Showing Transactions")
                break
            case SCREEN.TRANSACTIONS:
                currentState = SCREEN.SPENDING
                transactionToSpending()
                print("Showing Spending")
                break
            case SCREEN.SPENDING:
                print("Showing Spending Already")
                break
        }
    }
    
    updateAlpha()    

}


function transactionToRewards() {
    // Fade
//    global.tweenManager.startTween(transactionsDetail, "fade out")
//    global.tweenManager.startTween(rewardDetail, "fade in")
//    global.tweenManager.startTween(transactionTitleLeft, "fade in")
//    global.tweenManager.startTween(rewardTitle, "fade out")
    
    // Navigation    
    global.tweenManager.startTween(details, "nav right")
    global.tweenManager.startTween(navigation, "nav right")
    

}

function transactionToSpending() {
    // Details
//    global.tweenManager.startTween(transactionsDetail, "fade out")
//    global.tweenManager.startTween(spendingDetail, "fade in")
//    global.tweenManager.startTween(transactionTitleRight, "fade in")
    
    // Navigation    
    global.tweenManager.startTween(details, "nav left")
    global.tweenManager.startTween(navigation, "nav left")
}

function rewardsToTransaction() {
    // Details
//    global.tweenManager.startTween(rewardDetail, "fade out")
//    global.tweenManager.startTween(transactionsDetail, "fade in")
//    global.tweenManager.startTween(transactionTitleLeft, "fade in")
//    global.tweenManager.startTween(rewardTitle, "fade out")    

    
    // Navigation
    global.tweenManager.startTween(details, "nav left")
    global.tweenManager.startTween(navigation, "nav left")
}

function spendingToTransaction() {
    // Details
//    global.tweenManager.startTween(spendingDetail, "fade out")
//    global.tweenManager.startTween(transactionsDetail, "fade in")
    
    // Navigation
    global.tweenManager.startTween(details, "nav right")
    global.tweenManager.startTween(navigation, "nav right")
}

function updateAlpha() {
    
    switch (currentState) {
        case SCREEN.REWARDS: 
            global.tweenManager.startTween(rewardTitle, "fade out")
            global.tweenManager.startTween(transactionTitleLeft, "fade in")

            break
        case SCREEN.TRANSACTIONS:
            global.tweenManager.startTween(rewardTitle, "fade in")
            global.tweenManager.startTween(transactionTitleLeft, "fade out")
        
            break
        case SCREEN.SPENDING:

            break
    }
    
}



var event = script.createEvent("TapEvent");
event.bind(onTapped);