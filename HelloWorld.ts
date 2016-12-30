/// <reference path="./typings/globals/pixi.js/index.d.ts" />

class Startup {
    public static main(): number {
        console.log('Hello World');
        return 0;
    }
}

Startup.main();

var renderer = new PIXI.CanvasRenderer(640, 480);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var smile: PIXI.Sprite = null;

PIXI.loader.add('smile', 'smile.png').load(function (loader, resources) {

    smile = new PIXI.Sprite(resources.smile.texture);

    smile.position.x = 640 / 2;
    smile.position.y = 480 / 2;
    smile.anchor.set(0.5,0.5);

    stage.addChild(smile);

    animate();
});

function animate() {

    requestAnimationFrame(animate);
    renderer.render(stage);
}
