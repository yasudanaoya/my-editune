import { shallowMount } from "@vue/test-utils"
import Component from "~/components/atoms/Switch"

describe("Switch", () => {
  test("snapshot true", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: true
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })

  test("snapshot false", () => {
    const wrapper = shallowMount(Component, {
      propsData: {
        value: false
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
