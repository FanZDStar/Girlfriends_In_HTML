//import use from './login.js';
document.addEventListener('DOMContentLoaded', function() {
    //const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('register_js');
    registerBtn.addEventListener('mouseup', function() {
        //use.use_name = prompt("请输入用户名：",'hjy');
        //use.use_password = prompt("密码：",'323232');
        const usernameInput = document.querySelector('input[name="username"]');
        const passwordInput = document.querySelector('input[name="password"]');
        const confirmInput = document.querySelector('input[name="confirm_password"]');
        const username = usernameInput.value;
        const password=passwordInput.value;
        const wait=confirmInput.value;
        use.use_name=username;
        use.use_password=password;
        if(wait===use.use_password){
            alert('您已完成注册！快快去登录叭！')
        }
    });

});