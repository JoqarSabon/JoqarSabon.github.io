gdjs.MainCode = {};
gdjs.MainCode.GDNewTiledSpriteObjects1= [];
gdjs.MainCode.GDNewTiledSpriteObjects2= [];
gdjs.MainCode.GDNewTextObjects1= [];
gdjs.MainCode.GDNewTextObjects2= [];
gdjs.MainCode.GDNewLightObjects1= [];
gdjs.MainCode.GDNewLightObjects2= [];
gdjs.MainCode.GDNewBitmapTextObjects1= [];
gdjs.MainCode.GDNewBitmapTextObjects2= [];
gdjs.MainCode.GDtext2Objects1= [];
gdjs.MainCode.GDtext2Objects2= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.condition3IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};
gdjs.MainCode.condition3IsTrue_1 = {val:false};


gdjs.MainCode.asyncCallback9109924 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "endloss", false);
}}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback9109924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.asyncCallback9112348 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "endloss", false);
}}
gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback9112348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9109580);
}
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
gdjs.MainCode.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("music")) == 0;
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "0476b0e98758de406beb55267d58048dd46d3826facc331d7114cac7ada91435_Teleport 6.aac", false, 50, 1);
}{runtimeScene.getGame().getVariables().get("music").setNumber(1);
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9110996);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("music").setNumber(0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
gdjs.MainCode.condition2IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("music")) == 0;
}if ( gdjs.MainCode.condition1IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition2IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9111956);
}
}}
}
if (gdjs.MainCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "0476b0e98758de406beb55267d58048dd46d3826facc331d7114cac7ada91435_Teleport 6.aac", false, 50, 1);
}{runtimeScene.getGame().getVariables().get("music").setNumber(1);
}
{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9113212);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("music").setNumber(0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "start") > 0.3;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.MainCode.GDtext2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDtext2Objects1[i].setColor("252;255;0");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "start") > 0.6;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text2"), gdjs.MainCode.GDtext2Objects1);
{for(var i = 0, len = gdjs.MainCode.GDtext2Objects1.length ;i < len;++i) {
    gdjs.MainCode.GDtext2Objects1[i].setColor("187;189;0");
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "start") > 0.6;
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "start");
}}

}


{


{
{gdjs.evtTools.window.setMargins(runtimeScene, 200, 200, 200, 200);
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainCode.GDNewTextObjects1.length = 0;
gdjs.MainCode.GDNewTextObjects2.length = 0;
gdjs.MainCode.GDNewLightObjects1.length = 0;
gdjs.MainCode.GDNewLightObjects2.length = 0;
gdjs.MainCode.GDNewBitmapTextObjects1.length = 0;
gdjs.MainCode.GDNewBitmapTextObjects2.length = 0;
gdjs.MainCode.GDtext2Objects1.length = 0;
gdjs.MainCode.GDtext2Objects2.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
