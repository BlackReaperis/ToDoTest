export default function Task({data, deleteHandler, toggleHandler}) {
	let strCompleted = "task"
	if(data.completed) {
		strCompleted = "task task-completed"
	}

	return (
		<div className={strCompleted}>
			<div className="checkbox">
				<input type="checkbox" id={"checkbox"+data.id} checked={data.completed} onChange={() => toggleHandler(data.id)} />
				<label for={"checkbox"+data.id}></label>
			</div>
			<div className="task-title">
          		{data.title}
        	</div>
        	<div className="close-button" onClick={() => deleteHandler(data.id)}></div>
        </div>
	)
}