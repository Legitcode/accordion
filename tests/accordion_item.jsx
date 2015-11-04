import Test from 'legit-tests'
import { expect } from 'chai'
import sinon from 'sinon'

import AccordionItem from '../src/accordion_item'

describe('AccordionItem', () => {
  it('should be expanded if active', () => {
    Test(<AccordionItem active={true} />)
    .find('li')
    .test(({ li }) => {
      expect(li.props.className).to.equal('is-expanded')
    })
  })

  it('should respond to a click event', () => {
    let spy = sinon.spy()

    Test(<AccordionItem onClick={spy} />)
    .find('a')
    .simulate({ method: 'click', element: 'a' })
    .test(() => {
      expect(spy.called).to.be.true
    })
  })

  it('should use the labelHTML if provided', () => {
    Test(<AccordionItem name="Foo" labelHTML={<span className="f">Foo</span>} />)
    .find('span')
    .test(({ span }) => {
      expect(span.props.children).to.equal("Foo")
    })
  })
})
