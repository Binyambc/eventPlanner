import { useState } from "react";
// import { useNavigate } from "react-router";
import { getCoordinates, getNowDateTimeLocal } from "../../utils";
import styles from "./AddEventForm.module.css";

const AddEventForm = ({ onAddEvent }) => {
    const [formData, setFormData] = useState({
        id: Date.now(),
        title: "",
        category: "",
        location: "",
        start: "",
        end: "",
        description: "",
    })

    // const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    // const getNowDateTimeLocal = () => {
    //     const now = new Date();
    //     return new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    //         .toISOString()
    //         .slice(0, 16);
    // };
    const nowMin = getNowDateTimeLocal();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const coordinates = await getCoordinates(formData.location);

        if (!coordinates) {
            alert("Could not get location coordinates.");
            return;
        }

        const now  = new Date();
        const startDate = new Date(formData.start);
        const endDate = new Date(formData.end);

        if (startDate < now || endDate < now) {
            alert("Start and end time must be in the future.");
            return;
        }

        if (endDate <= startDate) {
            alert("End time must be after start time.");
            return;
        }

        const newEvent = { ...formData,
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
        };

        axios
        .post("http://localhost:3006/events", newEvent)
        .then((res) => {
            onAddEvent(res.data);
            // navigate("/events");
            setFormData({
                id: Date.now(),
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
        <div className={styles.formWrapper}>
            <h1 className={styles.heading}>Add new Event</h1>
            <form onSubmit={handleSubmit}
                className={styles.eventForm}>
                    <label className={styles.label} htmlFor="title" >Title</label>
                    <input type="text"
                    placeholder="Event title"
                    value={formData.title}
                    onChange={handleChange}
                    name="title"
                    className={styles.inputField}
                    required 
                    />
                    <label className={styles.label} htmlFor="category" >Category</label>
                    <input type="text"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    name="category"
                    className={styles.inputField}                   
                    required 
                    />
                    <label className={styles.label} htmlFor="location" >Location</label>
                    <input type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    name="location"
                    className={styles.inputField}
                    required 
                    />
                    <label className={styles.label} htmlFor="start" >Start time</label>
                    <input type="datetime-local"
                    placeholder="Start time"
                    value={formData.start}
                    onChange={handleChange}
                    name="start"
                    min={nowMin}
                    className={styles.inputField}
                    required 
                    />
                    <label className={styles.label} htmlFor="end" >End time</label>
                    <input type="datetime-local"
                    placeholder="End time"
                    value={formData.end}
                    onChange={handleChange}
                    name="end"
                    min={nowMin}
                    className={styles.inputField}
                    required 
                    />
                    <label className={styles.label} htmlFor="description" >Description</label>
                    <textarea type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    name="description"
                    className={styles.textArea}
                    required 
                    ></textarea>
                    <button type="submit" className={styles.submitBtn}>Add Event</button>
            </form>
            </div>
        </>
    
    );
};

export default AddEventForm;
