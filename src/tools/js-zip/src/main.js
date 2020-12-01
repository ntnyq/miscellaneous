import 'bootstrap/dist/css/bootstrap.css'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'

const zip = new JSZip()

zip.file('hello.md', `# Hello world`)
zip.folder('test').file('hello.txt', 'hello world')

const btnDownload = document.querySelector('#download')

btnDownload.addEventListener('click', () => {
  zip.generateAsync({ type: 'blob' }).then(content => {
    saveAs(content, 'demo.zip')
  })
})
