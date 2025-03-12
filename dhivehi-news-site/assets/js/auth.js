// Authentication functions for admin pages
const AUTH = {
    // Check if user is logged in
    isLoggedIn: () => {
        return localStorage.getItem('adminLoggedIn') === 'true';
    },

    // Redirect to login if not authenticated
    requireAuth: () => {
        if (!AUTH.isLoggedIn()) {
            window.location.href = 'login.html';
        }
    },

    // Logout function
    logout: () => {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'login.html';
    },

    // Initialize auth check on admin pages
    init: () => {
        // Don't check auth on login page
        if (!window.location.pathname.includes('login.html')) {
            AUTH.requireAuth();
        }

        // Add logout functionality to logout buttons
        document.querySelectorAll('.logout-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                AUTH.logout();
            });
        });
    }
};

// Initialize authentication
document.addEventListener('DOMContentLoaded', AUTH.init);
