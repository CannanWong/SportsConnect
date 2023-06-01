function NewEventForm () {
    return (
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" />
            <label htmlFor="startTime">Start Time</label>
            <input type="time" id="startTime" name="startTime" />
            <label htmlFor="endTime">End Time</label>
            <input type="time" id="endTime" name="endTime" />
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" />
            <input type="submit" value="Add Event" />
        </form>
    );
}

export default NewEventForm;