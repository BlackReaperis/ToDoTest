export default function AddNew({action}) {
	return (
		<div className="top-bar">
			<div className="new-task-title">New task</div>
			<div className="new-task">
				<label htmlFor="taskTitle">Title</label>
				<input type="text" id="taskTitle" />
				<button type="button" onClick={action}>Add</button>
			</div>
        </div>
	)
}