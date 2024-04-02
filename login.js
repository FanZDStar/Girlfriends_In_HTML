let use={
    use_name:[],
    use_password:[]
}
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('register-link');
    loginBtn.addEventListener('mouseup', function() {
        // 获取用户名输入框的值`
        const usernameInput = document.querySelector('input[name="username"]');
        const passwordInput = document.querySelector('input[name="password"]');
        const username = usernameInput.value;
        const password=passwordInput.value;
        if(username==[]&&password==[]){
            alert('请输入账号和密码！')
        }
        else if(username===use.use_name && password===use.use_password&&username!=[]&&password!=[]){
            alert('用户：'+username+'您好!'+'\n'+'快开始你的游戏叭'); // 输出用户名信息到控制台
            window.location.href = 'index.html'; // 实际项目中使用跳转到游戏页面的代码
        }
        else{
            alert('用户名或者账号密码错误！')
        }
        
    });
    registerBtn.addEventListener('mouseup', function() {
        use.use_name = prompt("请输入用户名：",'hjy');
        use.use_password = prompt("密码：",'323232');
        let wait =prompt("请确认你的密码：",'');
        // window.location.href = 'register.html';
        // const usernameInput = document.querySelector('input[name="username"]');
        // const passwordInput = document.querySelector('input[name="password"]');
        // const confirmInput = document.querySelector('input[name="confirm_password"]');
        // const username = usernameInput.value;
        // const password=passwordInput.value;
        // const wait=confirmInput.value;
        // use.use_name=username;
        // use.use_password=password;
        if(wait===use.use_password){
            alert('您已完成注册！快快去登录叭！')
        }
        else{
            alert('密码不对！自己设的密码都记不住啊！哼！'+'\n'+'给我滚去重新注册！')
            use.use_name = [];
            use.use_password = [];
        }
    });

});