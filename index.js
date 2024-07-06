document.addEventListener("DOMContentLoaded", function() {
    const footer = document.createElement('footer');

    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>About Us</h3>
                <p>Gadgets Geek is a product review page dedicated to providing in-depth reviews and insights on the latest technology and gadgets for tech enthusiasts.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a hred="#Feedback">Feedback</a></li>
                    <li><a hred="#Terms and Conditions">Terms and Conditions</a></li>
                    <li><a hred="#Privacy Policy">Privacy Policy</a></li>
                    <li><a href="#contact us">Contact us</a></li>
                    
                </ul>
            </div>
            <div class="footer-section">
                <h3>Follow Us</h3>
                <div class="social-media">
                    <a href="#"><img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4.png" alt="Facebook" width="25" height="25"></a>
                    <a href="#"><img src="https://www.freepnglogos.com/elon-musk-twitter-rebrand-x-logo-2.png" alt="Twitter" width="24" height="24"></a>
                    <a href="#"><img src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-logo-instagram-ini-ada-varias-dan-transparan-33.png" alt="Instagram" width="24" height="24"></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
    `;

    document.getElementById('footer-container').appendChild(footer);
});