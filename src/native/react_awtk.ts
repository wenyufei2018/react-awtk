export interface eventFun {
  (evt?:any):TRet;
}

export const eventFunName = {
  // onClick : TEventType.POINTER_DOWN,
  // onClick : TEventType.POINTER_DOWN_BEFORE_CHILDREN,
  // onClick : TEventType.POINTER_MOVE,
  // onClick : TEventType.POINTER_MOVE_BEFORE_CHILDREN,
  // onClick : TEventType.POINTER_UP,
  // onClick : TEventType.POINTER_UP_BEFORE_CHILDREN,
  // onClick : TEventType.WHEEL,
  // onClick : TEventType.WHEEL_BEFORE_CHILDREN,
  // onClick : TEventType.POINTER_DOWN_ABORT,
  // onClick : TEventType.CONTEXT_MENU,
  // onClick : TEventType.POINTER_ENTER,
  // onClick : TEventType.POINTER_LEAVE,
  onLongPress : TEventType.LONG_PRESS,
  onClick : TEventType.CLICK,
  // onClick : TEventType.FOCUS,
  // onClick : TEventType.BLUR,
  // onClick : TEventType.KEY_DOWN,
  // onClick : TEventType.KEY_DOWN_BEFORE_CHILDREN,
  // onClick : TEventType.KEY_REPEAT,
  // onClick : TEventType.KEY_UP,
  // onClick : TEventType.KEY_UP_BEFORE_CHILDREN,
  // onClick : TEventType.WILL_MOVE,
  // onClick : TEventType.MOVE,
  // onClick : TEventType.WILL_RESIZE,
  // onClick : TEventType.RESIZE,
  // onClick : TEventType.WILL_MOVE_RESIZE,
  // onClick : TEventType.MOVE_RESIZE,
  onValueWillChange : TEventType.VALUE_WILL_CHANGE,
  onValueChanged : TEventType.VALUE_CHANGED,
  // onClick : TEventType.VALUE_CHANGING,
  // onClick : TEventType.PAINT,
  // onClick : TEventType.BEFORE_PAINT,
  // onClick : TEventType.AFTER_PAINT,
  // onClick : TEventType.PAINT_DONE,
  // onClick : TEventType.LOCALE_CHANGED,
  // onClick : TEventType.ANIM_START,
  // onClick : TEventType.ANIM_STOP,
  // onClick : TEventType.ANIM_PAUSE,
  // onClick : TEventType.ANIM_ONCE,
  // onClick : TEventType.ANIM_END,
  // onClick : TEventType.WINDOW_LOAD,
  // onClick : TEventType.WINDOW_WILL_OPEN,
  // onClick : TEventType.WINDOW_OPEN,
  // onClick : TEventType.WINDOW_TO_BACKGROUND,
  // onClick : TEventType.WINDOW_TO_FOREGROUND,
  // onClick : TEventType.WINDOW_CLOSE,
  // onClick : TEventType.REQUEST_CLOSE_WINDOW,
  // onClick : TEventType.TOP_WINDOW_CHANGED,
  // onClick : TEventType.IM_COMMIT,
  // onClick : TEventType.IM_SHOW_CANDIDATES,
  // onClick : TEventType.IM_ACTION,
  // onClick : TEventType.IM_ACTION_INFO,
  // onClick : TEventType.DRAG_START,
  // onClick : TEventType.DRAG,
  // onClick : TEventType.DRAG_END,
  // onClick : TEventType.SCREEN_SAVER,
  // onClick : TEventType.LOW_MEMORY,
  // onClick : TEventType.OUT_OF_MEMORY,
  // onClick : TEventType.ORIENTATION_WILL_CHANGED,
  // onClick : TEventType.ORIENTATION_CHANGED,
  // onClick : TEventType.WIDGET_CREATED,
  // onClick : TEventType.REQUEST_QUIT_APP,
  // onClick : TEventType.THEME_CHANGED,
  // onClick : TEventType.REQ_START,
  // onClick : TEventType.USER_START,
  // onClick : TEventType.NONE,
  // onClick : TEventType.PROP_WILL_CHANGE,
  // onClick : TEventType.PROP_CHANGED,
  // onClick : TEventType.ITEMS_WILL_CHANGE,
  // onClick : TEventType.ITEMS_CHANGED,
  // onClick : TEventType.PROPS_CHANGED,
  // onClick : TEventType.PROGRESS,
  // onClick : TEventType.DESTROY,
};
