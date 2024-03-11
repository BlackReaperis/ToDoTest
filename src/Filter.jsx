export default function Filter({action, count}) {
	return (
		<div className="filter-bar">
        	<div className="filter-icon"></div>
        	<label htmlFor="">Status</label>
        	<select id="taskFilter" onChange={action}>
        		<option value="0">All</option>
        		<option value="1">Not completed</option>
        		<option value="2">Completed</option>
        	</select>
        	<div>Total: {count}</div>
    	</div>
	)
}