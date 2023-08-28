import { render, fireEvent } from '@testing-library/react'
import DurationSelect from './DurationSelect'

describe('DurationSelect', () => {
	const options = [
		{ value: 30, label: '30 seconds' },
		{ value: 60, label: '60 seconds' },
		{ value: 90, label: '90 seconds' },
		{ value: 120, label: '120 seconds' },
	]

	it('renders without crashing', () => {
		const { getByText } = render(
			<DurationSelect
				value={options[0].value}
				onChange={jest.fn()}
				options={options}
			/>
		)

		// Check that the first option is displayed
		expect(getByText(options[0].label)).toBeInTheDocument()
	})

	it('displays correct options', () => {
		const { getByText } = render(
			<DurationSelect
				value={options[0].value}
				onChange={jest.fn()}
				options={options}
			/>
		)

		// Check that all options are displayed
		options.forEach((option) => {
			expect(getByText(option.label)).toBeInTheDocument()
		})
	})

	it('triggers onChange when a new option is selected', () => {
		const mockOnChange = jest.fn()

		const { getByLabelText } = render(
			<DurationSelect
				value={options[0].value}
				onChange={mockOnChange}
				options={options}
			/>
		)

		const select = getByLabelText('Duration:')

		// Simulate a change event
		fireEvent.change(select, { target: { value: options[1].value } })

		// Check that the mockOnChange function was called with the new value
		expect(mockOnChange).toHaveBeenCalledWith(options[1].value)
	})
})
