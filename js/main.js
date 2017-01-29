document.addEventListener("DOMContentLoaded", function(event) {

    var options = [{
            selector: '.balloon-container',
            vh: 100
        },
        {
            selector: '#welcome-section',
            vh: 100
        }
    ];

    var vhFix = new VHChromeFix(options);
});
