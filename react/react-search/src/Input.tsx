import * as React from 'react'
import * as PropTypes from 'prop-types'
import { polyfill } from 'react-lifecycles-compat'

const KEY_CODE_ENTER = 13

function fixControlledValue<T> (value: T) {
  if (typeof value === 'undefined' || value === null) {
    return ''
  }
  return value
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onKeyEnter?: React.KeyboardEventHandler<HTMLInputElement>
}

class Input extends React.Component<InputProps, any> {
  static propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    className: PropTypes.string,
    onKeyEnter: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onChange: PropTypes.func
  }

  static getDerivedStateFromProps (nextProps: InputProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  input: HTMLInputElement

  constructor (props: InputProps) {
    super(props)

    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value

    this.state = {
      value
    }
  }

  getSnapshotBeforeUpdate (prevProps: InputProps) {
    return null
  }

  componentDidUpdate () {}

  saveInput = (node: HTMLInputElement) => {
    this.input = node
  }

  onKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyEnter, onKeyDown } = this.props

    if (evt.keyCode === KEY_CODE_ENTER && onKeyEnter) {
      onKeyEnter(evt)
    }

    if (onKeyDown) {
      onKeyDown(evt)
    }
  }
  onKeyUp = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyUp } = this.props

    onKeyUp && onKeyUp(evt)
  }
  onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setValue(evt.target.value, evt)
  }
  setValue (
    value: string,
    evt: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>,
    callback?: () => void
  ) {
    if (!('value' in this.props)) {
      this.setState({ value }, callback)
    }

    const { onChange } = this.props

    if (onChange) {
      let event = evt

      if (evt.type === 'click') {
        event = Object.create(evt)
        event.target = this.input
        event.currentTarget = this.input
        const originalInputValue = this.input.value
        this.input.value = ''

        onChange(event as React.ChangeEvent<HTMLInputElement>)
        this.input.value = originalInputValue
        return
      }

      onChange(event as React.ChangeEvent<HTMLInputElement>)
    }
  }
  render () {
    const { value } = this.state
    return (
      <input
        onChange={this.onChange}
        onKeyUp={this.onKeyUp}
        onKeyDown={this.onKeyDown}
        value={fixControlledValue(value)}
        className={this.props.className}
        type={this.props.type}
        placeholder={this.props.placeholder}
        ref={this.saveInput}
      />
    )
  }
}

polyfill(Input)

export default Input
