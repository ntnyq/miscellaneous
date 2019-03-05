# AsyncFunction

__AsyncFunction__ 是 __Promise__ 和 __Generate__ 函数的语法糖。



## Features

* Await 后可以接 AsyncFunction 的调用



## Promise

``` js
// This would be vury difficult with callbacks
fetchJSON('/user-profile')
  .then(user => {
  	return fetchJSON(`/users/${user.id}/friends`)
  })
  .then(friendIds => {
  	let promises = friendIds.map(id => fetchJSON(`/users/${id}`))
    
    return Promise.all(promises)
	})
  .then(friends => {
  	console.log(friends)
  })
```



## Async

``` js
async function getUserFriends () {
  let user = await fetchJSON('/users/me')
  let friendIDs = await fetchJSON(`/users/${user.id}/friends`)
  let promises = friendIDs.map(id => fetchJSON(`/users/${id}`))
  
  let friends = await Promise.all(promises)
  
  return friends
}
```



``` js
async function animate (element) {
  for (let i = 0; i < 100; i ++) {
    element.style.left = `${i}px`
    await sleep(16)
  }
} 
```



## 兼容性

- Chrome
- Firefox
- Node
- Use babel