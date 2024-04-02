# wordle游戏

## 1.致谢：

感谢各位的支持帮我初步完善了这个游戏，感谢你们，thank you思密达！在朋友的提醒之下，我突然想起可能很多人没有typora等markdown文件渲染器，我已经将markdown文件转为支持浏览的PDF文件。

## 2.游戏玩法

打开压缩包之后，会有包含本pdf在内的众多文件。本PDF文件已设置为只读。其他文件例如css文件json文件等不要改动，有路径保存改动后会找不到对应的文件。玩游戏很简单，用浏览器打开index.html即可，支持edge，firefox，Chrome等浏览器(360没试过不知道)

游戏规则：1.输入：系统自动生成了一个含有5个字母的英语单词，您需要通过点击屏幕上的键盘来输入字母，输入完成后点击enter键提交，输入长度不满5个或者超过5个无法提交。可以使用<<键删除已输入的字符。您每次提交的单词必须存在，否则提交后系统将提示无效而不作出判断，您可以通过修改为真实存在的单词来继续提交（如果存在系统会做出判断），且无效提交不计入提交次数（您一共有6次机会）

 2.判断：系统会通过变色来判断字母的信息：例如，判定为绿色的表明这个字母是包含于这个单词的且对应位置正确；判定为黄色的表明这个字母是包含于这个单词的但对应位置错误；判定为灰色的表明这个字母不包含于这个单词。很简单对吧！还有你可以通过restart按键来重新开始游戏。

3.结果：答对的话系统会有'Magnificent!'的提示，答错的话有'Game Over. The correct word was:答案 '的提示，输入单词不合法的话会有'your word is invalid!'

## 3.开源

传承伟大的开源精神，本游戏代码全部开源。您可以通过搭建vscode和node.js系统变量来查看本游戏源代码（通过查看链接

[[VSCODE中配置JavaScript编译环境_vscode配置js环境-CSDN博客](https://blog.csdn.net/weixin_45583303/article/details/125465419?ops_request_misc=%7B%22request%5Fid%22%3A%22170645715516800227423948%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=170645715516800227423948&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-125465419-null-null.142^v99^pc_search_result_base3&utm_term=vscode配置js环境&spm=1018.2226.3001.4187)]:来搭建）；或者右击游戏界面，点击查看页面源代码来查看源码。

## 4.小秘密

看到这了？先去玩一会叭！

如果你想感受一下全部一次猜对的感觉，请在合适的地方输入并敲击回车

```javascript
console.log(wordle)
```

来提前获取答案！