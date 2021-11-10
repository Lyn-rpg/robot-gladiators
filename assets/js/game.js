
// set up player var
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log multiple values at once
console.log(
    playerName, playerAttack, playerHealth, playerMoney
    );

// set up enemy var
var enemyName = "Voldemort";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(
    enemyName, enemyAttack, enemyHealth
    );

// fight function
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

var fight = function() {
    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit? This will cost you 2 coins.");

      // if yes (true), leave fight
      if (confirmSkip) {
          window.alert(" You have decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 2;
          window.alert("You now have " + playerMoney + " coins left in your account.");

      }
      // if no (false), ask ? about running fight() again
      else  { 
          window.prompt("Would you like to join this battle?");
      }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
    
 };

// call fight function
fight();