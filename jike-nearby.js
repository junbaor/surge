console.log("开始修改请求头")

let body = JSON.parse($request.body); 
body.location = "114.982,32.7502";
body = JSON.stringify(body);

console.log("修改请求头结束")

$done({body});
