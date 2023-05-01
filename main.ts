robobit.select_model(RBModel.Mk3)
basic.forever(function () {
    while (robobit.sonar(RBPingUnit.Centimeters) < 100) {
        robobit.goms(RBDirection.Forward, 60, 2500)
        robobit.rotatems(RBRobotDirection.Left, 60, 500)
        robobit.goms(RBDirection.Reverse, 60, 2500)
        robobit.rotatems(RBRobotDirection.Left, 60, 500)
    }
    while (robobit.sonar(RBPingUnit.Centimeters) > 100) {
        robobit.setLedColor(0x0000FF)
        music.playMelody("C5 B C5 B C5 B C5 B ", 200)
        robobit.setLedColor(0xFF0000)
    }
})
