(function(){"use strict";const m=u();performance.mark("code/didStartRenderer"),m.load(["vs/workbench/workbench.desktop.main","vs/nls!vs/workbench/workbench.desktop.main","vs/css!vs/workbench/workbench.desktop.main"],function(e,t){return performance.mark("code/didLoadWorkbenchMain"),require("vs/workbench/electron-sandbox/desktop.main").main(t)},{configureDeveloperSettings:function(e){return{forceDisableShowDevtoolsOnError:typeof e.extensionTestsPath=="string",forceEnableDeveloperKeybindings:Array.isArray(e.extensionDevelopmentPath)&&e.extensionDevelopmentPath.length>0,removeDeveloperKeybindingsAfterLoad:!0}},canModifyDOM:function(e){b(e)},beforeLoaderConfig:function(e){e.recordStats=!0},beforeRequire:function(){performance.mark("code/willLoadWorkbenchMain"),window.requestIdleCallback(()=>{const e=document.createElement("canvas");e.getContext("2d")?.clearRect(0,0,e.width,e.height),e.remove()},{timeout:50})}});function u(){return window.MonacoBootstrapWindow}function b(e){performance.mark("code/willShowPartsSplash");let t=e.partsSplash;t&&(e.autoDetectHighContrast&&e.colorScheme.highContrast?(e.colorScheme.dark&&t.baseTheme!=="hc-black"||!e.colorScheme.dark&&t.baseTheme!=="hc-light")&&(t=void 0):e.autoDetectColorScheme&&(e.colorScheme.dark&&t.baseTheme!=="vs-dark"||!e.colorScheme.dark&&t.baseTheme!=="vs")&&(t=void 0)),t&&e.extensionDevelopmentPath&&(t.layoutInfo=void 0);let a,i,d;t?(a=t.baseTheme,i=t.colorInfo.editorBackground,d=t.colorInfo.foreground):e.autoDetectHighContrast&&e.colorScheme.highContrast?e.colorScheme.dark?(a="hc-black",i="#000000",d="#FFFFFF"):(a="hc-light",i="#FFFFFF",d="#000000"):e.autoDetectColorScheme&&(e.colorScheme.dark?(a="vs-dark",i="#1E1E1E",d="#CCCCCC"):(a="vs",i="#FFFFFF",d="#000000"));const n=document.createElement("style");if(n.className="initialShellColors",document.head.appendChild(n),n.textContent=`body { background-color: ${i}; color: ${d}; margin: 0; padding: 0; }`,t?.layoutInfo){const{layoutInfo:o,colorInfo:s}=t,r=document.createElement("div");r.id="monaco-parts-splash",r.className=a,o.windowBorder&&(r.style.position="relative",r.style.height="calc(100vh - 2px)",r.style.width="calc(100vw - 2px)",r.style.border="1px solid var(--window-border-color)",r.style.setProperty("--window-border-color",s.windowBorder),o.windowBorderRadius&&(r.style.borderRadius=o.windowBorderRadius)),o.sideBarWidth=Math.min(o.sideBarWidth,window.innerWidth-(o.activityBarWidth+o.editorPartMinWidth));const c=document.createElement("div");c.setAttribute("style",`position: absolute; width: 100%; left: 0; top: 0; height: ${o.titleBarHeight}px; background-color: ${s.titleBarBackground}; -webkit-app-region: drag;`),r.appendChild(c);const l=document.createElement("div");if(l.setAttribute("style",`position: absolute; height: calc(100% - ${o.titleBarHeight}px); top: ${o.titleBarHeight}px; ${o.sideBarSide}: 0; width: ${o.activityBarWidth}px; background-color: ${s.activityBarBackground};`),r.appendChild(l),e.workspace){const p=document.createElement("div");p.setAttribute("style",`position: absolute; height: calc(100% - ${o.titleBarHeight}px); top: ${o.titleBarHeight}px; ${o.sideBarSide}: ${o.activityBarWidth}px; width: ${o.sideBarWidth}px; background-color: ${s.sideBarBackground};`),r.appendChild(p)}const h=document.createElement("div");h.setAttribute("style",`position: absolute; width: 100%; bottom: 0; left: 0; height: ${o.statusBarHeight}px; background-color: ${e.workspace?s.statusBarBackground:s.statusBarNoFolderBackground};`),r.appendChild(h),document.body.appendChild(r)}performance.mark("code/didShowPartsSplash")}})();

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e4503b30fc78200f846c62cf8091b76ff5547662/core/vs/code/electron-sandbox/workbench/workbench.js.map
