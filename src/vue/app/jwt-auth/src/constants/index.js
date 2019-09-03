import merge from 'lodash/merge'
import configDev from './config.dev'

let config = {}

config = merge(config, configDev)

export default config
