import { isBrowser, isProdMode } from '~/env/esm'

export default function consoleSlogan() {
  if (isBrowser) {
    console.clear()
    setTimeout(
      console.log.bind(
        console,
        `%cI know nothing. \n\n%cntnyq13@gmail.com`,
        `color:#666;font-size:3em;`,
        `color:#666;font-size:13px;`
      )
    )
  }
}
