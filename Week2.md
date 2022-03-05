# Week2 學習重點紀錄
## JavaScript 基本知識
### 1.變數：let const var
![compare](https://res.cloudinary.com/practicaldev/image/fetch/s--UoVTH7K7--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/tgk6utfxmxmifss08wab.png)
### 2.Primitive Data Types
1. Number 
`num.toString()`//化為字串
`num.toFixed()`//四捨五入為指定位數的小數
2. String 
* `string.length`:空白鍵也算
* retrieve charactor:由index取
* `string.slice(a,b)`:begin-index=a end-index=b(exclusive)
* `string.indexOf()`
* `string.toLowerCase()`toUppercase()轉換成大小寫
* `string.split()` ex:spit(" ")把字串轉換成array
3. Boolean：true false  
4. Undefined 未定義
5. Null 什麼都沒有
6. Symbol
### 3.logical operator: return a boolean value
* ==(值) != !==
* ===(資料類型＆值)
* <= >=
* a&&b 兩者為相同才真
* a||b 一者為真即為真
### 4.if elseif else
if(條件一){　//條件一成立就執行子句一
　子句一;
}elseif(條件二){　//條件二成立就執行子句二
　子句二;
}else{　//否則就執行子句三
　子句三;
}
### 5.Truthy and falsy values
falsy:flase 0 null undefined NaN ""
### 6.變數命名規則
* 不能以數字作首字
* 不能使用 -
* 區分大小寫
* 在 JavaScript 中有意義的名稱不能使用，例如： let 、function、return 等。＃保留字列表
* 命名需語義化，可採用「底線連結」或「駝峰式」命名
### 7.Array 
* index:ary[ index]
* arr.length
pop() 方法來移除陣列中的最後一個元素
push() 方法來新增元素到陣列最後面
shift()移除陣列中的第一個元素
unshift()
### 8.Loop:for、while、while…do
* for 迴圈
for(初始狀態;條件;更新內容){}
keyword:break, continue
* while 迴圈
while 的寫法相對於 for 來說更為簡單一些，是使用「現有變數作為初始值」，因此只需要把終止條件放入括號中就可以了，而 step 則是直接放在 do 的最後。
```
let i = 1;
while (i <= 3){
   console.log(i);
   i++
}//1, 2, 3
```
* while do…while 的差異在於檢查終止條件的時間點。
### 9.Object 物件
會有property、method
```
let person = { 
   key : value, 
   key : value,
   key : value, 
}
```
> value ：可以是任何東西，例如：純值、函式、陣列、物件等。 
* Math Object(JS內建許多常用數學方法）
 ex:math.random()隨機產生0~1之間的一個變數 math.abs()取絕對值
### 10.DOM
全名 Document Object Model 中文為文件物件模型。
白話文來說就是把 Document （也就是 HTML）轉換成 Object   
是瀏覽器提供使用 JavaScript 時可以去操作 Document 上元素的橋樑。
取 DOM 元素
.getElementsByClassName()
.querySelector()回傳第一個特定選擇器的元素 
.querySelectorAll()
### 11.Window Object 
Properties:
Console(log method)
Document
Methods:prompt()\alert()
### 12.Arrow function
 this 所指稱的對象有時會不同
```
function greeting() {
  console.log('Hello, JavaScript!!');
}

greeting();
//箭頭函式
const greeting = () => {
  console.log('Hello, JavaScript!!');
};

greeting();
```
如果只是要回傳某個值，可以省略 return
如果我們的函式本身只是要回傳某個值的話，可以把 return 這個字省略掉：
```
const greeting = () => 'Hello, JavaScript!!';
console.log(greeting()); // 'Hello, JavaScript!!'

// 等同於這樣寫
const greeting = function () {
  return 'Hello, JavaScript!!';
};
```
### 13.Array 原型的 forEach
```
arr.forEach(item => console.log(item))
const callback = (item,index) => {
 if(index%2===0) return;
 console.log(item);
}
[0,1,2,3,4,5,6,7].forEach(callback)
```
### 14.Element Object Method
1. 改變元素的 CSS
* HTMLElement.style.paddingTop = '20px'(行內樣式)
* .classList.add() .classList.remove() .classList.toggle() .classList.contains()
2. 改變元素的內容
.innerText
`HTMLElement.innerText = 'hello'`
.innerHTML
`HTMLElement.innerHTML = '<h2>hello</h2>'`

