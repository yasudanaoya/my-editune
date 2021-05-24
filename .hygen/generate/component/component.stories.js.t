---
to: stories/<%= level %>/<%= h.changeCase.pascalCase(name) %>.stories.js
---
import { withKnobs } from "@storybook/addon-knobs"
import <%= h.changeCase.pascalCase(name) %> from "../../components/<%= level %>/<%= h.changeCase.pascalCase(name) %>"

export default {
  title: "<%= h.changeCase.pascalCase(level) %>/<%= h.changeCase.pascalCase(name) %>",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { <%= h.changeCase.pascalCase(name) %> },
    props: {},
    template: `
      <<%= h.changeCase.pascalCase(name) %> />
    `
  }
}
