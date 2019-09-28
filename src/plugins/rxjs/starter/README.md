# Rxjs

响应式编程。

## 解决的痛点

- 我们知道传统的for，while对循环体中的异步程序是无法感知的，或者说，它们不会等待异步程序执行完毕再进入下一轮循环。
- 错误处理是任何程序都要解决的问题，本身就已很复杂的回调函数中再嵌入try/catch块吗？如果还想加入重试机制呢？
- 商业逻辑内嵌在回调函数中，可读性差，复杂度高。现如今流行的组件化编程，即可重用，又可解耦，还方便测试；
- 闭包是强大的，过度地使用闭包将导致我们不得不谨慎地审视变量的作用域以及其值。再加上共享变量带来的副作用，混杂在if/else条件语句和for循环中，每天都会有修不完的bug；
- 根据事件或耗时操作无响应的时间进行取消操作；
- 自己实现throttling和debouncing是很困难的(二者区别见http://www.jianshu.com/p/e91775195608)
- 众所周知的事件监听带来的内存泄露问题

## 缺点

- Rxjs 中的任何操作都会有性能损失，所以在非必须使用的地方不要使用。

## 组件

### 生产者 

在RxJS中的生产者叫做Observables。Observables负责推送事件，但不处理事件。

### 消费者

在RxJS中的消费者叫做Observer。数据只会从生产者流向消费者。

### 管道

在RxJS中，管道中的一个一个函数叫做observable operators，简称operators。

### 时间

我们知道异步程序不容易处理的背后实质就是时间问题，RxJS是面向异步编程的解决方案，因此时间遍布于RxJS中的每一个角落。目前为止，我们只需要了解时间在RxJS中不是恒定的，产生事件的快慢与否取决于我们的需求。当然，RxJS给了我们解决方案。

## 杂谈

- RxJS是结合了观察者模式，迭代器模式和函数式编程优点的产物。

- 面向对象编程以 `状态` 为中心，函数式编程以 `行为` 为中心。

- 在面向对象编程中，状态是保存在变量或者集合对象里的。而响应式编程中的状态是短暂的、瞬间的，也就是说在Rx中是 `永远不保留状态` 的。

- 面向对象编程是典型的命令式编程，而响应式编程则鼓励我们写声明式的程序，也就是表达做什么，而不是表达怎么做。

- 函数式编程的3大特点：声明式的，不可变的，没有副作用的。

## 参考资料

- [RxJS系列教程](https://www.jianshu.com/p/50692f040890)