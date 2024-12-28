/**
 * 绑定实例方法到原型链上 以便在类中使用
 * @param instance 
 */
export const bindMethods = <T extends object>(instance: T): void => {
  // 获取实例的原型对象
  const prototype = Object.getPrototypeOf(instance)

  // 获取原型对象的所有属性名
  const propertyNames = Object.getOwnPropertyNames(prototype)

  propertyNames.forEach((propertyName) => {
    // 通过属性名获取属性的描述对象
    const descriptor = Object.getOwnPropertyDescriptor(prototype, propertyName)
    console.log("descriptor:", descriptor);

    // 从实例中获取当前属性的值
    const propertyValue = instance[propertyName as keyof T]

    console.log("propertyValue:", propertyValue);

    // 检查属性是否为函数类型且不是构造函数
    if (typeof propertyValue === 'function' && propertyName !== 'constructor' && descriptor &&
      // 确保没有getter或 setter
      !descriptor.get && !descriptor.set
    ) {

      // 将函数绑定到实例本身上,这样调用时this会正确实例
      instance[propertyName as keyof T] = propertyValue.bind(instance)
    }
  })
}