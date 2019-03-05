/*
 * @Author: Emmet
 * @Date:   2017-02-17 12:22:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-02-17 12:25:46
 */

/**
 * [chainablize 将构造函数的方法变成可链式调用的]
 * @param  {[type]} constructor [description]
 * @return {[type]}             [description]
 */
// 使用方法 chainablize(constuctor);
//
// v-1.0
function chainablize(constructor) {
  var prototype = constructor.prototype
  for (var method in prototype) {
    try {
      if (prototype.hasOwnProperty(method) && typeof prototype[method] == 'function') {
        ;(function(method) {
          var old = prototype[method]
          prototype[method] = function() {
            var result = old.apply(this, arguments)
            return result === void 0 ? this : result
          }
        })(method)
      }
    } catch (e) {}
  }
}

// -v-2.0
// 解决了这样调用的情况
// var p = new Person('xxx', 18);
// p.name = 'yyy';
// p.age = 20;
// p.sayName();
// p.sayAge();

function chainablize(constructor) {
  var prototype = constructor.prototype
  for (var method in prototype) {
    try {
      if (prototype.hasOwnProperty(method) && typeof prototype[method] == 'function') {
        ;(function(method) {
          var old = prototype[method]
          prototype[method] = function() {
            var result = old.apply(this, arguments)
            return result === void 0 ? this : result
          }
        })(method)
      }
    } catch (e) {}
  }

  if ('prop' in prototype) return
  prototype.prop = function(object) {
    for (var property in object) {
      this[property] = object[property]
    }
    return this
  }
}
