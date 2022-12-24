import Phaser from "phaser";
import Game from "./scenes/game";

const config = {
    type: Phaser.AUTO,
    parent: "phaser-example",
    autoCenter: true,
    scale: {
        mode: Phaser.Scale.FIT
    },
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);