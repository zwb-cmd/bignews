$(function () {
    $('.login_form').on('submit', function (e) {
        //取消表单默认提交事件
        e.preventDefault();
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/user/login',
            data: $(this).serialize(),
            beforeSend: function () {
                //判断输入不能为空
                var flag = false;
                $('.login_form input[name]').each(function (index, item) {
                    if ($(item).val().trim().length == 0) {
                        flag = true;
                    }
                })
                if (flag) {
                    // alert('输入完整的用户名和密码')
                    $('.modal').modal('show');
                    $('.modal-body p').text('输入完整的用户名和密码');
                    return flag;
                }
            },
            success: function (res) {
                //成功失败都有提示信息
                $('.modal').modal('show');
                $('.modal-body p').text(res.msg);
                if (res.code == 200) {
                    //登陆成功
                    $('.modal').on('hidden.bs.modal', function (e) {
                        window.location.href = './index.html'
                    })
                }
            }
        })
    })
})