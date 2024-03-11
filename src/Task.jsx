export default function Task({data, deleteHandler, toggleHandler}) {
	let strCompleted = "task"
	if(data.completed) {
		strCompleted = "task task-completed"
	}

	return (
		<div className={strCompleted}>
			<div>Done<input type="checkbox" checked={data.completed} onChange={() => toggleHandler(data.id)}/></div>
			<div className="task-title">
          		{data.title}
        	</div>
        	<div className="close-button" onClick={() => deleteHandler(data.id)}></div>
        </div>
	)
}