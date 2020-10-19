controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.blizzard.startScreenEffect(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.hearts.startScreenEffect(1000)
})
scene.setBackgroundColor(2)
scene.setBackgroundImage(img`
    2222222222222222222222222222222222222222222222211122222222222211122222222222222222222211122211122222211111111112222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122222222222222222222211122211122221111111111111122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122222111111111111222211122211122221111111111111122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111111111222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111111111222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111122222111222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211111111111111111122221111222221111222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211111111111111111122221112222111112222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211111111111111111122221111111111112222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111111222222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111112222222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221112222222222222211122211122221112222222211122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221112222222222222211122211122222211111111111122222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111111111122211122211122222211111111112222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111111111122211122211122222211111111112222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222211122222222222211122221111111111111122211122211122222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222211122222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222111222222222222222222222222222222222222222222222222222222222222222222211122222222222222222222222222222222222
    2222222222222222222211111112221111111211122211122222111111111111111211111111111122222111111222111111122222222222222222222211122222222222222222222222222222222222
    2222222222222222222211111112221111111211122211122222111111111111111211111111111122222111111122111111122221111111122222222222222222111111122222222222222222222222
    2222222222222222222211111111111111111211122211122222111111111111111211111111111122222111111122111111122211111111111222222211122222111111122222222222222222222222
    2222222222222222222211121111111112111211111111122222111111111111111211122222221122222111111111111211122211111222111222222211122222111111122222222222222222222222
    2222222222222222222211122111111122111211111111122222111222222222111211122222221122222111211111111211122211122222111222222211122222111122222222222222222222222222
    2222222222222222222211122211111122111211111111122222111222222222111211122222221122222111211111111211122211122222111222222211122222111111122222222222222222222222
    2222222222222222222211122222222222111222222211122222111222222222111211122222221122222111222222222211122211122222112222222211122222111111112222222222222222222222
    2222222222222222222211122222222222111222222211122222111222222222111211122222221122222111222222222211122211111111122222222211122222211111112222222222222222222222
    2222222222222222222211122222222222111222222211122222111222222222111211122222221111222111222222222211122211111112222222222211122222222221112222222222222222222222
    2222222222222222222211122222222222111222222211122222111222222222111221111111111111122111222222222211122211111111122222222211122222222111112222222222222222222222
    2222222222222222222211122222222222111221111111122222111222222222111221111111111111122111222222222211122211111111112222222211122222111111112222222222222222222222
    2222222222222222222211122222222222111221111111122222111222222222111222111111111111122111222222222211122222111111112222222211122222111111112222222222222222222222
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111222222222222222222222222111111111111222222222222211111111122211111111111112221111111122222211111111111111222111111111111111111111111111111
    1111111111111111111111222222222222222222222222111111111222222222222222222111111122211111111111112221111111122222222111111111111222111111111111111111111111111111
    1111111111111111111111222222222222222222222222111111111222222222222222222111111122211111111111112221111111122222222111111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211222211111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211122211111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211122221111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211112221111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211112222111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111222111111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111222211111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111122211111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111122221111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122222222222222222221111111122211111112221111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122222222222222222221111111122211111112221111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122222222222222222221111111122211111112221111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111112221111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111222111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111222111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111222111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111222111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111222111111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111122211111222111111111111111111111111111111
    1111111111111111111111111111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111122211111222111111111111111111111111111111
    1111111111111111111122211111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111122211111222111111111111111111111111111111
    1111111111111111111122211111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111112221111222111111111111111111111111111111
    1111111111111111111122211111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111112221111222111111111111111111111111111111
    1111111111111111111122211111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111112221111222111111111111111111111111111111
    1111111111111111111122211111111111112221111111111111111222111111111111222111111122211111111111112221111111122211111111111222112222111111111111111111111111111111
    1111111111111111111122222222222222222221111111111111111222222222222222222111111122211111111111112221111111122211111111111222112222111111111111111111111111111111
    1111111111111111111122222222222222222221111111111111111111222222222222111111111122211111111111112221111111122211111111111222222221111111111111111111111111111111
    1111111111111111111122222222222222222221111111111111111111222222222222111111111122211111111111112221111111122211111111111122222211111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111122211111111111112221111111122211111111111122222211111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    `)
effects.confetti.startScreenEffect(1000)
