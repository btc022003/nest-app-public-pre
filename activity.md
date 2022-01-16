# 活动发布报名

> 使用NestJS实现一个API接口，活动发布已经报名。

1. 活动发布者需要先登陆
2. 可以发布活动
3. 活动发布者可以查看自己发布过的活动
4. 活动发布者可以分享活动，其他人通过点击链接进行报名，报名的时候需要提供邮箱、名字、手机号

```
users【用户】
  id
  user_name
  password
  mobile
  email
  remarks

activities【活动】
  id
  name
  desc
  content
  cover_image
  user_id【关联用户表，谁发布的活动】

activity_logs【报名记录】
  id
  name
  email
  mobile
  remarks
  activity_id【关联活动表，知道是哪一个活动】
```

---

## 需要实现的接口

#### 注册

输入信息进行注册

```
url
  /auth/reg

method
  post
params
  userName
  password
  nickName
  email
  mobile
  remarks

```

#### 登陆

输入信息进行登陆

```
url
  /auth/login
method
  post
params
  userName
  password
```

#### 获取活动列表

登陆之后获取本人发布的活动列表信息

```
url
  /activities
method
  get
params
  per   每页显示的数量
  page  页码
```

#### 发布活动

登陆之后发布活动

```
url
  /activities
methods
  post
params
  name
  desc
  content
  coverImage
```

#### 活动详情

所有人都可以根据活动id查看活动详情

```
url
  /show/:id
method
  get
```

#### 删除活动

登陆之后可以删除自己发布的活动，根据活动id

```
url
  /activities/:id
method
  delete
```

#### 获取当前活动的报名记录

登陆之后可以获取活动的报名记录信息

```
url
  /activities/:id
method
  get
```

#### 活动报名

提交报名信息

```
url
  /show/sub
method
  post
params
  activityId
  name
  email
  mobile
  remarks
```
