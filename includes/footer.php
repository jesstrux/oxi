    <footer id="sitefooter">
        <div class="footer-wrapper layout vertical">
            <div class="layout">
                <div id="subscribe" class="layout vertical end-justifie">
                    <p>
                        Get weekly updates
                    </p>

                    <div class="layout">
                        <input type="text" placeholder="Your email">
                        <button>
                            <i class="fa fa-send-o"></i>
                        </button>
                    </div>
                </div>
                <div class="flex layout vertical">
                    <div id="footerNav" class="layout justified">
                        <div>
                            <h5>Important Links</h5>
                            <ul>
                                <li><a href="#sectionServices">Our Services</a></li>
                                <li><a href="#">Become a translator</a></li>
                            </ul>
                        </div>

                        <div>
                            <h5>Contact Us</h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-phone"></i>&nbsp;&nbsp;
                                        +255 718 728 778
                                    </a>
                                </li>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-envelope"></i>&nbsp;&nbsp;
                                        info@oxi.co.tz
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div id="socialMediaLinks">
                            <h5>Social Media</h5>
                            <a href="#">
                                <i class="fa fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-twitter-square"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="copyright" class="layout center-center">
            <span>
                Copyright &copy;<span class="highlight"> OXI Tanzania </span> 2017
            </span>
        </div>
    </footer>
    <!-- Scripts -->
    <script>
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    </script>
</body>
</html>
