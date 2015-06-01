function showFileInspector_noFiles() {
    $('#pitchdeck').hide();
    $('#fileinspector_noFiles').show();
    $('.global-actions').show();
    $('.subscription-status.trial').addClass('active');
    $('.icon-nav').show();

}

function showFileInspector_withFiles() {
    $('#pitchdeck').hide();
    $('#fileinspector_noFiles').hide();
    $('#fileinspector_withFiles').show();
    $('.global-actions').show();

}

function showNextSubStatus() {

    var activeStat = $('.subscription-status.active');

    $(activeStat).removeClass('active');
    $(activeStat).next().addClass('active');
}

function loadSubscribed() {

    $('.subscription-status.active').removeClass('active');
    $('#subscriberStatus').show();
}

function pageloadSignedIn() {
    $(location).attr('href', 'signedIn.html');
}

function pageloadSignedOut() {
    $(location).attr('href', 'signedOut.html');
}

function pageloadFromEditor() {
    $(location).attr('href', 'fromEditor.html');
}

// media query event handler
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {

    if (mq.matches) {
        //alert('greater');
        $("#allStatuses").detach().prependTo("#desktopAnchor");
    } else {
        // alert('lessthan768');
        $("#allStatuses").detach().prependTo("#mobileAnchor");
    }

}
