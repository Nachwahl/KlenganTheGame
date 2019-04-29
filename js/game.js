
/* Game namespace */
var game = {

    data: {
        score: 0
    },
    
    // Run on page load.
    onload : function () {
        // Initialize the video.
        if (!me.video.init(960, 640, {wrapper : "screen", scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
        me.loader.onload = this.loaded.bind(this)
        // Initialize the audio.
        me.audio.init("mp3,ogg");
        // Loads the .tmx file (looks like it doesn't work lmao)        me.levelDirector.addTMXLevel(me.loader.getTMX("area01"));
        me.levelDirector.addTMXLevel(me.loader.getTMX("area02"));
        // set and load all resources.
        // (this will also automatically switch to the loading screen)
        me.loader.preload(game.resources, this.loaded.bind(this));        
    },
    onload: function() {
        me.levelDirector.addTMXLevel("desert"); //Bugfix
        me.levelDirector.loadLevel("desert");
      },
    // Run on game resources loaded.
    loaded : function () {
        me.state.set(me.state.MENU, new game.TitleScreen());
        me.state.set(me.state.PLAY, new game.PlayScreen());

        // add our player entity in the entity pool
        me.pool.register("mainPlayer", game.PlayerEntity);

        // Start the game.
        me.state.change(me.state.PLAY);
    }
};
