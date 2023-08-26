import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BaseWrapper from '../../components/BaseWrapper.vue'

describe('Base Wrapper component', () => {
	it('should render correctly with default slot', () => {
		const wrapper = shallowMount(BaseWrapper, {
			slots: {
				default: '<h2>Section title</h2>',
			},
		})
		const titleEl = wrapper.find('h2')
		expect(titleEl.exists()).toBe(true)
		expect(titleEl.text()).toBe('Section title')
	})
})
