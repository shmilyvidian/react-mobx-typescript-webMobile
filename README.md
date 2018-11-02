## mobile-web 项目 (2018.10.26)

> 基于React 16 的一套web项目

1. 启用和运行项目

   ```javascript
   yarn  // 或者  npm i
   yarn start
   ```

2. 项目特性

   - React16 [文档](https://doc.react-china.org/docs/hello-world.html)
   - Reat-router4 [文档](https://reacttraining.com/react-router/)
   - Mobx+Mobx-react [文档](https://cn.mobx.js.org/)
   - Webpack 3.0 [文档](https://webpack.js.org/)
   - Typescript [文档](https://www.tslang.cn/)
   - Antd-mobile [文档](https://mobile.ant.design/index-cn)
   - Axios [文档](https://github.com/axios/axios)
   - styled-components [文档](https://www.styled-components.com/)

3. 项目结构

   ```javascript
   | public   // 项目入口

   | scripts  // 打包配置文件

   | src

       |__ assets      // 静态资源

       |__ components  // 组件

       |__ routers     // 页面路由

       |__ stores      // 状态

       |__ style		// 演样式

       |__ view		// 页面视图

   ```

   > 项目基本组织结构由脚手架 `create-react-app` [GO](https://github.com/facebook/create-react-app)  `npm run eject` 自定义配置。

4. 打包部署

   - `yarn test` 开发测试

   - `yarn build` 开发部署


