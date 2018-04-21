####用户注册
**APP>>>Server**:
{
"POST":"/signup",
"body":{
         "username":"nnnn",
         "password":"pppp",
         "email":"eeee@mmm",
         "career":"Macxxxxxxx"
       }
}
**Server>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":"True"         --True for Successed, False for Failed
}

#### 用户登录
**APP>>Server**:
{
"POST":"/login",
"body":{
         "username":"nnnn",
         "password":"pppp"
       }
}

**Server>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":"True"         --True for Successed, False for Failed
}

#### 用户选择“测试”
**APP>>Server**:
{
"GET":"/test",
"body":{
         "username":"nnnn"
       }
}

**Server>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"test":{
        "1":{
                "description":"xxxx",
                "optionA:"aaaaa",
                "optionB":"bbbbb",
                "optionC":"ccccc",
                "optionD":"I don't know"
               }
         "2": {
         ....
         }
         ....
       }
}

用户完成测试并提交测试:
**APP>>Server**
{
"POST":"/test",
"body":{
         "Username":"nnnn",
         "1":"A",       --QID is Int
         "2":"B",
         "3":"C",
         "4":"D",
       }
}

**Server>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":"True"                -- True for successfully updated, False for Failed
}

用户选择查看技能树
**APP>>Server**:
{
"GET":"/skilltree",
"body":{
         "username":"nnnn"
       }
}

**Server>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":{
        "career":"UserCareer",
        "learned":[PID]
       }
}
