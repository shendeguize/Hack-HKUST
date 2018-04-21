####用户注册
**APP>>>Post**:
{
"Request":"signup",
"body":{
         "Username":"nnnn",
         "Passwd":"pppp",
         "Email":"eeee@mmm",
         "Career":"Macxxxxxxx"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":"True"         --True for Successed, False for Failed
}

#### 用户登录
**APP>>POST**:
{
"Request":"login",
"body":{
         "Username":"nnnn",
         "PasswdHash":"pppp"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":"True"         --True for Successed, False for Failed
}

#### 用户选择“测试”
**APP>>POST**:
{
"Request":"test",
"body":{
         "Username":"nnnn"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":{
        "QID1":{
                "Description":"xxxx",
                "OptionA":"aaaaa",
                "OptionB":"bbbbb",
                "OptionC":"ccccc",
                "OptionD":"I don't know"
                "Answer":"A"
               }
       }
}

用户完成测试并提交测试:
**APP>>POST**:
{
"Request":"result",
"body":{
         "Username":"nnnn",
         "QID1":"True",       --True for correct answer, False for wrong answer
         "QID2":"False"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":"True"                -- True for successfully updated, False for Failed
}

用户选择查看技能树
**APP>>POST**:
{
"Request":"skilltree",
"body":{
         "Username":"nnnn"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"body":{
        "Career":"UserCareer",
        "Learned":[PID]
       }
}
