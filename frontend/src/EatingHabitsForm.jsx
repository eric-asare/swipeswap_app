/* eslint-disable react/prop-types */
import { useState } from "react";

const EatingHabitsForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    eatingTime: "",
    eatingFrequency: "",
    swipeDays: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSwipeDaysChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      swipeDays: checked
        ? [...prevState.swipeDays, value]
        : prevState.swipeDays.filter((day) => day !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Eating Habits
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="eatingFrequency"
          >
            How often do you eat?
          </label>
          <select
            id="eatingFrequency"
            name="eatingFrequency"
            value={formData.eatingFrequency}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select frequency</option>
            <option value="1">Once a day</option>
            <option value="2">Twice a day</option>
            <option value="3">Three times a day</option>
          </select>
        </div>

        <fieldset className="mb-4">
          <legend className="block text-gray-700 text-sm font-bold mb-2">
            What days do you need a swipe?
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <label key={day} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="swipeDays"
                  value={day}
                  checked={formData.swipeDays.includes(day)}
                  onChange={handleSwipeDaysChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{day}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex items-center justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default EatingHabitsForm;
