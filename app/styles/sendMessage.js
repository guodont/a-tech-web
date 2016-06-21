'use strict';

var InterValObj; //timer变量，控制时间  
var count = 120; //间隔函数，1秒执行  
var curCount;//当前剩余秒数  
var code = ""; //验证码  
var codeLength = 6;//验证码长度  
function sendMessage() {  
    curCount = count;  
    var phone=$("#phone").val();//手机号码  
    if(phone != ""){  
        //产生验证码  
        for (var i = 0; i < codeLength; i++) {  
            code += parseInt(Math.random() * 9).toString();  
        }  
        //设置button效果，开始计时  
        $("#btnSendCode").attr("disabled", "true");  
        $("#btnSendCode").val("请在" + curCount + "秒内输入验证码");  
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  
    //向后台发送处理数据  
        $.ajax({  
            type: "POST", //用POST方式传输  
            dataType: "text", //数据格式:JSON  
            url: apiUrl + '/register first', //目标地址  
            data: "phone=" + phone + "&code=" + code,  
            error: function (XMLHttpRequest, textStatus, errorThrown) { },  
            success: function (msg){ }  
        });  
    }else{  
        alert("手机号码不能为空！");  
    }  
}  
// //timer处理函数  

// $scope.reg = function () {

//             Loading.setLoading(true);

//             var regDate = {
//                 phone: $scope.phone
//             };

//             $http({
//                 method: 'POST',
//                 url: apiUrl + '/register first',
//                 headers: {'X-AUTH-TOKEN': $cookieStore.get("authToken")},
//                 data: regDate
//             })
//                 .then(function (res) {
//                     Loading.setLoading(false);
//                     ngNotify.set("问题提交成功",'success');
//                     $location.path('/register first');
//                 }, function (res) {
//                     ngNotify.set("问题提交失败",'error');
//                     Loading.setLoading(false);
//                 });

//         };