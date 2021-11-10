
// set up player var
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
// check if playerHealth value is greater than 0
if (playerHealth > 0) {
    console.log(
        "Your player is still alive!"
        );
};

var playerAttack = 10;

// log multiple values at once
console.log(
    playerName, playerAttack, playerHealth
    );

// set up enemy var
var enemyName = "Voldemort";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(
    enemyName, enemyAttack, enemyHealth
    );

// fight function
var fight = function() {
    // alert players of starting round
    window.alert("Welcome to Robot Gladiators!");

    // subract value of 'playerAttack' from value of 'enemyHealth' and use results to update value in 'enemyHealth var.
    console.log(
        enemyHealth = enemyHealth - playerAttack
        );
        // check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    // log a resulting message in console so we know it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    // subtract value of 'enemyAttack from value of 'playerHealth use result to update 'playerHealth' var.
    console.log(
        playerHealth = playerHealth - enemyAttack
        );
    // log a resulting message in console so we know it worked.
    console.log(
        enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
        );
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        
        else{
            window.alert(playerName + " still has " + playerHealth + " health left!");
        }
 };

// call fight function
fight();
