const MESSAGE_LEVEL = {
  NOTIFICATION: 1,
  TIPS: 2,
  IMPORTANT: 3,
  URGENT: 4
};
const MESSAGE_LEVEL_TEXT = {
  [MESSAGE_LEVEL.NOTIFICATION]: "common.message.level.notification",
  [MESSAGE_LEVEL.TIPS]: "common.message.level.tips",
  [MESSAGE_LEVEL.IMPORTANT]: "common.message.level.important",
  [MESSAGE_LEVEL.URGENT]: "common.message.level.urgent"
};
const MESSAGE_LEVEL_COLOR = {
  [MESSAGE_LEVEL.NOTIFICATION]: "processing",
  [MESSAGE_LEVEL.TIPS]: "default",
  [MESSAGE_LEVEL.IMPORTANT]: "warning",
  [MESSAGE_LEVEL.URGENT]: "error"
};
export {
  MESSAGE_LEVEL_TEXT as M,
  MESSAGE_LEVEL_COLOR as a,
  MESSAGE_LEVEL as b
};
