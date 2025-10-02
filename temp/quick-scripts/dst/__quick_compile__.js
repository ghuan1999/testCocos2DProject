
(function () {
var scripts = [{"deps":{"./assets/framework/LocalizedLabel":84,"./assets/framework/LocalizedSprite":83,"./assets/framework/Platform":20,"./assets/framework/FontSetter":86,"./assets/framework/network/Message":65,"./assets/framework/network/MessageBase":68,"./assets/framework/network/MessageDispatch":75,"./assets/framework/network/MessageHandler":71,"./assets/framework/network/MessageType":73,"./assets/framework/network/Socket":67,"./assets/framework/network/ConnectManager":69,"./assets/framework/qqsdk/SoundHelper":66,"./assets/framework/qqsdk/BKTool":70,"./assets/framework/wxsdk/GameConfigs":72,"./assets/framework/wxsdk/MoreGameComponent":74,"./assets/framework/wxsdk/MoreGameDialog":78,"./assets/framework/wxsdk/MoreGameItem":79,"./assets/framework/wxsdk/MoreGameManager":76,"./assets/framework/wxsdk/MoreGameStyle":80,"./assets/framework/wxsdk/RankItem":87,"./assets/framework/wxsdk/WxRankDialog":81,"./assets/framework/wxsdk/sdk":3,"./assets/framework/wxsdk/AddToMyFav":18,"./assets/migration/use_v2.0.x_cc.Toggle_event":2,"./assets/Game/Scripts/Info":6,"./assets/Game/Scripts/hex-lines-game/Consts":19,"./assets/Game/Scripts/hex-lines-game/Game":9,"./assets/Game/Scripts/hex-lines-game/GridManager":77,"./assets/Game/Scripts/hex-lines-game/HexonTile":15,"./assets/Game/Scripts/hex-lines-game/Res":14,"./assets/Game/Scripts/hex-lines-game/Animal":31,"./assets/Game/Scripts/hex-lines-game/base/com":4,"./assets/Game/Scripts/hex-lines-game/ds/IntMap":7,"./assets/Game/Scripts/ui/DCParticleSystem":16,"./assets/Game/Scripts/ui/DailyGetDialog":17,"./assets/Game/Scripts/ui/GetDialog":8,"./assets/Game/Scripts/ui/HbDialog":23,"./assets/Game/Scripts/ui/LevelDialog":24,"./assets/Game/Scripts/ui/LevelupDialog":25,"./assets/Game/Scripts/ui/Localize":82,"./assets/Game/Scripts/ui/LuckyDialog":27,"./assets/Game/Scripts/ui/PauseDialog":21,"./assets/Game/Scripts/ui/ShopDialog":43,"./assets/Game/Scripts/ui/ShopItemTemplate":22,"./assets/Game/Scripts/ui/WinDialog":29,"./assets/Game/Scripts/ui/DCBackground":26,"./assets/Game/Scripts/Main":32,"./assets/framework/LanguageManager":85,"./assets/framework/plugin_boosts/gamesys/InfiniteBackground":33,"./assets/framework/plugin_boosts/gamesys/LocalLifeSystem":10,"./assets/framework/plugin_boosts/gamesys/LocalTimeSystem":28,"./assets/framework/plugin_boosts/gamesys/PoolManager":34,"./assets/framework/plugin_boosts/gamesys/PsFx":30,"./assets/framework/plugin_boosts/gamesys/PsFxPlayer":36,"./assets/framework/plugin_boosts/gamesys/PsSpawner":39,"./assets/framework/plugin_boosts/gamesys/Device":40,"./assets/framework/plugin_boosts/libs/easing":11,"./assets/framework/plugin_boosts/misc/ClickAudio":12,"./assets/framework/plugin_boosts/misc/ClickAudioManager":37,"./assets/framework/plugin_boosts/misc/DataCenter":38,"./assets/framework/plugin_boosts/misc/FrameSwitch":46,"./assets/framework/plugin_boosts/misc/InputSystem":35,"./assets/framework/plugin_boosts/misc/JoyStick":41,"./assets/framework/plugin_boosts/misc/Net":54,"./assets/framework/plugin_boosts/misc/Signal":45,"./assets/framework/plugin_boosts/misc/SpriteFrameCache":49,"./assets/framework/plugin_boosts/misc/BoostsAction":44,"./assets/framework/plugin_boosts/ui/DCPandoraPoint":42,"./assets/framework/plugin_boosts/ui/DCSprite":47,"./assets/framework/plugin_boosts/ui/DCToggle":51,"./assets/framework/plugin_boosts/ui/DCUI":48,"./assets/framework/plugin_boosts/ui/LoadingManager":50,"./assets/framework/plugin_boosts/ui/MessageBoxComponent":52,"./assets/framework/plugin_boosts/ui/MessageBoxManager":61,"./assets/framework/plugin_boosts/ui/PandoraPoint":56,"./assets/framework/plugin_boosts/ui/ToastComponent":60,"./assets/framework/plugin_boosts/ui/ToastManager":53,"./assets/framework/plugin_boosts/ui/UIComponent":55,"./assets/framework/plugin_boosts/ui/UIFunctions":58,"./assets/framework/plugin_boosts/ui/View":59,"./assets/framework/plugin_boosts/ui/ViewManager":63,"./assets/framework/plugin_boosts/ui/DCLabel":57,"./assets/framework/plugin_boosts/ui/game/LevelSelector":5,"./assets/framework/plugin_boosts/utils/EventManager":13,"./assets/framework/plugin_boosts/utils/Intersection":62,"./assets/framework/plugin_boosts/utils/Common":64,"./assets/framework/plugin_boosts/gamesys/FSM":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/FSM.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"../plugin_boosts/utils/EventManager":13,"./GameConfigs":72},"path":"preview-scripts/assets/framework/wxsdk/sdk.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/base/com.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/game/LevelSelector.js"},{"deps":{"../../framework/plugin_boosts/misc/DataCenter":38,"./hex-lines-game/Res":14,"../../framework/plugin_boosts/ui/ToastManager":53,"../../framework/plugin_boosts/gamesys/Device":40,"../../framework/Platform":20,"../../framework/wxsdk/MoreGameManager":76},"path":"preview-scripts/assets/Game/Scripts/Info.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/ds/IntMap.js"},{"deps":{"../../../framework/plugin_boosts/ui/View":59,"../Info":6,"../../../framework/plugin_boosts/ui/ViewManager":63,"../../../framework/Platform":20},"path":"preview-scripts/assets/Game/Scripts/ui/GetDialog.js"},{"deps":{"./Res":14,"./HexonTile":15,"./GridManager":77,"../Info":6,"./Animal":31,"../../../framework/Platform":20,"../../../framework/plugin_boosts/ui/ToastManager":53,"../../../framework/plugin_boosts/ui/ViewManager":63,"../../../framework/plugin_boosts/ui/game/LevelSelector":5,"../../../framework/plugin_boosts/misc/InputSystem":35},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Game.js"},{"deps":{"../utils/EventManager":13,"../misc/Signal":45},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalLifeSystem.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/libs/easing.js"},{"deps":{"../gamesys/Device":40},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudio.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/EventManager.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Res.js"},{"deps":{"./Consts":19,"./Game":9,"./Res":14},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/HexonTile.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":48,"../Info":6},"path":"preview-scripts/assets/Game/Scripts/ui/DCParticleSystem.js"},{"deps":{"../Info":6,"../../../framework/plugin_boosts/ui/View":59,"../../../framework/Platform":20},"path":"preview-scripts/assets/Game/Scripts/ui/DailyGetDialog.js"},{"deps":{"../Platform":20},"path":"preview-scripts/assets/framework/wxsdk/AddToMyFav.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Consts.js"},{"deps":{"./wxsdk/sdk":3,"./plugin_boosts/ui/ToastManager":53,"./qqsdk/BKTool":70,"./plugin_boosts/misc/SpriteFrameCache":49,"./plugin_boosts/misc/Signal":45,"./plugin_boosts/utils/EventManager":13},"path":"preview-scripts/assets/framework/Platform.js"},{"deps":{"../../../framework/Platform":20},"path":"preview-scripts/assets/Game/Scripts/ui/PauseDialog.js"},{"deps":{"../../../framework/plugin_boosts/misc/Signal":45},"path":"preview-scripts/assets/Game/Scripts/ui/ShopItemTemplate.js"},{"deps":{"../../../framework/Platform":20,"../../../framework/plugin_boosts/ui/ViewManager":63,"../../../framework/plugin_boosts/ui/ToastManager":53,"../hex-lines-game/Res":14,"../Info":6,"../../../framework/plugin_boosts/gamesys/Device":40,"../../../framework/plugin_boosts/ui/View":59},"path":"preview-scripts/assets/Game/Scripts/ui/HbDialog.js"},{"deps":{"../Info":6,"../../../framework/plugin_boosts/ui/game/LevelSelector":5},"path":"preview-scripts/assets/Game/Scripts/ui/LevelDialog.js"},{"deps":{"../Info":6,"../../../framework/plugin_boosts/ui/View":59,"../../../framework/Platform":20},"path":"preview-scripts/assets/Game/Scripts/ui/LevelupDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/DCUI":48,"../../../framework/plugin_boosts/misc/SpriteFrameCache":49,"../Info":6},"path":"preview-scripts/assets/Game/Scripts/ui/DCBackground.js"},{"deps":{"../../../framework/plugin_boosts/ui/ToastManager":53,"../../../framework/plugin_boosts/ui/ViewManager":63,"../../../framework/plugin_boosts/ui/View":59,"../Info":6,"../../../framework/Platform":20,"../../../framework/plugin_boosts/gamesys/Device":40,"../hex-lines-game/Res":14,"../../../framework/plugin_boosts/ui/UIFunctions":58,"../Main":32},"path":"preview-scripts/assets/Game/Scripts/ui/LuckyDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/LocalTimeSystem.js"},{"deps":{"../Info":6,"../../../framework/Platform":20,"../../../framework/plugin_boosts/ui/ViewManager":63,"../hex-lines-game/Consts":19},"path":"preview-scripts/assets/Game/Scripts/ui/WinDialog.js"},{"deps":{"./Device":40},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFx.js"},{"deps":{},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/Animal.js"},{"deps":{"./Info":6,"../../framework/Platform":20,"./hex-lines-game/Res":14,"../../framework/plugin_boosts/ui/ViewManager":63,"../../framework/plugin_boosts/gamesys/Device":40,"../../framework/plugin_boosts/ui/ToastManager":53},"path":"preview-scripts/assets/Game/Scripts/Main.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/InfiniteBackground.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PoolManager.js"},{"deps":{"./JoyStick":41},"path":"preview-scripts/assets/framework/plugin_boosts/misc/InputSystem.js"},{"deps":{"./PsFx":30,"./Device":40},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsFxPlayer.js"},{"deps":{"./ClickAudio":12},"path":"preview-scripts/assets/framework/plugin_boosts/misc/ClickAudioManager.js"},{"deps":{"../utils/EventManager":13},"path":"preview-scripts/assets/framework/plugin_boosts/misc/DataCenter.js"},{"deps":{"./PsFx":30,"./PoolManager":34},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/PsSpawner.js"},{"deps":{"../../qqsdk/SoundHelper":66},"path":"preview-scripts/assets/framework/plugin_boosts/gamesys/Device.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/JoyStick.js"},{"deps":{"./DCUI":48,"./PandoraPoint":56},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCPandoraPoint.js"},{"deps":{"./ShopItemTemplate":22,"../../../framework/plugin_boosts/misc/SpriteFrameCache":49,"../hex-lines-game/Res":14,"../../../framework/Platform":20,"../Info":6,"../../../framework/plugin_boosts/ui/ToastManager":53,"../../../framework/plugin_boosts/ui/UIFunctions":58,"../../../framework/plugin_boosts/gamesys/Device":40,"../Main":32},"path":"preview-scripts/assets/Game/Scripts/ui/ShopDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/BoostsAction.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Signal.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/FrameSwitch.js"},{"deps":{"./DCUI":48,"../misc/SpriteFrameCache":49},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCSprite.js"},{"deps":{"../misc/DataCenter":38},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCUI.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/SpriteFrameCache.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/LoadingManager.js"},{"deps":{"./DCUI":48},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCToggle.js"},{"deps":{"./View":59,"./MessageBoxManager":61},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxComponent.js"},{"deps":{"./ToastComponent":60},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/misc/Net.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/PandoraPoint.js"},{"deps":{"./DCUI":48},"path":"preview-scripts/assets/framework/plugin_boosts/ui/DCLabel.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/ui/UIFunctions.js"},{"deps":{"./UIComponent":55,"./ViewManager":63,"./UIFunctions":58},"path":"preview-scripts/assets/framework/plugin_boosts/ui/View.js"},{"deps":{"./UIFunctions":58},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ToastComponent.js"},{"deps":{"./ViewManager":63},"path":"preview-scripts/assets/framework/plugin_boosts/ui/MessageBoxManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Intersection.js"},{"deps":{"./View":59},"path":"preview-scripts/assets/framework/plugin_boosts/ui/ViewManager.js"},{"deps":{"../misc/SpriteFrameCache":49},"path":"preview-scripts/assets/framework/plugin_boosts/utils/Common.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/Message.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/SoundHelper.js"},{"deps":{"./MessageHandler":71,"./MessageType":73},"path":"preview-scripts/assets/framework/network/Socket.js"},{"deps":{"./MessageType":73,"./Message":65,"./ConnectManager":69},"path":"preview-scripts/assets/framework/network/MessageBase.js"},{"deps":{"./Socket":67},"path":"preview-scripts/assets/framework/network/ConnectManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/qqsdk/BKTool.js"},{"deps":{"./Message":65,"./MessageType":73,"./MessageDispatch":75},"path":"preview-scripts/assets/framework/network/MessageHandler.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/GameConfigs.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageType.js"},{"deps":{"./MoreGameManager":76},"path":"preview-scripts/assets/framework/wxsdk/MoreGameComponent.js"},{"deps":{},"path":"preview-scripts/assets/framework/network/MessageDispatch.js"},{"deps":{"./MoreGameComponent":74,"./GameConfigs":72},"path":"preview-scripts/assets/framework/wxsdk/MoreGameManager.js"},{"deps":{"./ds/IntMap":7,"./Game":9,"./Res":14},"path":"preview-scripts/assets/Game/Scripts/hex-lines-game/GridManager.js"},{"deps":{"./MoreGameManager":76,"./MoreGameItem":79},"path":"preview-scripts/assets/framework/wxsdk/MoreGameDialog.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/MoreGameItem.js"},{"deps":{"./MoreGameComponent":74},"path":"preview-scripts/assets/framework/wxsdk/MoreGameStyle.js"},{"deps":{"../Platform":20,"../plugin_boosts/ui/View":59,"../plugin_boosts/misc/Signal":45,"../plugin_boosts/ui/ViewManager":63,"../../Game/Scripts/Info":6},"path":"preview-scripts/assets/framework/wxsdk/WxRankDialog.js"},{"deps":{"../../../framework/plugin_boosts/ui/ViewManager":63,"../../../framework/LanguageManager":85},"path":"preview-scripts/assets/Game/Scripts/ui/Localize.js"},{"deps":{"./LanguageManager":85},"path":"preview-scripts/assets/framework/LocalizedSprite.js"},{"deps":{"./LanguageManager":85},"path":"preview-scripts/assets/framework/LocalizedLabel.js"},{"deps":{},"path":"preview-scripts/assets/framework/LanguageManager.js"},{"deps":{},"path":"preview-scripts/assets/framework/FontSetter.js"},{"deps":{},"path":"preview-scripts/assets/framework/wxsdk/RankItem.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    