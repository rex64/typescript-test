/// <reference path="./typings/globals/pixi.js/index.d.ts" />
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
Startup.main();
var width = 800;
var height = 800;
var renderer = new PIXI.CanvasRenderer(width, height);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
var smile = PIXI.Sprite.fromImage('smile.png');
smile.position.x = width / 2;
smile.position.y = height / 2;
smile.anchor.set(0.5, 0.5);
smile.interactive = true;
smile.on('mousedown', function (eventData) {
    console.log('click');
});
stage.addChild(smile);
animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
//# sourceMappingURL=HelloWorld.js.map