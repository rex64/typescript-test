/// <reference path="./typings/globals/pixi.js/index.d.ts" />

class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();

const width: number = 800;
const height: number = 800;

let renderer = new PIXI.CanvasRenderer(width, height);

document.body.appendChild(renderer.view);

let stage = new PIXI.Container();

let smile: PIXI.Sprite = PIXI.Sprite.fromImage('smile.png');

smile.position.x = width / 2;
smile.position.y = height / 2;
smile.anchor.set(0.5, 0.5);
smile.interactive = true;
smile.on('mousedown', function(eventData){

    console.log('click');

});


stage.addChild(smile);

animate();

function animate() {

    requestAnimationFrame(animate);
    renderer.render(stage);
}
