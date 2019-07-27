import * as React from 'react'
import jsonp from 'jsonp'

import Input from './Input'

const KEY_CODE_UP = 38
const KEY_CODE_DOWN = 40
const KEY_CODE_ENTER = 13

// @ts-ignore
const isChrome = !!window.chrome

interface State {
  keyword: string
  resultList: string[]
  activeIndex: number
}

type TypeResultList = {
  q: string
  p: boolean
  s: string[]
}

class Search extends React.Component<{}, State> {
  constructor (props: {}) {
    super(props)
    this.state = {
      keyword: '',
      resultList: [],
      activeIndex: -1
    }
  }

  onOpenResult = () => {
    window.open(`https:www.baidu.com/s?wd=${this.state.keyword}`)
  }

  onChangeIndex = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    let index = this.state.activeIndex

    if (evt.keyCode === KEY_CODE_UP || evt.keyCode === KEY_CODE_DOWN) {
      evt.preventDefault()

      if (evt.keyCode === KEY_CODE_UP) {
        index--

        if (index === -2) {
          index = this.state.resultList.length - 1
        }
      } else {
        index++

        if (index === this.state.resultList.length) {
          index = -1
        }
      }

      this.setState({
        activeIndex: index,
        keyword: this.state.resultList[index] || ''
      })
    }
  }

  onKeywordChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target

    jsonp(
      `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${value}`,
      { param: 'cb' },
      (err, data: TypeResultList) => {
        const { s } = data

        this.setState({
          keyword: value,
          resultList: s
        })
      }
    )
  }

  onResetKeyword = () => {
    this.setState({
      keyword: '',
      resultList: [],
      activeIndex: -1
    })
  }

  render () {
    const { state, onChangeIndex, onOpenResult, onKeywordChange, onResetKeyword } = this
    const { keyword, activeIndex, resultList } = state

    const ResultList = (
      <ul className='list-group'>
        {resultList.map((item, idx) => (
          <li className={`${activeIndex === idx ? 'active' : ''} list-group-item`} key={idx}>
            {item}
          </li>
        ))}
      </ul>
    )

    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <div className='row pb-3 justify-content-center'>
              <Input
                onKeyDown={onChangeIndex}
                onKeyEnter={onOpenResult}
                onChange={onKeywordChange}
                value={keyword}
                className='form-control form-control-lg col-md-10'
                type='text'
                placeholder='输入内容，回车搜索'
              />
            </div>
            <div className='row justify-content-center'>
              <button onClick={onResetKeyword} className='btn btn-danger px-4' type='button'>
                清除
              </button>
            </div>
          </div>
          <div className='card-body'>
            {resultList.length ? (
              ResultList
            ) : (
              <div className='alert alert-danger' role='alert'>
                搜索内容为空
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Search
