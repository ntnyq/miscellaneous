import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component(SvgIcon.name, SvgIcon)

const ctx = require.context('./svg', false, /\.svg$/)
const requireAll = context => context.keys().map(context)

requireAll(ctx)
