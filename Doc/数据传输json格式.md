####用户注册
**APP>>>Post**:
{
"Request":"signup",
"data":{
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
"data":"True"         --True for Successed, False for Failed
}

#### 用户登录
**APP>>POST**:
{
"Request":"login",
"data":{
         "Username":"nnnn",
         "PasswdHash":"pppp"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"data":"True"         --True for Successed, False for Failed
}

#### 用户选择“测试”
**APP>>POST**:
{
"Request":"test",
"data":{
         "Username":"nnnn"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"data":{
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
"data":{
         "Username":"nnnn",
         "QID1":"True",       --True for correct answer, False for wrong answer
         "QID2":"False"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"data":"True"                -- True for successfully updated, False for Failed
}

用户选择查看技能树
**APP>>POST**:
{
"Request":"skilltree",
"data":{
         "Username":"nnnn"
       }
}

**Post>>>APP**:
{
"errCode":"0000",
"errInfo":"Success",
"data":{
        "Career":"UserCareer",
        "Learned":[PID]
       }
}
