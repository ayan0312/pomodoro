# ayanTimer
:tomato:番茄工作法

```javascript
var timer = new AyanTimer({
    container: document.querySelector("#app")  
})
```

## 事件

ayanTimer有6种事件 `['start', 'cancel', "now", 'timing', 'clear']`,可以通过`AyanTimer.prototype.on`添加回调函数

```javascript
timer.on('start',function(){
    console.log('start')
})
```