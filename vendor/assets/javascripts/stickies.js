$(document).ready(function() {
    /* stickies */
  $('#stickies .stickies_close_area a').click(function() {
    $(this).parents('div[class$="_stickie"]').fadeOut('slow');
    return false;
  });
});
