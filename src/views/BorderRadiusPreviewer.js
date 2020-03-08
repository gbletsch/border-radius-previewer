import React, { Component } from 'react'

export default class BorderRadiusPreviewer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      trb: '25px',
      tlb: '25px',
      blb: '25px',
      brb: '25px'
    }
  }

  handleBorder () {
    return {
      borderStyle: 'solid',
      borderTopRightRadius: this.state.trb,
      borderTopLeftRadius: this.state.tlb,
      borderBottomLeftRadius: this.state.blb,
      borderBottomRightRadius: this.state.brb,
      borderColor: 'red',
      borderWidth: '2'
    }
  }

  handleChange (key, value) {
    this.setState({
      [key]: value + 'px'
    })
  }

  resetValues () {
    for (let i = 0; i < 4; i++) {
      const borders = ['tlb', 'trb', 'blb', 'brb']
      this.handleChange(borders[i], '25')
    }
  }

  printStyle () {
    return `style={{
      borderTopRightRadius: ${this.state.trb},
      borderTopLeftRadius: ${this.state.tlb},
      borderBottomLeftRadius: ${this.state.blb},
      borderBottomRightRadius: ${this.state.brb},
    }}`
  }

  copy () {
    const res = document.getElementById('response')
    res.select()
    document.execCommand('copy')
    alert('Copied: \n\n' + res.value)
  }

  render () {
    return (
      <div
        className='jumbotron'
        style={{
          maxWidth: 500
        }}
      >
        <div className='row'>
          <div className='col'>
            <h1>Border Radius Previewer</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h4>For lazy people</h4>
            <br /><br />
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <input
              size='1'
              style={{
                textAlign: 'center'
              }}
              type='text'
              onChange={(e) => this.handleChange('tlb', e.target.value)}
              value={this.state.tlb.slice(0, -2)}
            />
          </div>
          <div className='col' />
          <div className='col-2'>
            <input
              size='1'
              style={{
                textAlign: 'center'
              }}
              onChange={(e) => this.handleChange('trb', e.target.value)}
              value={this.state.trb.slice(0, -2)}
            />
          </div>
        </div>
        <div
          className='row'
          style={{ minHeight: 100 }}
        >
          <div className='col-2' />
          <div
            className='col'
            style={this.handleBorder()}
          />
          <div className='col-2' />
        </div>
        <div className='row'>
          <div className='col-2'>
            <input
              size='1'
              style={{
                textAlign: 'center'
              }}
              type='text'
              onChange={(e) => this.handleChange('blb', e.target.value)}
              value={this.state.blb.slice(0, -2)}
            />
          </div>
          <div className='col' />
          <div className='col-2'>
            <input
              size='1'
              style={{
                textAlign: 'center'
              }}
              onChange={(e) => this.handleChange('brb', e.target.value)}
              value={this.state.brb.slice(0, -2)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <button type='button' onClick={() => this.resetValues()}>Reset</button>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <br />
            <label htmlFor='response'>
              Text to style component inline:
            </label>
            <textarea
              id='response'
              readOnly
              value={this.printStyle()}
              cols='35'
              lines='15'
              style={{
                height: 160
              }}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col text-center'>
            <button
              id='response'
              type='button'
              onClick={() => this.copy()}
            >
              Copy text
            </button>
          </div>
        </div>
      </div>

    )
  }
}
