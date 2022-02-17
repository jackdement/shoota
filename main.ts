// This is the code for the player's second roll. It first calls the animation function, then selects two random values from the array list, then displays the two dice that were randomly selected. It then adds the two die values and uses the second roll function. It also sets the position of the dice and later destroys the dice so a player can move on to their next roll. 
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation_2()
    dice_3 = randint(0, diceFaces.length - 1)
    dice_4 = randint(0, diceFaces.length - 1)
    value_3 = sprites.create(diceFaces[dice_3], SpriteKind.Player)
    value_4 = sprites.create(diceFaces[dice_4], SpriteKind.Player)
    diceSum2 = dice_3 + dice_4
    value_3.setPosition(53, 60)
    value_4.setPosition(106, 60)
    pause(2000)
    value_3.destroy()
    value_4.destroy()
    secondroll(diceSum2)
    if (info.score() == 0) {
        game.over(false)
    }
})
// This function defines the values that determine whether a player wins, loses, or goes onto their second roll based on the sum of the dice on their first roll.
function firstRoll (firstSum: number) {
    if (firstSum == 5) {
        info.changeScoreBy(1)
        game.splash("You won $1! Play again?")
    } else if (firstSum == 9) {
        info.changeScoreBy(1)
        game.splash("You won $1! Play again?")
    } else if (firstSum == 0) {
        info.changeScoreBy(-1)
        game.splash("You lost $1. Play again?")
    } else if (firstSum == 1) {
        info.changeScoreBy(-1)
        game.splash("You lost $1. Play again?")
    } else if (firstSum == 10) {
        info.changeScoreBy(-1)
        game.splash("You lost $1. Play again?")
    }
}
// This function animates the second roll before the player's actual roll is revealed.
function animation_2 () {
    for (let index = 0; index < 10; index++) {
        animation3 = randint(0, diceFaces.length - 1)
        animation4 = randint(0, diceFaces.length - 1)
        roll3 = sprites.create(diceFaces[animation3], SpriteKind.Player)
        roll4 = sprites.create(diceFaces[animation4], SpriteKind.Player)
        roll3.setPosition(53, 60)
        roll4.setPosition(106, 60)
        pause(100)
        roll3.destroy()
        roll4.destroy()
    }
}
// This function defines the values that determine whether a player wins, loses, or rolls again based on the sum of the dice on their second roll.
function secondroll (secondSum: number) {
    if (secondSum == diceSum) {
        info.changeScoreBy(1)
        game.splash("You won $1! Play again?")
    } else if (secondSum == 5) {
        info.changeScoreBy(-1)
        game.splash("You lost $1. Play again?")
    }
}
// This is the code for the player's first roll. It first calls the animation function, then selects two random values from the array list, then displays the two dice that were randomly selected. It then adds the two die values and uses the first roll function. It also sets the position of the dice and later destroys the dice so a player can move on to their next roll. 
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation_1()
    dice_1 = randint(0, diceFaces.length - 1)
    dice_2 = randint(0, diceFaces.length - 1)
    value_1 = sprites.create(diceFaces[dice_1], SpriteKind.Player)
    value_2 = sprites.create(diceFaces[dice_2], SpriteKind.Player)
    diceSum = dice_1 + dice_2
    value_1.setPosition(53, 60)
    value_2.setPosition(106, 60)
    pause(2000)
    value_1.destroy()
    value_2.destroy()
    firstRoll(diceSum)
    if (info.score() == 0) {
        game.over(false)
    }
})
// This function animates the first roll before the player's actual roll is revealed.
function animation_1 () {
    for (let index = 0; index < 10; index++) {
        animation1 = randint(0, diceFaces.length - 1)
        animation2 = randint(0, diceFaces.length - 1)
        roll1 = sprites.create(diceFaces[animation1], SpriteKind.Player)
        roll2 = sprites.create(diceFaces[animation2], SpriteKind.Player)
        roll1.setPosition(53, 60)
        roll2.setPosition(106, 60)
        pause(100)
        roll1.destroy()
        roll2.destroy()
    }
}
// The on start of our code includes an array of images for the dices faces that we created, the instructions for how to play the games and how to win/lose, and sets the score so the player can keep track of how much "money" they have.
let roll2: Sprite = null
let roll1: Sprite = null
let animation2 = 0
let animation1 = 0
let value_2: Sprite = null
let value_1: Sprite = null
let dice_2 = 0
let dice_1 = 0
let diceSum = 0
let roll4: Sprite = null
let roll3: Sprite = null
let animation4 = 0
let animation3 = 0
let diceSum2 = 0
let value_4: Sprite = null
let value_3: Sprite = null
let dice_4 = 0
let dice_3 = 0
let diceFaces: Image[] = []
diceFaces = [
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `,
img`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 8 8 8 1 1 1 1 1 1 1 8 8 8 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `
]
scene.setBackgroundColor(10)
game.showLongText("Welcome to street dice! The rules are as follows: You start with 5 dollars. Press A on your first roll. If you roll a 7 or 11 on this roll you win a dollar. If you roll a 2, 3, or 12, you lose a dollar. ", DialogLayout.Full)
game.showLongText("If you do not roll any of these numbers on your first roll, press B to roll again. Continue pressing B until you either repeat the number you got on your first roll, or you roll a 7. If you repeat your roll, you win a dollar. If you roll a 7 you lose a dollar.", DialogLayout.Full)
game.showLongText("The goal is to win as much money as possible, or simply not lose it all. Have Fun!", DialogLayout.Full)
info.setScore(5)
