var gdjs;(function(a){const f=new a.Logger("PIXI game renderer"),d=GlobalPIXIModule.PIXI,m=[37,38,39,40];class p{constructor(e,n){this._isFullPage=!0;this._isFullscreen=!1;this._pixiRenderer=null;this._domElementsContainer=null;this._canvasWidth=0;this._canvasHeight=0;this._keepRatio=!0;this._nextFrameId=0;this.getElectronRemote=()=>{if(typeof require=="function"){const e=this._game.getAdditionalOptions(),n=e&&e.electronRemoteRequirePath?e.electronRemoteRequirePath:"@electron/remote";try{return require(n)}catch(i){console.error(`Could not load @electron/remote from "${n}". Error is:`,i)}}return null};this._game=e,this._forceFullscreen=n,this._marginLeft=this._marginTop=this._marginRight=this._marginBottom=0,this._setupOrientation()}createStandardCanvas(e){this._pixiRenderer=d.autoDetectRenderer({width:this._game.getGameResolutionWidth(),height:this._game.getGameResolutionHeight(),preserveDrawingBuffer:!0,antialias:!1});const n=this._pixiRenderer.view;e.appendChild(n),n.style.position="absolute",n.tabIndex=1,n.style.userSelect="none",n.style.outline="none";const i=document.createElement("div");i.style.position="absolute",i.style.overflow="hidden",i.style.outline="none",i.style.pointerEvents="none",i.addEventListener("scroll",r=>{i.scrollLeft=0,i.scrollTop=0,r.preventDefault()}),n.addEventListener("pointerdown",()=>{n.focus()}),i.style["-webkit-user-select"]="none",e.appendChild(i),this._domElementsContainer=i,this._resizeCanvas(),this._game.getScaleMode()==="nearest"&&(this._pixiRenderer.view.style["image-rendering"]="-moz-crisp-edges",this._pixiRenderer.view.style["image-rendering"]="-webkit-optimize-contrast",this._pixiRenderer.view.style["image-rendering"]="-webkit-crisp-edges",this._pixiRenderer.view.style["image-rendering"]="pixelated"),this._game.getPixelsRounding()&&(d.settings.ROUND_PIXELS=!0),window.addEventListener("resize",()=>{this._game.onWindowInnerSizeChanged(),this._resizeCanvas()}),n.focus()}static getWindowInnerWidth(){return typeof window!="undefined"?window.innerWidth:800}static getWindowInnerHeight(){return typeof window!="undefined"?window.innerHeight:800}updateRendererSize(){this._resizeCanvas()}_setupOrientation(){if(typeof window=="undefined"||!window.screen||!window.screen.orientation)return;const e=this._game.getGameData().properties.orientation;try{if(e==="default"){const n=window.screen.orientation.unlock();n&&n.catch(()=>{})}else window.screen.orientation.lock(e).catch(()=>{})}catch(n){f.error("Unexpected error while setting up orientation: ",n)}}_resizeCanvas(){if(!this._pixiRenderer||!this._domElementsContainer)return;(this._pixiRenderer.width!==this._game.getGameResolutionWidth()||this._pixiRenderer.height!==this._game.getGameResolutionHeight())&&this._pixiRenderer.resize(this._game.getGameResolutionWidth(),this._game.getGameResolutionHeight());const e=this._forceFullscreen||this._isFullPage||this._isFullscreen;let n=this._game.getGameResolutionWidth(),i=this._game.getGameResolutionHeight(),r=window.innerWidth-this._marginLeft-this._marginRight,s=window.innerHeight-this._marginTop-this._marginBottom;if(r<0&&(r=0),s<0&&(s=0),e&&!this._keepRatio)n=r,i=s;else if(e&&this._keepRatio||n>r||i>s){let u=r/n;i*u>s&&(u=s/i),n*=u,i*=u}this._pixiRenderer.view.style.top=this._marginTop+(s-i)/2+"px",this._pixiRenderer.view.style.left=this._marginLeft+(r-n)/2+"px",this._pixiRenderer.view.style.width=n+"px",this._pixiRenderer.view.style.height=i+"px",this._domElementsContainer.style.top=this._marginTop+(s-i)/2+"px",this._domElementsContainer.style.left=this._marginLeft+(r-n)/2+"px",this._domElementsContainer.style.width=n+"px",this._domElementsContainer.style.height=i+"px",this._canvasWidth=n,this._canvasHeight=i}keepAspectRatio(e){this._keepRatio!==e&&(this._keepRatio=e,this._resizeCanvas())}setMargins(e,n,i,r){this._marginTop===e&&this._marginRight===n&&this._marginBottom===i&&this._marginLeft===r||(this._marginTop=e,this._marginRight=n,this._marginBottom=i,this._marginLeft=r,this._resizeCanvas())}setWindowSize(e,n){const i=this.getElectronRemote();if(i){const r=i.getCurrentWindow();r&&r.setContentSize(e,n)}else f.warn("Window size can't be changed on this platform.")}centerWindow(){const e=this.getElectronRemote();if(e){const n=e.getCurrentWindow();n&&n.center()}}setFullScreen(e){if(!this._forceFullscreen&&this._isFullscreen!==e){this._isFullscreen=!!e;const n=this.getElectronRemote();if(n){const i=n.getCurrentWindow();i&&i.setFullScreen(this._isFullscreen)}else this._isFullscreen?document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen():document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen();this._resizeCanvas()}}isFullScreen(){const e=this.getElectronRemote();return e?e.getCurrentWindow().isFullScreen():this._isFullscreen||window.screen.height===window.innerHeight}convertCanvasToDomElementContainerCoords(e,n){const i=n||[0,0];return i[0]=e[0]*this._canvasWidth/this._game.getGameResolutionWidth(),i[1]=e[1]*this._canvasHeight/this._game.getGameResolutionHeight(),i}getCanvasToDomElementContainerHeightScale(){return(this._canvasHeight||1)/this._game.getGameResolutionHeight()}bindStandardEvents(e,n,i){const r=this._pixiRenderer;if(!r)return;const s=r.view,u=this;function h(t){const o=[t.pageX-s.offsetLeft,t.pageY-s.offsetTop];return o[0]*=u._game.getGameResolutionWidth()/(u._canvasWidth||1),o[1]*=u._game.getGameResolutionHeight()/(u._canvasHeight||1),o}function _(t){const o=t.pageX-s.offsetLeft,l=t.pageY-s.offsetTop;return 0<=o&&o<(u._canvasWidth||1)&&0<=l&&l<(u._canvasHeight||1)}(function(){isNaN(s.offsetLeft)&&(s.offsetLeft=0,s.offsetTop=0),isNaN(i.body.scrollLeft)&&(i.body.scrollLeft=0,i.body.scrollTop=0),(i.documentElement===void 0||i.documentElement===null)&&(i.documentElement={}),isNaN(i.documentElement.scrollLeft)&&(i.documentElement.scrollLeft=0,i.documentElement.scrollTop=0),isNaN(s.offsetLeft)&&(s.offsetLeft=0,s.offsetTop=0)})();const g=()=>!(i.activeElement===s||i.activeElement===i.body||i.activeElement===null),c=t=>!(t.target===s||t.target===i.body);i.onkeydown=function(t){g()||(m.includes(t.keyCode)&&t.preventDefault(),e.onKeyPressed(t.keyCode,t.location))},i.onkeyup=function(t){g()||(m.includes(t.keyCode)&&t.preventDefault(),e.onKeyReleased(t.keyCode,t.location))},s.onmousemove=function(t){const o=h(t);e.onMouseMove(o[0],o[1])},s.onmousedown=function(t){return e.onMouseButtonPressed(t.button===2?a.InputManager.MOUSE_RIGHT_BUTTON:t.button===1?a.InputManager.MOUSE_MIDDLE_BUTTON:a.InputManager.MOUSE_LEFT_BUTTON),n.focus!==void 0&&n.focus(),!1},s.onmouseup=function(t){return e.onMouseButtonReleased(t.button===2?a.InputManager.MOUSE_RIGHT_BUTTON:t.button===1?a.InputManager.MOUSE_MIDDLE_BUTTON:a.InputManager.MOUSE_LEFT_BUTTON),!1},s.onmouseleave=function(t){e.onMouseLeave()},s.onmouseenter=function(t){e.onMouseEnter();{const o=(t.buttons&1)!=0,l=e.isMouseButtonPressed(a.InputManager.MOUSE_LEFT_BUTTON);o&&!l&&e.onMouseButtonPressed(a.InputManager.MOUSE_LEFT_BUTTON),!o&&l&&e.onMouseButtonReleased(a.InputManager.MOUSE_LEFT_BUTTON)}{const o=(t.buttons&2)!=0,l=e.isMouseButtonPressed(a.InputManager.MOUSE_RIGHT_BUTTON);o&&!l&&e.onMouseButtonPressed(a.InputManager.MOUSE_RIGHT_BUTTON),!o&&l&&e.onMouseButtonReleased(a.InputManager.MOUSE_RIGHT_BUTTON)}{const o=(t.buttons&4)!=0,l=e.isMouseButtonPressed(a.InputManager.MOUSE_MIDDLE_BUTTON);o&&!l&&e.onMouseButtonPressed(a.InputManager.MOUSE_MIDDLE_BUTTON),!o&&l&&e.onMouseButtonReleased(a.InputManager.MOUSE_MIDDLE_BUTTON)}},n.addEventListener("click",function(t){return n.focus!==void 0&&n.focus(),!1},!1),s.oncontextmenu=function(t){return t.preventDefault(),t.stopPropagation(),!1},s.onwheel=function(t){e.onMouseWheel(-t.deltaY)},n.addEventListener("touchmove",function(t){if(!c(t)&&(t.preventDefault(),t.changedTouches))for(let o=0;o<t.changedTouches.length;++o){const l=h(t.changedTouches[o]);e.onTouchMove(t.changedTouches[o].identifier,l[0],l[1]),e.isSimulatingMouseWithTouch()&&(_(t.changedTouches[o])?e.onMouseEnter():e.onMouseLeave())}}),n.addEventListener("touchstart",function(t){if(!c(t)){if(t.preventDefault(),t.changedTouches)for(let o=0;o<t.changedTouches.length;++o){const l=h(t.changedTouches[o]);e.onTouchStart(t.changedTouches[o].identifier,l[0],l[1])}return!1}}),n.addEventListener("touchend",function(t){if(!c(t)){if(t.preventDefault(),t.changedTouches)for(let o=0;o<t.changedTouches.length;++o)e.onTouchEnd(t.changedTouches[o].identifier);return!1}}),n.addEventListener("touchcancel",function(t){if(!c(t)){if(t.preventDefault(),t.changedTouches)for(let o=0;o<t.changedTouches.length;++o)e.onTouchCancel(t.changedTouches[o].identifier);return!1}})}setWindowTitle(e){typeof document!="undefined"&&(document.title="Games";)}getWindowTitle(){return typeof document!="undefined"?document.title:"Games";}startGameLoop(e){let n=0;const i=r=>{this._nextFrameId=requestAnimationFrame(i);const s=n?r-n:0;n=r,e(s)||cancelAnimationFrame(this._nextFrameId)};requestAnimationFrame(i)}getPIXIRenderer(){return this._pixiRenderer}getDomElementContainer(){return this._domElementsContainer}openURL(e){if(typeof window!="undefined"){const n=this.getElectron();if(n)n.shell.openExternal(e);else{const i=window.cordova?"_system":"_blank";window.open(e,i)}}}stopGame(){const e=this.getElectronRemote();if(e){const n=e.getCurrentWindow();n&&n.close()}else typeof navigator!="undefined"&&navigator.app&&navigator.app.exitApp&&navigator.app.exitApp()}getCanvas(){return this._pixiRenderer.view}isWebGLSupported(){return!!this._pixiRenderer&&this._pixiRenderer.type===d.RENDERER_TYPE.WEBGL}getElectron(){return typeof require=="function"?require("electron"):null}}a.RuntimeGamePixiRenderer=p,a.RuntimeGameRenderer=p})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimegame-pixi-renderer.js.map
