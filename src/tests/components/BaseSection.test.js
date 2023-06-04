import { describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import BaseSection from '../../components/BaseSection.vue'

describe('Base Section component', () => {

	it('should render correctly with default slot', () => {
		const wrapper = shallowMount(BaseSection, {
			slots: {
				default: '<h2>Section title</h2>',
			},
		})
		const titleEl = wrapper.find('h2')
		expect(titleEl.exists()).toBe(true)
		expect(titleEl.text()).toBe('Section title')
	})

	it('should render with all props', () => {
		const wrapper = shallowMount(BaseSection, {
			props: {
				id: 'my-id',
				className: 'my-class'
			},
		})
		const sectionEl = wrapper.find('section')
		expect(sectionEl.exists()).toBe(true)
		expect(sectionEl.attributes('id')).toBe('my-id')
		expect(sectionEl.attributes('class')).toBe('my-class')
	})

})
