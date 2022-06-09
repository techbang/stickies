$(document).ready(function() {
    /* stickies */
  $('#stickies .agree-btn a').click(function() {
    $(this).parents('div[class$="_stickie"]').fadeOut('slow');
    return false;
  });
});
