import { shallowMount } from '@vue/test-utils'
import Component from '~/components/atoms/select'

describe('Select', () => {
  test('snapshot', () => {
    const wrapper = shallowMount(Component, {
      props: {
        value: '',
        placeholder: 'placeholder',
        options: [
          { value: 'value1', label: 'option1' },
          { value: 'value2', label: 'option2' },
        ],
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
