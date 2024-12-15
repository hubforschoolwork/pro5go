import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const authToken = localStorage.getItem("authToken");
                const response = await axios.get("http://localhost:3000/api/dashboard1", {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                setMessage(response.data.message);
            } catch (error) {
                alert(error.response?.data?.error || "Failed to load dashboard.");
            }
        };

        fetchDashboard();
    }, []);

    return <div>{message}</div>;
}

export default Dashboard;
