import React from "react";

const Dashboard = () => {
  return (
    <div style={{ margin: "100px 200px" }}>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required /><br /><br />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required /><br /><br />

        <label>Age:</label>
        <input type="number" placeholder="Enter your age" required /><br /><br />

        <label>Gender:</label>
        <select required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br /><br />

        <label>Country:</label>
        <input type="text" placeholder="Enter your country" required /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
