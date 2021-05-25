import { withKnobs } from "@storybook/addon-knobs"
import Logo from "../../components/atoms/Logo"

export default {
  title: "Atoms/Logo",
  decorators: [withKnobs]
}

export const Basic = () => {
  return {
    components: { Logo },
    template: `
      <Logo />
    `
  }
}
