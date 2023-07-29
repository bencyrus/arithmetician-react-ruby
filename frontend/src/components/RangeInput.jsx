const RangeInput = ({ value, onChange, label }) => (
	<label>
		{label}:
		<input
			type="number"
			value={value.min}
			onChange={(e) => onChange({ ...value, min: e.target.value })}
		/>
		to
		<input
			type="number"
			value={value.max}
			onChange={(e) => onChange({ ...value, max: e.target.value })}
		/>
	</label>
)

export default RangeInput
