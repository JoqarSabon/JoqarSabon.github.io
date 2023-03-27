gdjs.GameoverCode = {};
gdjs.GameoverCode.GDNewTiledSpriteObjects1= [];
gdjs.GameoverCode.GDNewTiledSpriteObjects2= [];
gdjs.GameoverCode.GDNewTextObjects1= [];
gdjs.GameoverCode.GDNewTextObjects2= [];
gdjs.GameoverCode.GDNewText2Objects1= [];
gdjs.GameoverCode.GDNewText2Objects2= [];
gdjs.GameoverCode.GDNewLightObjects1= [];
gdjs.GameoverCode.GDNewLightObjects2= [];
gdjs.GameoverCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.GameoverCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.GameoverCode.GDGreenButtonWithShadowObjects1= [];
gdjs.GameoverCode.GDGreenButtonWithShadowObjects2= [];
gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1= [];
gdjs.GameoverCode.GDGreenButtonWithShadow2Objects2= [];

gdjs.GameoverCode.conditionTrue_0 = {val:false};
gdjs.GameoverCode.condition0IsTrue_0 = {val:false};
gdjs.GameoverCode.condition1IsTrue_0 = {val:false};
gdjs.GameoverCode.condition2IsTrue_0 = {val:false};


gdjs.GameoverCode.asyncCallback9175996 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}
gdjs.GameoverCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.GameoverCode.asyncCallback9175996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameoverCode.asyncCallback9179052 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "endloss", false);
}}
gdjs.GameoverCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.GameoverCode.asyncCallback9179052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameoverCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.GameoverCode.GDGreenButtonWithShadowObjects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameoverCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.GameoverCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameoverCode.condition0IsTrue_0.val = true;
        gdjs.GameoverCode.GDGreenButtonWithShadowObjects1[k] = gdjs.GameoverCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.GameoverCode.GDGreenButtonWithShadowObjects1.length = k;}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("music")) == 0;
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "0476b0e98758de406beb55267d58048dd46d3826facc331d7114cac7ada91435_Teleport 6.aac", false, 50, 1);
}{runtimeScene.getGame().getVariables().get("music").setNumber(1);
}
{ //Subevents
gdjs.GameoverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow2"), gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
gdjs.GameoverCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1.length;i<l;++i) {
    if ( gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.GameoverCode.condition0IsTrue_0.val = true;
        gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1[k] = gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1.length = k;}if ( gdjs.GameoverCode.condition0IsTrue_0.val ) {
{
gdjs.GameoverCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("music")) == 0;
}}
if (gdjs.GameoverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "0476b0e98758de406beb55267d58048dd46d3826facc331d7114cac7ada91435_Teleport 6.aac", false, 50, 1);
}{runtimeScene.getGame().getVariables().get("music").setNumber(1);
}
{ //Subevents
gdjs.GameoverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow"), gdjs.GameoverCode.GDGreenButtonWithShadowObjects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameoverCode.GDGreenButtonWithShadowObjects1.length;i<l;++i) {
    if ( !(gdjs.GameoverCode.GDGreenButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameoverCode.condition0IsTrue_0.val = true;
        gdjs.GameoverCode.GDGreenButtonWithShadowObjects1[k] = gdjs.GameoverCode.GDGreenButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.GameoverCode.GDGreenButtonWithShadowObjects1.length = k;}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("music").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithShadow2"), gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1);

gdjs.GameoverCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1.length;i<l;++i) {
    if ( !(gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.GameoverCode.condition0IsTrue_0.val = true;
        gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1[k] = gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1[i];
        ++k;
    }
}
gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1.length = k;}if (gdjs.GameoverCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("music").setNumber(0);
}}

}


};

gdjs.GameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameoverCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameoverCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameoverCode.GDNewTextObjects1.length = 0;
gdjs.GameoverCode.GDNewTextObjects2.length = 0;
gdjs.GameoverCode.GDNewText2Objects1.length = 0;
gdjs.GameoverCode.GDNewText2Objects2.length = 0;
gdjs.GameoverCode.GDNewLightObjects1.length = 0;
gdjs.GameoverCode.GDNewLightObjects2.length = 0;
gdjs.GameoverCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.GameoverCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.GameoverCode.GDGreenButtonWithShadowObjects1.length = 0;
gdjs.GameoverCode.GDGreenButtonWithShadowObjects2.length = 0;
gdjs.GameoverCode.GDGreenButtonWithShadow2Objects1.length = 0;
gdjs.GameoverCode.GDGreenButtonWithShadow2Objects2.length = 0;

gdjs.GameoverCode.eventsList2(runtimeScene);

return;

}

gdjs['GameoverCode'] = gdjs.GameoverCode;
