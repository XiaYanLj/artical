

    function requestMethod(par1,par2,par3,callback){

        //创建请求对旬xhr
        var xhr =new XMLHttpRequest();
        //2.建立与服务器的连接（get/post）
        xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/login' + par2)
        //设置头信息，让数据以表单的形式传递给服务器
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
        //3.发送请求*/
        xhr.send(par3)
        //4.接受服务器端返回数据
        xhr.onreadystatechange =function () {
            //readyState == 4  代表ajax数据请求已经完成
            //status == 200 表示数据成功返回
            if (xhr.readyState== 4 && xhr.status== 200){
                //responseText中包含了服务端返回数据
                var res = JSON.parse(xhr.responseText);
                var str = res.data;
                callback(str);
            }
        }
    }



