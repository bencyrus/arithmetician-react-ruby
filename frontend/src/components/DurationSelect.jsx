const DurationSelect = ({ value, onChange, options }) => (
	<label>
		Duration:
		<select
			value={value}
			onChange={(e) => onChange(Number(e.target.value))}
		>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	</label>
)

export default DurationSelect
