// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { storiesOf, moduleMetadata } from '@storybook/angular';

// import { Button } from '@storybook/angular/demo';
import { Button2Component, Todo } from './button2.component';

const todo: Todo = {
  title: 'some todo item i need to do.',
  done: false
};

storiesOf('todo', module).addDecorator(moduleMetadata({
  declarations: [Button2Component]
})).add('todo has not been done', () => {
  return {
    template: '<app-button2 [todo]="todo"></app-button2>',
    props: {
      todo
    }
  }
}).add('todo has been done', () => {
  return {
    template: '<app-button2 [todo]="todo"></app-button2>',
    props: {
      todo: {...todo, done: true}
    }
  }
})




export default {
  title: 'Button2',
  component: Button2Component,
};

export const Btn = () => ({
  component: Button2Component,
  props: {
    text: '😀 😎 👍 💯',
  },
});

Btn.story = {
  parameters: { notes: 'My notes on a button with emojis' },
};

