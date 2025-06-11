import { useState, useEffect } from "react";
import styles from "./Category.module.css";

const categories = [
  "Conference",
  "Concert",
  "Seminar",
  "Wellness",
  "Community",
  "Recreation",
  "Art",
  "Film",
  "Business",
  "Leisure",
  "Sports",
  "Other"
];

const CategorySelect = ({ value, onChange, ...props }) => {
  const [customCategory, setCustomCategory] = useState("");

  useEffect(() => {
    if (value && !categories.includes(value)) {
        setCustomCategory(value);
    } else {
        setCustomCategory("");
    }
  }, [value]);

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    if (selected !== "Other") {
      onChange(selected);
      setCustomCategory("");
    } else {
      onChange("");
    }
  };

  const handleCustomChange = (e) => {
    const custom = e.target.value;
    setCustomCategory(custom);
    onChange(custom);
  };

  const isOther = value && !categories.includes(value);

  return (
    <div>
      <label htmlFor="category"></label>
      <select 
        id="category" 
        className={styles.category} 
        onChange={handleSelectChange} 
        value={isOther ? "Other" : value || ""}
        {...props}
        >
        <option value="" disabled>-- Select Category --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {isOther && (
        <input
          type="text"
          placeholder="Enter custom category"
          value={customCategory}
          onChange={handleCustomChange}
          className={styles.inputField}
          {...props}
          required
        />
      )}
    </div>
  );
};

export default CategorySelect;
