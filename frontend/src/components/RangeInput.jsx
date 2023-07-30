const RangeInput = ({ value, onChange, label }) => {
	const handleChange = (key) => (e) => {
		onChange({
			...value,
			[key]: Number(e.target.value),
		})
	}

	return (
		<label>
			{label}:
			<input
				type="number"
				value={value.min}
				onChange={handleChange('min')}
			/>
			to
			<input
				type="number"
				value={value.max}
				onChange={handleChange('max')}
			/>
		</label>
	)
}

export default RangeInput
