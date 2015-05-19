


function showFileInspector_noFiles() {
    $('#pitchdeck').hide();
    $('#fileinspector_noFiles').show();
    $('.global-actions').show();

}


function showFileInspector_withFiles() {
    $('#pitchdeck').hide();
    $('#fileinspector_noFiles').hide();
    $('#fileinspector_withFiles').show();
    $('.global-actions').show();
    $('.uploadCTA').hide();

}

function showNextSubStatus() {

  var activeStat = $('.subStat.active');

  $(activeStat).removeClass('active');
  $(activeStat).next().addClass('active');
}

function loadSubscribed() {

    $('.subStat.active').removeClass('active');
	$('#subscriberStatus').show();
}

function pageloadSignedIn() {
  $(location).attr('href', '/signedIn.html');
  }

  function pageloadSignedOut() {
    $(location).attr('href', '/signedOut.html');
  }