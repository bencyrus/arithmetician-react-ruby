const RangeInput = ({ value, onChange, label }) => {
	const handleChange = (key) => (e) => {
		onChange({
			...value,
			[key]: Number(e.target.value),
		})
	}

	return (
		<label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
			{label}:
			<div style={{ display: 'flex', gap: '10px' }}>
				<input
					type="number"
					value={value.min}
					onChange={handleChange('min')}
					style={{ flex: 1, padding: '10px' }}
				/>
				to
				<input
					type="number"
					value={value.max}
					onChange={handleChange('max')}
					style={{ flex: 1, padding: '10px' }}
				/>
			</div>
		</label>
	)
}

export default RangeInput
