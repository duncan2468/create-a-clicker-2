controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
})
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
