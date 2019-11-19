# react-awtk

这个项目的目的是为[awtk](https://github.com/zlgopen/awtk.git)写一个react渲染器。

# 注意

由于 quickjs 对于 js 支持的比较好。所以，前期的开发只在 [awtk-quickjs](https://github.com/zlgopen/awtk-quickjs.git) 中进行。

# 存在的问题

- 由于目前 awtk-quickjs 中的 runScript 不支持多文件运行。所以 setTimeout 是我自己写的一个立即执行函数，不是 quickjs 中的 os.setTimeout.
