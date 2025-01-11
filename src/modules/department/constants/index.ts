export const ModalType = {
  addChild: "addChild",
  edit: "edit"
} as const

export type ModalTypeKey = keyof typeof ModalType

export const ModalTitleMap = {
  [ModalType.addChild]: "department.operations.addChild",
  [ModalType.edit]: "department.operations.edit"
}

