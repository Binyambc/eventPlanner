import { useState } from "react";
// import { useNavigate } from "react-router";


const AddEventForm = ({ onAddEvent }) => {
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        start: "",
        end: "",
        description: "",
    })

    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { title, value } = e.target;
        setFormData((prev) => ({...prev, [title]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const eventData = {
            ...formData,
            location: formData.location
        };

        const newEvent = { ...formData};

        axios
        .post("http://localhost:3006/events", newEvent)
        .then((res) => {
            onAddEvent(res.data);
            // navigate("/events");
            setFormData({
                title: "",
                category: "",
                location: "",
                start: "",
                end: "",
                description: "",
            })
        })
        .catch((err) => {
            console.error("Failed to add event:", err);
        })
    }

    return (
        <>
            <h1>Add new Event</h1>
            <form onSubmit={handleSubmit}
                className="event_form">
                    <input type="text"
                    placeholder="Event title"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    required 
                    />
                    <input type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    name="category"
                    required 
                    />
                    <input type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    name="location"
                    required 
                    />
                    <input type="datetime-local"
                    placeholder="Start time"
                    value={formData.start}
                    onChange={handleChange}
                    name="start"
                    required 
                    />
                    <input type="datetime-local"
                    placeholder="End time"
                    value={formData.end}
                    onChange={handleChange}
                    name="end"
                    required 
                    />
                    <input type="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    name="description"
                    required 
                    />
                    <button type="submit" className="submit_btn">Add Event</button>
            </form>
        </>
    );
};

export default AddEventForm;
