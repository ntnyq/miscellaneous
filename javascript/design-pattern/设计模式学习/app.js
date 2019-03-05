/*
 * @Author: Emmet
 * @Date:   2017-02-12 15:19:23
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-02-12 16:05:20
 */
// 单例模式
// 实现单例的方式有很多种，其中最简单的一个方式是使用对象字面量的方法，其字面量里可以包含大量的属性和方法
// 例子1
// var mySingleton = {
//   property1: "something",
//   property2: 'something else',
//   method1: function () {
//     console.log('hello world');
//   }
// };
//
// 例子2
// var mySingleton = function () {
//   // 这里声明私有变量和方法
//   var privateVariable = 'something private';
//   function showPrivate () {
//     console.log(privateVariable);
//   }
//   // 公有变量和方法
//   return {
//     publicMethod: function () {
//       showPrivate();
//     },
//     publicVar: 'the public can see this!'
//   };
// };

// var single = mySingleton(); // single等于返回的对象
// single.publicMethod();
// console.log(single.publicVar);
//
// 例子3
// 优点 使用的时候才会初始化
/*var Singleton = (function () {
  var instantiated;
  function init () {
    // 这里定义单例代码
    return {
      publicMethod: function () {
        console.log('hello world');
      },
      publicProperty: 'test'
    };
  }

  return {
    getInstance: function () {
      if (!instantiated) {
        instantiated = init();
      }
      return instantiated;
    }
  };
})();

// 调用公有的方法来获取实例
Singleton.getInstance().publicMethod();*/

// 工厂模式
// 工厂模式是由一个方法来决定到底要创建哪个类的实例, 而这些实例经常都拥有相同的接口. 这种模式主要用在所实例化的类型在编译期并不能确定， 而是在执行期决定的情况。
/*function A (name) {
  this.name = name;
}

function ObjectFactory () {
  var obj = {};
  Constructor = Array.prototype.shift.call(arguments);
  obj._proto_ = typeof Constructor.prototype === 'number' ? Object.prototype : Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);
  return typeof ret === 'object' ? ret : obj;

}

var a = ObjectFactory(A, 'svenzeng');
alert(a.name);*/

// 适配模式
// 适配模式主要是为了解决一些接口不兼容产生的解决方法。借助于适配器我们可以在不修改这些不兼容接口的情况下给使用者提供统一的包装过的适配接口。表面上又感觉和之前的门面模式比较像，均是对其他对象或者接口进行包装再呈现，而适配器模式偏向的是解决兼容性问题，门面模式则偏向方便性为原则。
/*function selectScore (name, id, course_id) {
  // arguments 姓名 学号 课程id
  // ...
}
最简单的关于适配器来处理参数方面兼容的形式。 其实简单的来说，适配器模式意义上很简单 - 适配，解决兼容问题。

// 当要处理一个班的成绩 而数据如下
// [
//     { name: 'lily', studentID: '0911' },
//     { name: 'suny', studentID: '0912' },
//     ...
// ]
// 我需要查询 英语 其课程ID为 101，那么对于该任务，写一个适配器方式是很恰当不过的

function selectEnglishScore (studentObj) {
  selectScore(studentObj.name, studentObj.studentID, 101);
}*/

// 外观模式 门面模式
// 外观模式提供一个高层接口，这个接口使得客户端或子系统更加方便调用。 用一段再简单不过的代码来表示：
// 外观模式还有一个好处是可以对用户隐藏真正的实现细节，用户只关心最高层的接口。
//
// !函数表达式不能自动运行 还是要通过给后面加括号来让其运行
/*var getName = function () {
  return 'ls';
};
var getSex = function () {
  return 'male';
};

var getUserInfo = function () {
  // var info = a() + b();
  var info = getName() + getSex();
  return info;
};
console.log(getUserInfo());*/

/*var stopEvent = function( e ){   //同时阻止事件默认行为和冒泡
  e.stopPropagation();
  e.preventDefault();
};*/
