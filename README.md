#accordion

A simple React accordion component based on Thoughtbots Refills accordion component

##Install

```bash
npm install legit-accordion --save
```

##Example

```js
import { Accordion, AccordionItem } from 'legit-accordion';

// Import the default styling.
require('legit-accordion/lib/default');

export default class Component extends React.component {
  render() {
    return (
      // Optionally specificy an accordion element by name to be active. If
      // left out, all accordions will be closed
      <Accordion active='Item 1'>
        <AccordionItem name='Item 1'>
          <p>This is an accordion item. The first.</p>
        </AccordionItem>
    
        <AccordionItem name='Item 2'>
          <p>This is another accordion item. The second.</p>
        </AccordionItem> 
      </Accordion>
    )
  }
}
```

That's it! The caveat here is that the open and close animations depend on the 
`max-height` property, which is by default set to 500px. If your content is going
to be taller than that, you can override this:

```css
.accordion .is-expanded > div.content {
  max-height: 1000px;
}
```

