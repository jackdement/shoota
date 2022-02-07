controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
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
function secondroll (secondSum: number) {
    if (secondSum == diceSum) {
        info.changeScoreBy(1)
        game.splash("You won $1! Play again?")
    } else if (secondSum == 5) {
        info.changeScoreBy(-1)
        game.splash("You lost $1. Play again?")
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
})
let value_2: Sprite = null
let value_1: Sprite = null
let dice_2 = 0
let dice_1 = 0
let diceSum = 0
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
if (info.score() == 0) {
    game.over(false)
}
