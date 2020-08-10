### 插件开发环境
---

> 基于React开发环境搭建的可视化组件开发环境、为了性能、安全、变量污染问题、建议不要使用第三方组件库

#### 启动

    #安装依赖
    npm install
    
    #开发
    #react组件模式
    npm run dev
    #chart组件模式
    npm run dev:chart
    
    #打包
    npm run build

#### 组件属性

`Chart` 

EChart的React组件

`option`

组件属性配置属性、包含以下字段:

| 字段   | 类型   | 描述                       |
| ------ | ------ | -------------------------- |
| rect   | Object | 位置信息{x,y,width,height} |
| fetch  | Object | 接口数据对象               |
| mode   | String | 编辑模式:edit view         |
| config | Object | 属性配置                   |

