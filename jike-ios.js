#!name=Jike
#!desc=修改位置

[Script]
jike = type=http-request,pattern=https://api.ruguoapp.com/1.0/nearbyFeed/list,requires-body=true,max-size=-1,debug=true,script-path=https://ghproxy.com/https://raw.githubusercontent.com/junbaor/surge-scripts/main/jike-nearby.js

[MITM]
hostname = %APPEND% api.ruguoapp.com