$(function () {

    $.ajax({
        type: 'get',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        // url: 'http://localhost:8080/api/v1/admin/user/info',
        url: BigNew.user_info,
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                //获取用户名和头像
                $('.user_info span').html(`欢迎&nbsp;&nbsp;${res.data.nickname}`)
                $('.user_info img').attr('src', res.data.userPic);
                //获取头像
                $('.user_center_link img').attr('src', res.data.userPic);
            }
        }
    })

    //退出账号
    $('.logout').on('click', function () {
        localStorage.removeItem('token');
        window.location.href = "./login.html"
    })
})