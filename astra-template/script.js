 // Simulate login state (in a real WordPress site, this would be handled by PHP)
        let isLoggedIn = false;
        
        // Check login state on page load
        document.addEventListener('DOMContentLoaded', function() {
            updateUIForLoginState();
            
            // Login/Register tab switching
            document.getElementById('loginTab').addEventListener('click', function() {
                document.getElementById('loginTab').classList.add('active');
                document.getElementById('registerTab').classList.remove('active');
                document.getElementById('loginForm').style.display = 'block';
                document.getElementById('registerForm').style.display = 'none';
            });
            
            document.getElementById('registerTab').addEventListener('click', function() {
                document.getElementById('registerTab').classList.add('active');
                document.getElementById('loginTab').classList.remove('active');
                document.getElementById('registerForm').style.display = 'block';
                document.getElementById('loginForm').style.display = 'none';
            });
            
            // Switch to register form link
            document.querySelector('.switch-to-register').addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('registerTab').click();
            });
            
            // Switch to login form link
            document.querySelector('.switch-to-login').addEventListener('click', function(e) {
                e.preventDefault();
                document.getElementById('loginTab').click();
            });
            
            // Purchase button click handler
            document.getElementById('purchaseBtn').addEventListener('click', function() {
                if (!isLoggedIn) {
                    alert('Please login to purchase books.');
                    return;
                }
                // Proceed with purchase
                alert('Proceeding to checkout...');
            });
            
            // Book author button click handler
            document.getElementById('bookAuthorBtn').addEventListener('click', function() {
                if (!isLoggedIn) {
                    alert('Please login to book the author.');
                    return;
                }
                // Proceed with booking
                alert('Redirecting to booking form...');
            });
            
            // All purchase buttons
            document.querySelectorAll('.purchase-btn').forEach(button => {
                button.addEventListener('click', function() {
                    if (!isLoggedIn) {
                        alert('Please login to purchase books.');
                        return;
                    }
                    // Proceed with purchase
                    alert('Adding to cart...');
                });
            });
            
            // Simulate login (in a real site, this would be handled by WordPress auth)
            document.querySelector('#loginForm form').addEventListener('submit', function(e) {
                e.preventDefault();
                isLoggedIn = true;
                updateUIForLoginState();
                bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
                alert('Login successful!');
            });
            
            // Simulate registration (in a real site, this would be handled by WordPress)
            document.querySelector('#registerForm form').addEventListener('submit', function(e) {
                e.preventDefault();
                isLoggedIn = true;
                updateUIForLoginState();
                bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
                alert('Registration successful! You are now logged in.');
            });
        });
        
        function updateUIForLoginState() {
            if (isLoggedIn) {
                // Hide guest notices
                document.getElementById('guestNotice').style.display = 'none';
                document.getElementById('bookingGuestNotice').style.display = 'none';
                
                // Enable purchase buttons
                document.getElementById('bookAuthorBtn').disabled = false;
                document.getElementById('bookAuthorBtn').textContent = 'Book Now';
                document.getElementById('purchaseBtn').textContent = 'Purchase Now';
                
                // Change all "View Details" buttons to "Add to Cart"
                document.querySelectorAll('.purchase-btn').forEach(button => {
                    button.textContent = 'Add to Cart';
                    button.classList.remove('btn-outline-primary');
                    button.classList.add('btn-primary');
                });
            } else {
                // Show guest notices
                document.getElementById('guestNotice').style.display = 'block';
                document.getElementById('bookingGuestNotice').style.display = 'block';
                
                // Disable booking button
                document.getElementById('bookAuthorBtn').disabled = true;
                
                // Change all "Add to Cart" buttons to "View Details"
                document.querySelectorAll('.purchase-btn').forEach(button => {
                    button.textContent = 'View Details';
                    button.classList.remove('btn-primary');
                    button.classList.add('btn-outline-primary');
                });
            }
        }