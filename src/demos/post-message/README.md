# postMessage

跨源通信。

## 条件

- 相同协议
- 相同端口号
- 主机相同 (`document.domain`)

## 注意

1. 若发送敏感数据，如密码等，注意设置好 `origin` 参数。而不要设置为 `*`。
2. 若有需要，通过 `origin` 和 `source` 来验证消息发送者的身份。
