$(document).ready(function() {
 var CountVideo = expir_rd_video_list.length;
  var s_tmp=0;
  $(".expir_video_youtube").empty();
  for (s_tmp = 0; s_tmp < CountVideo; s_tmp++) {
    $(".expir_video_youtube").append('<div class=\'card-success\'><a data-fancybox href=\''+expir_rd_video_list[s_tmp].link_youtube+'\'><img alt=\"'+expir_rd_video_list[s_tmp].title+'\" src=\"'+expir_rd_video_list[s_tmp].imglink+'\"></a><a data-fancybox class=\'fab google-red\' href=\''+expir_rd_video_list[s_tmp].link_youtube+'\'><img src=\'https://viksuhor.github.io/image/youtube.png\' height=\'24px\' width=\'24px\' class=\'fab-video\'></a><div class=\'expir_nsh_text\'><p class=\"kndr_nsh_text_title\">'+expir_rd_video_list[s_tmp].title+'</p></div></div>');
};});
while(questlist.length > 0) {
    questlist.pop();
}
