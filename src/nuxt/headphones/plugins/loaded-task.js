import { isBrowser } from '~/env/esm'
import consoleSlogan from '~/utils/console-slogan'

if (isBrowser) {
  // Execute tasks
  const doTask = (task) => {
    window.setTimeout(task, 666)
    consoleSlogan()
  }

  // Initialize
  const loadedHandler = (event) => {
    window.loaded = true
    window.loadedTasks.forEach((task) => doTask(task))
  }

  // Tasks manage
  const addLoadedTask = (task) => {
    if (window.loaded) {
      doTask(task)
    } else {
      window.loadedTasks.push(task)
    }
  }

  window.loaded = false
  window.loadedTasks = []
  window.addLoadedTask = addLoadedTask
  window.addEventListener('load', loadedHandler)
}
