import { App } from 'vue'
import { Button } from 'ant-design-vue'

export default {
  install: (app: App): void => {
    app.use(Button)
  }
}
