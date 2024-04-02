## 1.为什么使用 let/const 来定义变量而不是 var 关键字

#### (1)变量提升     可以先使用再申明，有点混乱

```javascript
 console.log(a); // undefined
 var a = 10; 
// 编译过程
var a; 
console.log(a); // undefined
a = 10;
```

#### (2)重复申明  也是在语法分析阶段处理的结果   let更符合一般编程习惯的做法

```javascript
var a = 1;
console.log(a); // 1
var a = 2;
console.log(a); // 2
// ------------
let a = 1;
console.log(a);
let a = 2;
console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared

const a = 1;
console.log(a);
const a = 2;
console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared
```

#### (3)作用域范围        不多解释，请看代码

```javascript
function varTest() {
  var a = 1;
  {
    var a = 2; // 函数块中，同一个变量
    console.log(a); // 2
  }
  console.log(a); // 2
}
function letTest() {
  let a = 1;
  {
    let a = 2; // 代码块中，新的变量
    console.log(a); // 2
  }
  console.log(a); // 1
}
varTest();
letTest();
```

let 声明的变量的作用域可以比 var 声明的变量的作用域有更小的限定范围，更具灵活。

## 2.let 和 const 关键字定义的变量有什么区别

let声明的变量可以改变，值和类型都可以改变；const声明的常量不可以改变   所以const变量必须初始化

## 3. 已经被预定义的全局变量分别有怎样的作用

可以给下面的函数进行调用，不同函数也可以决定同一个变量，便于操作。只需要初始化一次

## 4.在怎样的时刻需要调用 initialize 函数

根据我的代码和思路，最开始需要初始化一次，然后用户点击restart按键的时候初始化调用initialize 函数一次，共两次；

## 5.程序的交互信息是什么

state，current_Guess_Time ,row_lenth,和用户提交的guess,wordle(answer)

## 6.什么是dom，这项技术有怎样的作用

它将网页文档表示为一个树形结构，每个元素、属性和文本都是树的节点。通过DOM，开发人员可以使用脚本语言（如JavaScript）来访问、修改和操作网页的内容、结构和样式。

作用：**访问和操作网页元素，**响应用户交互**，**动态更新网页内容**，**操作样式和布局

## 7.有哪些状态或变量需要被初始化

```javascript
currentRow = 0;
currentTile = 0;
state = false;// 初始化时 state 变量处于false的状态
guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];
```

#### 8.如何读取json文件       尝试过fetch和import，还有把json文件转成js文件，但都不行有CORS报错

> Access to script at 'file:///C:/Users/hp/Wordle-Clone-master/app.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

## 9.如何随机抽取一个单词

```javascript
function generateRandomAnswer(){
  wordle= words[Math.floor(Math.random()*words.length)].toUpperCase()//全部转换为大写字母
}
```

## 10.判断一个单词是否合法

思考问题没有太想得通，为啥要那么多规则，只要判断这个单词在不在数组里不就行了嘛？然后在用户提交之后就调用判断一下，返回true就继续进行calculate_Color_Sequence，返回false就输出单词不合法提示，要求客户重新输入

```javascript
function isValidGuess(guess) {
  const lowerCaseGuess = guess.toLowerCase(); // 将用户猜测的单词转换为小写
  return words.includes(lowerCaseGuess); // 判断转换后的单词是否包含在words数组中
}
```

如果不合法，那state仍然保持false状态，不进行提交的处理，直至用户修改至单词合法

## 11.codewars_wordle答案

```javascript
function resolver(guess, answer) 
{
    let length=5;
    let green="g";
    let yellow="y";
    let colorArray=["b","b","b","b","b"];
    if(guess===answer)
    {
        
        console.log('ggggg');
        return "ggggg";
    }
    else
    {
        let Array_of_guess=guess.split("");
        let Array_of_answer=answer.split("");   
        for(let i=0;i<length;i++)
        {
            if(Array_of_guess[i]===Array_of_answer[i])
            {
                colorArray[i]=green;
                Array_of_answer[i]=" ";
            }
        }
        for(let i=0;i<length;i++)
        {
            for(let j=0;j<length;j++)
            {
            if(Array_of_guess[i]===Array_of_answer[j]&&colorArray[i]!==green)
            {
                colorArray[i]=yellow;
                Array_of_answer[j]=" ";
                break;
            }
            }
        }
        let ret=colorArray.join("");
        console.log(ret);
        return ret;
    }

}
```

## 12.是否需要对 guess 变量的字符串作某种预处理，为什么

需要将guess字符串变成字符数组，方便遍历每个字母进行判断

```javascript
 let answerToArray=answer.split("");  
```

