function AddTask() {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"></input>
            </div>
            <div className="form-control">
                <label>Set Reminder</label>
                <input type="checkbox form-control-check"></input>
            </div>
            <input type="submit" className="btn btn-block" value="Save Task"></input>
        </form>
    )
}

export default AddTask;