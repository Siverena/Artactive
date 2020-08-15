var anchors = [];
var currentAnchor = -1;
var isAnimating = false;
$(function() {
    function updateAnchors() {
        anchors = [];
        $('.anchor').each(function(i, element) {
            anchors.push($(element).offset().top);
        });
    }
    $('body').on('mousewheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (isAnimating) {
            return false;
        }
        isAnimating = true;
        if (e.originalEvent.wheelDelta >= 0) {
            currentAnchor--;
        } else {
            currentAnchor++;
        }
        if (currentAnchor > (anchors.length - 1) ||
            currentAnchor < 0) {
            currentAnchor = 0;
        }
        isAnimating = true;
        $('html, body').animate({
            scrollTop: parseInt(anchors[currentAnchor])
        }, 500, 'swing', function() {
            isAnimating = false;
        });
    });
    updateAnchors();
});