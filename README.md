# react-awtk

这个项目的目的是为[awtk](https://github.com/zlgopen/awtk.git)写一个react渲染器。

# 注意

由于 quickjs 相比 jerryscript， 对于 js 支持的比较好。所以，前期的开发只在 [awtk-quickjs](https://github.com/zlgopen/awtk-quickjs.git) 中进行。

## 为了适应本项目的需求，对  awtk-quickjs 进行修改

1. ./src/c/utils.c
将 awtk_quickjs_eval_script 函数 修改为如下。
目的是：添加 std 和 os 库
```c
ret_t awtk_quickjs_eval_script(JSContext* ctx, const char* filename, const char* script,
                               uint32_t size) {
  // 添加 std 和 os 库
  const char *str = "import * as std from 'std';\n"
                "import * as os from 'os';\n"
                "globalThis.std = std;\n"
                "globalThis.os = os;\n";          
  JS_Eval(ctx, str, strlen(str), "<input>", JS_EVAL_TYPE_MODULE);
  ret_t ret = RET_OK;
  JSValue val = JS_Eval(ctx, script, size, filename, JS_EVAL_TYPE_GLOBAL);
  if (JS_IsException(val)) {
    js_std_dump_error(ctx);
    ret = RET_FAIL;
  }
  JS_FreeValue(ctx, val);

  return ret;
}
```
2. ./src/c/run_js.c
在 main.c 中 去除 return_value_if_fail(awtk_quickjs_eval_awtk_js(ctx, "src/js/awtk.js") == RET_OK, 0);
目的是： 重写 awtk.js 。其实就是 react-awtk中的原生组件。功能重复太多。

3. ./src/c/tk_quickjs.c
添加 widget_add_child 原生函数。（这个函数应该是原作者写的时候，忘记写了。现在将它添加进去）
目的是 ：实现 父子 控件功能。
```c
jsvalue_t wrap_widget_add_child(
    JSContext *ctx, 
    jsvalue_const_t this_val,
    int argc, 
    jsvalue_const_t *argv
  ) {
  jsvalue_t jret = JS_NULL;
  if(argc >= 2) {
  int32_t ret = 0;
  widget_t* widget = (widget_t*)jsvalue_get_pointer(ctx, argv[0], "widget_t*");
  widget_t* child = (widget_t*)jsvalue_get_pointer(ctx, argv[1], "widget_t*");

  ret = (ret_t)widget_add_child(widget, child);
  jret = jsvalue_create_int(ctx, ret);
  
  }
  return jret;
}
```
别忘记注册 wrap_widget_add_child 函数。即在 widget_t_init 函数中 添加 `JS_SetPropertyStr(ctx, global_obj, "widget_add_child",JS_NewCFunction(ctx, wrap_widget_add_child, "widget_add_child", 1));JS_SetPropertyStr(ctx, global_obj, "widget_count_children",`。
如下 
```c
ret_t widget_t_init(JSContext *ctx) {
  jsvalue_t global_obj = JS_GetGlobalObject(ctx);
  JS_SetPropertyStr(ctx, global_obj, "widget_add_child",
                      JS_NewCFunction(ctx, wrap_widget_add_child, "widget_add_child", 1));
  JS_SetPropertyStr(ctx, global_obj, "widget_count_children",
                      JS_NewCFunction(ctx, wrap_widget_count_children, "widget_count_children", 1));
  JS_SetPropertyStr(ctx, global_obj, "widget_get_child",
  。。。
```
4. ./SConscript
将 APP_CFLAGS 修改为 `APP_CFLAGS = '-DRES_ROOT=\"\\\"'+RES_ROOT+'\\\"\" -DPATH_MAX=256 -DDUMP_LEAKS -DWITH_QUICKJS_LIBC'`
目的是 添加 -DWITH_QUICKJS_LIBC，即 将 std 和 os 的库加进去。

5. 重新编译
`scons`
# 存在的问题

- 修改了 awtk-quickjs 源码。添加了 std 和 os 库。但是 os.setTimeout. 不起作用。
    - 测试了 quickjs 本身。 os.setTimeout 不起作用。

# 目标

- target_1
```jsx
  <Window
     ref = {
         (ref) => setParentWidget(ref, "win1")
     }
     x="0" y="0" w="0" h="0"
 >
     <Button
         parent = { "win1" }
         text = { "按钮1" }
         x="0" y="0" w="0" h="0"
         tk_style = {{
             selfLayoutParams:{
                 x:"center",
                 y:"middle",
                 w:"50%",
                 h:"30"
             },
         }}
         onClick = {
             (e)=>{
                 console.log("按钮1",e);
             }
         }
     />
     <Button
         parent = { "win1" }
         name="open:dialog1"
         x="0" y="0" w="0" h="0"
         tk_style = {{
             selfLayoutParams:{
                 x:"10",
                 y:"10",
                 w:"50%",
                 h:"30"
             },
         }}
         text="按钮2"
         onClick = {
             (e)=>{
                 console.log("按钮2",e)
             }
         }
     />
 </Window>
```
