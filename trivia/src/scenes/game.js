import Card from "../helpers/card";

export default class Game extends Phaser.Scene {
    constructor() {
        super({
            key: 'Game'
        });
    }

    preload() {
        this.load.image('CardBack', 'src/assets/CardBack.png')
    }

    create() {

        let self = this;

        this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#00ffff');
        })

        this.dealText.on('pointerdown', function () {
            self.dealCards();
        })

        this.dealCards = () => {
        	for (let i = 0; i < 5; i++) {
                let playerCard = new Card(this);
                playerCard.render(300 + (i * 100), 300, 'CardBack');
            }
    	}

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })

        //Leave this at the bottom
        /* Breaks dynamic aspect
        this.scale.displaySize.setAspectRatio( width/height );
        this.scale.refresh();
        */
    }
    
    update() {
    
    }
}
