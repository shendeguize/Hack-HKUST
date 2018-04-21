APP启动，加载
用户注册:
    - APP端 >>> 后端   :用户注册信息(含專業選擇)
        后端 : 在已有数据库新建一行,未知信息为NULL
    - 后端  >>> APP端  :注册结果
用户登录：
    - APP端 >>> 后端   :用户信息
    - 后端  >>> App端  :校验结果
用户选择"测试":
    - APP端 >>> 后端   :请求测试,用户信息
        后端 ： 
              SQL：skilltreepoints中，order升序，limit 10，且userinfo中，对应pID为0
              SQL：对于上述得出的10个pID，查找并随机给出question中对应每个pID的问题
              返回结果
    - 后端  >>> APP端  :测试题
用户完成测试:
    - APP端 >>> 后端   :用户信息,题号与对应答案
        后端 ：
              SQL：question中，对应qID的answer，记录对应pID-0/1
              SQL：将pID-0/1更新到userinfo中
              返回结果
    - 后端  >>> APP端  :是否更新成功
    - APP端 >>> 后端   :请求能力评估
        后端 ： 
              SQL：查询userinfo，记录每个pID的掌握情况，记录career
              SQL：查询weight中，当前用户career下，每个branch中，每个节点weight乘pID的掌握情况(0/1),求和得出sum1,对于每个branch的所有weight求和得出sum2
              计算,sum1/sum2*100%
              返回各个branch与结果
    - 后端  >>> APP端  :用户信息,能力得分
显示用户能力报告
用户点击技能树图标查看技能树：
    - APP端 >>> 后端   :请求技能树,用户信息
        后端 : 
              SQL: userinfo中,pID掌握情况非0的项(if NULL,更新值为0)
              返回结果
    - 后端  >>> APP端  :用户点亮的技能数组
用户点击技能树上某一个节点:
    - APP端 >>> 后端   :点击节点号
        后端 : 
              SQL:从skilltreepoints中查找节点信息
    - 后端  >>> APP端  :节点信息
用户进入该节点对应页面
