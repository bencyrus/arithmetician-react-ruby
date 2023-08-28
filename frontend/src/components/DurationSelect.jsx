const DurationSelect = ({ value, onChange, options }) => (
	<label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
		Duration:
		<select
			value={value}
			onChange={(e) => onChange(Number(e.target.value))}
			style={{ padding: '10px' }}
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
