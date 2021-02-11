(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1079:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(50),__webpack_require__(40),__webpack_require__(32),__webpack_require__(36),__webpack_require__(1080),__webpack_require__(1081),__webpack_require__(6),__webpack_require__(41);var _clientApi=__webpack_require__(49),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1082);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1082:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1083:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(362).configure)([__webpack_require__(1084),__webpack_require__(1085)],module,!1)}).call(this,__webpack_require__(98)(module))},1084:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1084},1085:function(module,exports,__webpack_require__){var map={"./Hello/Hello.stories.tsx":1099};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1085},1099:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"hello",(function(){return Hello_stories_hello})),__webpack_require__.d(__webpack_exports__,"standard",(function(){return Hello_stories_standard})),__webpack_require__.d(__webpack_exports__,"big",(function(){return Hello_stories_big}));var objectSpread2=__webpack_require__(212),react=__webpack_require__(0),react_default=__webpack_require__.n(react),Hello_Hello=(__webpack_require__(5),__webpack_require__(1086),function Hello(_ref){var name=_ref.name,big=_ref.big,num=_ref.num,onHello=_ref.onHello,onBye=_ref.onBye;return react_default.a.createElement("div",null,num,big?react_default.a.createElement("h1",null,"안녕하세요, ",name,"!"):react_default.a.createElement("p",null,"안녕하세요, ",name,"!"),react_default.a.createElement("div",null,react_default.a.createElement("button",{onClick:onHello},"Hello"),react_default.a.createElement("button",{onClick:onBye},"Bye")))}),src_Hello_Hello=Hello_Hello;try{Hello_Hello.displayName="Hello",Hello_Hello.__docgenInfo={description:"안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.\n\n- `big` 값을 `true`로 설정하면 **크게** 나타납니다.\n- `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.",displayName:"Hello",props:{name:{defaultValue:null,description:"보여주고 싶은 이름",name:"name",required:!0,type:{name:"string"}},big:{defaultValue:null,description:"이 값을 `true` 로 설정하면 h1 태그로 렌더링합니다.",name:"big",required:!1,type:{name:"boolean"}},num:{defaultValue:null,description:"",name:"num",required:!1,type:{name:"number"}},onHello:{defaultValue:null,description:"Hello 버튼 누를 때 호출 할 함수",name:"onHello",required:!1,type:{name:"() => void"}},onBye:{defaultValue:null,description:"Bye 버튼 누를 때 호출 할 함수",name:"onBye",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hello/Hello.tsx#Hello"]={docgenInfo:Hello_Hello.__docgenInfo,name:"Hello",path:"src/Hello/Hello.tsx#Hello"})}catch(__react_docgen_typescript_loader_error){}try{Hello_Hello.displayName="Hello",Hello_Hello.__docgenInfo={description:"안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.\n\n- `big` 값을 `true`로 설정하면 **크게** 나타납니다.\n- `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.",displayName:"Hello",props:{name:{defaultValue:null,description:"보여주고 싶은 이름",name:"name",required:!0,type:{name:"string"}},big:{defaultValue:null,description:"이 값을 `true` 로 설정하면 h1 태그로 렌더링합니다.",name:"big",required:!1,type:{name:"boolean"}},num:{defaultValue:null,description:"",name:"num",required:!1,type:{name:"number"}},onHello:{defaultValue:null,description:"Hello 버튼 누를 때 호출 할 함수",name:"onHello",required:!1,type:{name:"(() => void)"}},onBye:{defaultValue:null,description:"Bye 버튼 누를 때 호출 할 함수",name:"onBye",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hello/Hello.tsx#Hello"]={docgenInfo:Hello_Hello.__docgenInfo,name:"Hello",path:"src/Hello/Hello.tsx#Hello"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(158),addon_actions_dist=__webpack_require__(156),Hello_stories_hello=(__webpack_exports__.default={title:"components|basic/Hello",component:src_Hello_Hello,decorators:[dist.withKnobs],parameters:{componentSubtitle:'"안녕하세요"라고 보여주는 컴포넌트'}},function hello(){var big=Object(dist.boolean)("big",!1),num=Object(dist.number)("num",7),name=Object(dist.text)("name","Storybook");return react_default.a.createElement(src_Hello_Hello,{name:name,big:big,num:num,onHello:Object(addon_actions_dist.action)("onHello"),onBye:Object(addon_actions_dist.action)("onBye")})});Hello_stories_hello.story={name:"Default"};var Hello_stories_standard=function standard(){return react_default.a.createElement(src_Hello_Hello,{name:"Storybook"})},Hello_stories_big=function big(){return react_default.a.createElement(src_Hello_Hello,{name:"Storybook",big:!0})};Hello_stories_hello.parameters=Object(objectSpread2.a)({storySource:{source:"() => {\n  // knobs 만들기\n  const big = boolean('big', false);\n  const num = number('num', 7);\n  const name = text('name', 'Storybook');\n  return (\n    <Hello\n      name={name}\n      big={big}\n      num={num}\n      onHello={action('onHello')}\n      onBye={action('onBye')}\n    />\n  );\n}"}},Hello_stories_hello.parameters),Hello_stories_standard.parameters=Object(objectSpread2.a)({storySource:{source:'() => <Hello name="Storybook" />'}},Hello_stories_standard.parameters),Hello_stories_big.parameters=Object(objectSpread2.a)({storySource:{source:'() => <Hello name="Storybook" big />'}},Hello_stories_big.parameters)},480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(644),__webpack_require__(645),__webpack_require__(803),__webpack_require__(1020),__webpack_require__(1053),__webpack_require__(1058),__webpack_require__(1070),__webpack_require__(1072),__webpack_require__(1077),__webpack_require__(1079),module.exports=__webpack_require__(1083)},554:function(module,exports){},645:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(362)}},[[480,1,2]]]);
//# sourceMappingURL=main.02e1abbc423d171a7ff8.bundle.js.map