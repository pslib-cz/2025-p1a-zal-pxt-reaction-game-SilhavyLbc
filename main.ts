enum GameState {
    Passive,   //Hráč čeká na spuštění kola
    Started,   //Přesýpací hodiny – náhodné čekání před signálem.
    Running    //Signál zobrazen – hráči reagují stiskem tlačítka.
}

GameState.Passive

input.onLogoEvent(TouchButtonEvent.Pressed, function(){
    GameState.Started
    let kontrolaA: boolean = false
    let kontrolaB: boolean = false //jestli se zmacklo to tlacitko brzo
    led.plot(0, 0)
    led.plot(1, 0)
    led.plot(2, 0)
    led.plot(3, 0)
    led.plot(4, 0)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 1)
    led.plot(1, 3)
    led.plot(3, 3)
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
    music.play(music.tonePlayable(Note.C, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    
    basic.pause(randint(3000, 6000))
    if (kontrolaA === true && kontrolaB === true){

    }
})