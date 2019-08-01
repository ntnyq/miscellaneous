import Vue from 'vue'

import { Button, Input, Tag } from 'element-ui'

Vue.prototype.$ELEMENT = { zIndex: 9999 }

Vue.use(Button)
Vue.use(Input)
Vue.use(Tag)

// Vue.prototype.$message = Message
// Vue.prototype.$notify = Notification
