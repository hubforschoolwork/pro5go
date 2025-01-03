import { Dropdown } from "bootstrap";

Logout Button Placement Choices:


Navbar

// Example of a logout button in a navigation bar component
const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

    return (
        <nav>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};


User Profile Dropdown

// Example of a logout button in a user profile dropdown
const UserProfile = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

    return (
        <div className="user-profile">
            <img src="user-avatar.png" alt="User Avatar" />
            <div className="dropdown-menu">
                <a href="/profile">Profile</a>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};


Sidebar

// Example of a logout button in a sidebar component
const Sidebar = () => {
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

    return (
        <aside>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </aside>
    );
};

