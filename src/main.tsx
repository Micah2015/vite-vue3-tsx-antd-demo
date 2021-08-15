import { createApp } from 'vue'
import '@/styles/index.less'
import App from '@/App'
import antd from '@/plugins/antd'

createApp(App).use(antd).mount('#app')
