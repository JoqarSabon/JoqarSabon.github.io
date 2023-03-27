gdjs.endlossCode = {};
gdjs.endlossCode.GDNewTiledSpriteObjects1= [];
gdjs.endlossCode.GDNewTiledSpriteObjects2= [];
gdjs.endlossCode.GDNewLightObjects1= [];
gdjs.endlossCode.GDNewLightObjects2= [];
gdjs.endlossCode.GDGrassObjects1= [];
gdjs.endlossCode.GDGrassObjects2= [];
gdjs.endlossCode.GDRickObjects1= [];
gdjs.endlossCode.GDRickObjects2= [];
gdjs.endlossCode.GDMushroomsObjects1= [];
gdjs.endlossCode.GDMushroomsObjects2= [];
gdjs.endlossCode.GDNewTextObjects1= [];
gdjs.endlossCode.GDNewTextObjects2= [];
gdjs.endlossCode.GDNewText2Objects1= [];
gdjs.endlossCode.GDNewText2Objects2= [];
gdjs.endlossCode.GDMObjects1= [];
gdjs.endlossCode.GDMObjects2= [];
gdjs.endlossCode.GDblockObjects1= [];
gdjs.endlossCode.GDblockObjects2= [];
gdjs.endlossCode.GDNewSpriteObjects1= [];
gdjs.endlossCode.GDNewSpriteObjects2= [];
gdjs.endlossCode.GDNewSprite2Objects1= [];
gdjs.endlossCode.GDNewSprite2Objects2= [];
gdjs.endlossCode.GDTree2Objects1= [];
gdjs.endlossCode.GDTree2Objects2= [];
gdjs.endlossCode.GDNewTiledSprite2Objects1= [];
gdjs.endlossCode.GDNewTiledSprite2Objects2= [];
gdjs.endlossCode.GDrabbitObjects1= [];
gdjs.endlossCode.GDrabbitObjects2= [];
gdjs.endlossCode.GDsquirrelObjects1= [];
gdjs.endlossCode.GDsquirrelObjects2= [];

gdjs.endlossCode.conditionTrue_0 = {val:false};
gdjs.endlossCode.condition0IsTrue_0 = {val:false};
gdjs.endlossCode.condition1IsTrue_0 = {val:false};
gdjs.endlossCode.condition2IsTrue_0 = {val:false};
gdjs.endlossCode.conditionTrue_1 = {val:false};
gdjs.endlossCode.condition0IsTrue_1 = {val:false};
gdjs.endlossCode.condition1IsTrue_1 = {val:false};
gdjs.endlossCode.condition2IsTrue_1 = {val:false};


gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDsquirrelObjects1Objects = Hashtable.newFrom({"squirrel": gdjs.endlossCode.GDsquirrelObjects1});
gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDrabbitObjects1Objects = Hashtable.newFrom({"rabbit": gdjs.endlossCode.GDrabbitObjects1});
gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDRickObjects1Objects = Hashtable.newFrom({"Rick": gdjs.endlossCode.GDRickObjects1});
gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDsquirrelObjects1Objects = Hashtable.newFrom({"squirrel": gdjs.endlossCode.GDsquirrelObjects1});
gdjs.endlossCode.asyncCallback9140412 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}}
gdjs.endlossCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.endlossCode.asyncCallback9140412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDRickObjects1Objects = Hashtable.newFrom({"Rick": gdjs.endlossCode.GDRickObjects1});
gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDrabbitObjects1Objects = Hashtable.newFrom({"rabbit": gdjs.endlossCode.GDrabbitObjects1});
gdjs.endlossCode.asyncCallback9141476 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameover", false);
}}
gdjs.endlossCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.endlossCode.asyncCallback9141476(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.endlossCode.eventsList2 = function(runtimeScene) {

{


gdjs.endlossCode.condition0IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.endlossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.endlossCode.GDGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("block"), gdjs.endlossCode.GDblockObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn1");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "distance");
}{for(var i = 0, len = gdjs.endlossCode.GDblockObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDblockObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.endlossCode.GDGrassObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDGrassObjects1[i].setColor("0;162;37");
}
}}

}


{


gdjs.endlossCode.condition0IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.endlossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rick"), gdjs.endlossCode.GDRickObjects1);
{for(var i = 0, len = gdjs.endlossCode.GDRickObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDRickObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rick"), gdjs.endlossCode.GDRickObjects1);

gdjs.endlossCode.condition0IsTrue_0.val = false;
gdjs.endlossCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endlossCode.GDRickObjects1.length;i<l;++i) {
    if ( gdjs.endlossCode.GDRickObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.endlossCode.condition0IsTrue_0.val = true;
        gdjs.endlossCode.GDRickObjects1[k] = gdjs.endlossCode.GDRickObjects1[i];
        ++k;
    }
}
gdjs.endlossCode.GDRickObjects1.length = k;}if ( gdjs.endlossCode.condition0IsTrue_0.val ) {
{
gdjs.endlossCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("jumping")) == 0;
}}
if (gdjs.endlossCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "sound13.mp3", false, 50, 1);
}{runtimeScene.getGame().getVariables().get("jumping").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rick"), gdjs.endlossCode.GDRickObjects1);

gdjs.endlossCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.endlossCode.GDRickObjects1.length;i<l;++i) {
    if ( !(gdjs.endlossCode.GDRickObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.endlossCode.condition0IsTrue_0.val = true;
        gdjs.endlossCode.GDRickObjects1[k] = gdjs.endlossCode.GDRickObjects1[i];
        ++k;
    }
}
gdjs.endlossCode.GDRickObjects1.length = k;}if (gdjs.endlossCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("jumping").setNumber(0);
}}

}


{


gdjs.endlossCode.condition0IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.endlossCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Rick"), gdjs.endlossCode.GDRickObjects1);
{for(var i = 0, len = gdjs.endlossCode.GDRickObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDRickObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.endlossCode.GDGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite2"), gdjs.endlossCode.GDNewTiledSprite2Objects1);
{for(var i = 0, len = gdjs.endlossCode.GDGrassObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDGrassObjects1[i].setXOffset(gdjs.endlossCode.GDGrassObjects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.endlossCode.GDNewTiledSprite2Objects1.length ;i < len;++i) {
    gdjs.endlossCode.GDNewTiledSprite2Objects1[i].setXOffset(gdjs.endlossCode.GDNewTiledSprite2Objects1[i].getXOffset() + (2));
}
}}

}


{


gdjs.endlossCode.condition0IsTrue_0.val = false;
gdjs.endlossCode.condition1IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn") > gdjs.randomInRange(4, 15);
}if ( gdjs.endlossCode.condition0IsTrue_0.val ) {
{
{gdjs.endlossCode.conditionTrue_1 = gdjs.endlossCode.condition1IsTrue_0;
gdjs.endlossCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9136380);
}
}}
if (gdjs.endlossCode.condition1IsTrue_0.val) {
gdjs.endlossCode.GDsquirrelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDsquirrelObjects1Objects, 1300, 540, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rabbit"), gdjs.endlossCode.GDrabbitObjects1);
gdjs.copyArray(runtimeScene.getObjects("squirrel"), gdjs.endlossCode.GDsquirrelObjects1);
{for(var i = 0, len = gdjs.endlossCode.GDrabbitObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDrabbitObjects1[i].setHeight(208);
}
}{for(var i = 0, len = gdjs.endlossCode.GDrabbitObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDrabbitObjects1[i].setWidth(196);
}
}{for(var i = 0, len = gdjs.endlossCode.GDsquirrelObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDsquirrelObjects1[i].setHeight(123);
}
}{for(var i = 0, len = gdjs.endlossCode.GDsquirrelObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDsquirrelObjects1[i].setWidth(126);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rabbit"), gdjs.endlossCode.GDrabbitObjects1);
gdjs.copyArray(runtimeScene.getObjects("squirrel"), gdjs.endlossCode.GDsquirrelObjects1);
{for(var i = 0, len = gdjs.endlossCode.GDsquirrelObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDsquirrelObjects1[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.endlossCode.GDrabbitObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDrabbitObjects1[i].addForce(-(300), 0, 0);
}
}}

}


{


gdjs.endlossCode.condition0IsTrue_0.val = false;
gdjs.endlossCode.condition1IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn1") > gdjs.randomInRange(10, 20);
}if ( gdjs.endlossCode.condition0IsTrue_0.val ) {
{
{gdjs.endlossCode.conditionTrue_1 = gdjs.endlossCode.condition1IsTrue_0;
gdjs.endlossCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9139060);
}
}}
if (gdjs.endlossCode.condition1IsTrue_0.val) {
gdjs.endlossCode.GDrabbitObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDrabbitObjects1Objects, 1300, 458, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rick"), gdjs.endlossCode.GDRickObjects1);
gdjs.copyArray(runtimeScene.getObjects("squirrel"), gdjs.endlossCode.GDsquirrelObjects1);

gdjs.endlossCode.condition0IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDRickObjects1Objects, gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDsquirrelObjects1Objects, false, runtimeScene, false);
}if (gdjs.endlossCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 50, 1);
}
{ //Subevents
gdjs.endlossCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rick"), gdjs.endlossCode.GDRickObjects1);
gdjs.copyArray(runtimeScene.getObjects("rabbit"), gdjs.endlossCode.GDrabbitObjects1);

gdjs.endlossCode.condition0IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDRickObjects1Objects, gdjs.endlossCode.mapOfGDgdjs_46endlossCode_46GDrabbitObjects1Objects, false, runtimeScene, false);
}if (gdjs.endlossCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 50, 1);
}
{ //Subevents
gdjs.endlossCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.endlossCode.condition0IsTrue_0.val = false;
{
gdjs.endlossCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "distance") > 0.2;
}if (gdjs.endlossCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("score").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "distance");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.endlossCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.endlossCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.endlossCode.GDNewTextObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("score")));
}
}}

}


};

gdjs.endlossCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.endlossCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.endlossCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.endlossCode.GDNewLightObjects1.length = 0;
gdjs.endlossCode.GDNewLightObjects2.length = 0;
gdjs.endlossCode.GDGrassObjects1.length = 0;
gdjs.endlossCode.GDGrassObjects2.length = 0;
gdjs.endlossCode.GDRickObjects1.length = 0;
gdjs.endlossCode.GDRickObjects2.length = 0;
gdjs.endlossCode.GDMushroomsObjects1.length = 0;
gdjs.endlossCode.GDMushroomsObjects2.length = 0;
gdjs.endlossCode.GDNewTextObjects1.length = 0;
gdjs.endlossCode.GDNewTextObjects2.length = 0;
gdjs.endlossCode.GDNewText2Objects1.length = 0;
gdjs.endlossCode.GDNewText2Objects2.length = 0;
gdjs.endlossCode.GDMObjects1.length = 0;
gdjs.endlossCode.GDMObjects2.length = 0;
gdjs.endlossCode.GDblockObjects1.length = 0;
gdjs.endlossCode.GDblockObjects2.length = 0;
gdjs.endlossCode.GDNewSpriteObjects1.length = 0;
gdjs.endlossCode.GDNewSpriteObjects2.length = 0;
gdjs.endlossCode.GDNewSprite2Objects1.length = 0;
gdjs.endlossCode.GDNewSprite2Objects2.length = 0;
gdjs.endlossCode.GDTree2Objects1.length = 0;
gdjs.endlossCode.GDTree2Objects2.length = 0;
gdjs.endlossCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.endlossCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.endlossCode.GDrabbitObjects1.length = 0;
gdjs.endlossCode.GDrabbitObjects2.length = 0;
gdjs.endlossCode.GDsquirrelObjects1.length = 0;
gdjs.endlossCode.GDsquirrelObjects2.length = 0;

gdjs.endlossCode.eventsList2(runtimeScene);

return;

}

gdjs['endlossCode'] = gdjs.endlossCode;
