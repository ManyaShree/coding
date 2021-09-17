var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["859c0eeb-52f3-4324-a228-338fb34a1e6f","813aaed3-063c-4d74-9f69-9a016da1056f","2569894b-bbaf-4665-a619-469396b498e4","6b3e8fb7-3ea2-4d5a-ad3b-7d4476273609","f42217d2-22ae-432b-9671-093331157d3e","559db12c-5211-48fe-bff0-42567a7ed9ce"],"propsByKey":{"859c0eeb-52f3-4324-a228-338fb34a1e6f":{"name":"front_of_house_1","sourceUrl":"assets/api/v1/animation-library/gamelab/z3ET79WW37k.pBuHD2iYymrSx8eUmFAs/category_backgrounds/front_of_house.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"z3ET79WW37k.pBuHD2iYymrSx8eUmFAs","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z3ET79WW37k.pBuHD2iYymrSx8eUmFAs/category_backgrounds/front_of_house.png"},"813aaed3-063c-4d74-9f69-9a016da1056f":{"name":"red_dress_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Sp_OIoynPyKk145tcaAFrIqsq.E5YlPo/category_people/red_dress.png","frameSize":{"x":132,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"Sp_OIoynPyKk145tcaAFrIqsq.E5YlPo","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Sp_OIoynPyKk145tcaAFrIqsq.E5YlPo/category_people/red_dress.png"},"2569894b-bbaf-4665-a619-469396b498e4":{"name":"monster_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png","frameSize":{"x":278,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png"},"6b3e8fb7-3ea2-4d5a-ad3b-7d4476273609":{"name":"monster_19_1","sourceUrl":"assets/api/v1/animation-library/gamelab/IZygDeyZWWN7cOC674xagrMabMM2S.Yf/category_fantasy/monster_19.png","frameSize":{"x":192,"y":358},"frameCount":1,"looping":true,"frameDelay":2,"version":"IZygDeyZWWN7cOC674xagrMabMM2S.Yf","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":192,"y":358},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IZygDeyZWWN7cOC674xagrMabMM2S.Yf/category_fantasy/monster_19.png"},"f42217d2-22ae-432b-9671-093331157d3e":{"name":"monster_04_1","sourceUrl":"assets/api/v1/animation-library/gamelab/l9wpOFX9zNsawNAqqiXDvX139CaABJG2/category_fantasy/monster_04.png","frameSize":{"x":268,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"l9wpOFX9zNsawNAqqiXDvX139CaABJG2","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/l9wpOFX9zNsawNAqqiXDvX139CaABJG2/category_fantasy/monster_04.png"},"559db12c-5211-48fe-bff0-42567a7ed9ce":{"name":"monster_02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/5Y28O_pxoeXEynI1cMG.QKBo6kHjppEI/category_fantasy/monster_02.png","frameSize":{"x":326,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"5Y28O_pxoeXEynI1cMG.QKBo6kHjppEI","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5Y28O_pxoeXEynI1cMG.QKBo6kHjppEI/category_fantasy/monster_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


playSound("assets/category_background/fantasy.mp3", false);


var life = 0;
var gost1, gost2, gost3, gost4;
var boundary1, boundary2;
var girl;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  girl = createSprite(25,190,13,13);
  girl.setAnimation("red_dress_1");
  girl.scale=0.1
  
  
  house = createSprite(375,190,13,13);
  house.setAnimation("front_of_house_1");
  house.scale=0.1
  
  
  gost1 = createSprite(100,130,10,10);
  gost1.setAnimation("monster_17_1");
  gost1.scale=0.1
  gost2 = createSprite(215,130,10,10);
  gost2.setAnimation("monster_17_1");
  gost2.scale=0.1
  gost3 = createSprite(165,250,10,10);
  gost3.setAnimation("monster_17_1");
  gost3.scale=0.1
  gost4 = createSprite(270,250,10,10);
  gost4.setAnimation("monster_17_1");
  gost4.scale=0.1
  
  gost1.velocityY = 4;
  gost2.velocityY = 4;
  gost3.velocityY = -4;
  gost4.velocityY = -4;

function draw () {
   background("pink");
  text("Lives: " + life,200,100);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  gost1.bounceOff(boundary1);
  gost1.bounceOff(boundary2);
  gost2.bounceOff(boundary1);
  gost2.bounceOff(boundary2);
  gost3.bounceOff(boundary1);
  gost3.bounceOff(boundary2);
  gost4.bounceOff(boundary1);
  gost4.bounceOff(boundary2);
  
  if (keyDown("right")) {
  girl.x = girl.x+5
}

if (keyDown("left")) {
  girl.x = girl.x-5
}  
  
  if (girl.isTouching(gost1)||
      girl.isTouching(gost2)||
      girl.isTouching(gost3)|| 
      girl.isTouching(gost4)){
  girl.x=18  
  girl.y=200
  life=life+1
}


   

drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
