import Test from 'legit-tests';
import { expect } from 'chai';

import Accordion from '../src/accordion';
import AccordionItem from '../src/accordion_item';

describe('Accordion', () => {
  it('should set the active tab if indicated', () => {
    Test(<Accordion active="foo" />)
    .test(({ instance }) => {
      expect(instance.state.active).to.equal('foo');
    });
  });

  it('should set active state to null if not indicated', () => {
    Test(<Accordion />)
    .test(({ instance }) => {
      expect(instance.state.active).to.be.null;
    });
  });

  it('should render all the children', () => {
    Test((
      <Accordion>
        <AccordionItem />
        <AccordionItem />
      </Accordion>
    ))
    .find(AccordionItem)
    .test(({ accordionitem }) => {
      expect(accordionitem.length).to.equal(2);
    });
  });

  it('should pass the active prop to the selected item', () => {
    Test((
      <Accordion active='foo'>
        <AccordionItem name='foo' />
        <AccordionItem name='bar' />
      </Accordion>
    ))
    .find(AccordionItem)
    .test(({ accordionitem }) => {
      let activeElement = accordionitem[0];

      expect(activeElement.props.active).to.be.true;
    });
  });

  describe('#expand', () => {
    it('should set the state to null if the currently active item is clicked', () => {
      Test(<Accordion active='foo' />)
      .test(({ instance }) => {
        instance.expand('foo');

        expect(instance.state.active).to.be.null;
      });
    });

    it('should set the active state to the clicked item', () => {
      Test(<Accordion active='foo' />)
      .test(({ instance }) => {
        instance.expand('bar');

        expect(instance.state.active).to.equal('bar');
      });
    });
  });
});
