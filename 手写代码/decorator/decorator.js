var _class;

function _applyDecoratedDescriptor(
  target,
  property,
  decorators,
  descriptor,
  context
) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ("value" in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators
    .slice()
    .reverse()
    .reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

let Myclass =
  ((_class = class Myclass {
    methods() {}
  }),
  _applyDecoratedDescriptor(
    _class.prototype,
    "methods",
    [annotation, unenumerble],
    Object.getOwnPropertyDescriptor(_class.prototype, "methods"),
    _class.prototype
  ),
  _class);

function annotation(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

function unenumerble(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}
