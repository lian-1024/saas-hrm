const DepartmentTree = {
  toTree(items, pid = 0) {
    return items.filter((item) => item.pid === pid).map((item) => ({
      key: item.id,
      title: item.name,
      managerName: item.managerName,
      children: this.toTree(items, item.id)
    }));
  },
  toCascader(items, pid = 0) {
    return items.filter((item) => item.pid === pid).map((item) => ({
      value: item.id.toString(),
      label: item.name,
      code: parseInt(item.code),
      children: this.toCascader(items, item.id)
    }));
  }
};
export {
  DepartmentTree as D
};
