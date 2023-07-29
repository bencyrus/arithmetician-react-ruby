const DurationSelect = ({ value, onChange }) => (
	<label>
		Duration:
		<select value={value} onChange={(e) => onChange(e.target.value)}>
			<option value="30">30 seconds</option>
			<option value="60">60 seconds</option>
			<option value="120">120 seconds</option>
			<option value="300">300 seconds</option>
			<option value="600">600 seconds</option>
		</select>
	</label>
)

export default DurationSelect
