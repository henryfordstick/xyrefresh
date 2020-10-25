# xyrefresh

> 绿洁居网

绿洁居网是帮助公司推广业务，用来让客户快速了解选择合适的清洁服务。

## Features

已实现的功能：

- [x] 绿洁居公司的百度定位功能。
- [x] 显示绿洁居提供服务的介绍。
- [x] 显示绿洁居发布的新闻动态。
- [x] 展示定制绿洁居的合作商。
- [x] 分享功能，将动态分享到微信，微博，QQ等第三方应用。


## Technology

主要用到的技术：

- React：MVVM 框架，用于构建前端界面。
- cssnext：css3+，未来css的规范，部分现代浏览器已经支持。
- Webpack：打包前端项目，生成静态文件。
- Apollo：基于 GraphQL 封装，用于搭建后端 GraphQL 支持和前端数据请求。
- Koa：后端 Web 层框架，用于接收请求，进行处理。
- Mongoose：为 MongoDB 定义数据模型。
- Gulp：打包后端项目，编译 TS 语法。
- Jest：测试前后端项目，单元测试，API 测试等。
- Typescript：为 JS 提供良好的类型检查功能，能编译出高质量的 JS 代码。

项目没有使用脚手架工具搭建，都是一步一步配置而成。具体的搭建流程：[项目选型与环境搭建](https://github.com/henryfordstick/xyrefresh/blob/master/Introduction.md)。

## Start

```shell
# clone with Git Bash
git clone https://github.com/henryfordstick/xyrefresh.git

# change directory
cd xyrefresh

# install dependencies
npm i

# serve with hot reload at localhost:8083
npm run build
npm run server:start
```

## Deploy

```shell
# clone with Git Bash
git clone https://github.com/henryfordstick/xyrefresh.git

# run docker containers. It may take a long time.
docker-compose up -d

# server running at localhost:8081
```

## License

[MIT](https://github.com/henryfordstick/xyrefresh/blob/master/LICENSE)

Copyright (c) 2020 henryfordstick




