import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TorchContainer } from '../components/TorchContainer'
export default {
  title: 'Layouts/TorchContainer',
  component: TorchContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof TorchContainer>

const Template: ComponentStory<typeof TorchContainer> = (args) => (
  <TorchContainer {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos
    earum eveniet perferendis, beatae architecto sit sint cumque quis enim!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda eveniet
    soluta iure facere commodi, voluptatem id! Repellendus aspernatur quae fugit
    natus voluptas. Exercitationem cupiditate optio aliquid tempora. Eius natus
    vero, commodi reiciendis tempore consequuntur, explicabo culpa atque
    recusandae odio expedita aperiam dicta corporis nulla, repudiandae
    voluptatem corrupti? Doloremque aliquam sequi iste? Odio sint nihil esse
    dolores! Voluptates dolor quod quibusdam. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Amet, sint iure? Vitae deserunt ab obcaecati
    sit, voluptates aspernatur doloribus aperiam laboriosam voluptatibus quod
    quo omnis ducimus rem ad, illum commodi soluta consequuntur delectus veniam
    culpa aliquid aliquam repellendus enim. Quos sit tempora, iusto cum quis
    eligendi itaque consequatur suscipit est, iste placeat, ducimus debitis.
    Distinctio commodi repellat, ullam consequuntur accusamus soluta quia,
    quaerat vero sequi officiis atque. Vel similique commodi, facere praesentium
    suscipit est! Saepe laudantium mollitia odit nemo esse officia, consequuntur
    fugit quia laboriosam omnis, quam sapiente ipsum perspiciatis nesciunt vitae
    et? Aspernatur voluptatem, obcaecati porro a enim dolorem officiis voluptas
    itaque cumque distinctio consequuntur ipsa ratione iste eveniet, temporibus
    nemo similique magni quis quae accusantium commodi debitis quos explicabo.
    Alias, veniam, numquam magni amet id fugit non sequi neque quo totam magnam
    quae ab quaerat tempora facere, sunt est consectetur eum recusandae
    repudiandae! Ex ea porro minima laudantium minus unde dolores, nostrum quia
    culpa id omnis! Alias maiores doloribus explicabo natus vitae nam vero
    veniam nesciunt rerum fuga laborum, nisi, ullam ad commodi, nulla eveniet
    hic! In enim beatae molestiae! Dignissimos ipsum a non unde laudantium
    facilis soluta officia, hic corporis quae! Debitis dolores repellendus
    dicta! Minus, placeat.
  </TorchContainer>
)

export const Dark = Template.bind({})
