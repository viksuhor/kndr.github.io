$(document).ready(function() {
var $main= $('.mainhex-list');
var $QuestsWnds=$('.Quest-desk');
var $CurrQuest;
var $CurrQuestWnd;
var CurrQuestLine='odd-line-quest';
var currentQuest=0;
var CountQuest = questlist.length;
var s_tmp;
var n_tmp=0;
function setQuestWnd(e){
  
  $QuestsWnds.append('<div class="quest-wnd" style="background-image: url(\''+questlist[e].bgimg+'\');" id="quest_'+e+'"></div>');
$CurrQuestWnd=$('.quest-wnd:last');
$CurrQuestWnd.append('<div class="quest-title">'+questlist[e].name+'</div>');
$CurrQuestWnd.append('<div class="quest-wnd-src"></div>');
if (questlist[e].link_video==''){
$('.quest-wnd-src',$CurrQuestWnd).append('<div class="quest-wnd-left"></div>');
}else{$('.quest-wnd-src',$CurrQuestWnd).append('<div class="quest-wnd-left"><iframe class="youtube-frame" id="ytplayer" type="text/html" src="'+questlist[e].link_video+'" frameborder="0" allowfullscreen></div>');
}

$('.quest-wnd-src',$CurrQuestWnd).append('<div class="quest-wnd-right"></div>');
$('.quest-wnd-right',$CurrQuestWnd).append('<div class="descript-quest">'+questlist[e].desk+'</div>');
$('.quest-wnd-right',$CurrQuestWnd).append('<div class="app_ques"t></div>');
$CurrQuestWnd.append('<div class="quest-wnd-footer"><div class="quest-btn-add">Записаться на игру</div></div>');
  }
  
  function setQuestBlock(e,CurrQuestLine){
  $("."+CurrQuestLine+":last").append('<span class="hexmain '+questlist[e].quest_type+'"></span>');

$CurrQuest=$('.hexmain:last');

$CurrQuest.append(('<div class="hex_cost_box">'+questlist[e].cost+'</div><a data-fancybox href="" data-src="#quest_'+e +'" class="b-polygon b-polygon_hexagon b-polygon_hexagon2"></a>'));
$('.b-polygon',$CurrQuest).append('<span class="b-polygon-part"></span>');
$('.b-polygon-part',$CurrQuest).append('<span class="b-polygon-part b-polygon-part_content" style="background-image: url(\''+questlist[e].image+'\');"></span>');
$('.b-polygon-part_content',$CurrQuest).append('<span class="b-polygon-mask"></span>');
$('.b-polygon-mask',$CurrQuest).append('<div class="b-mid-hex"><div class="b-mid-hex-left"></div><div class="b-mid-hex-right"></div></div>');

$('.b-mid-hex-left',$CurrQuest).append('<span><img src="http://viksuhor.github.io/Expir/images/quest_icon_quest_item_member.png">  <img src="http://viksuhor.github.io/Expir/images/icon_person_grey_big_'+questlist[e].people_min+'.png">  -  ');
$('.b-mid-hex-left',$CurrQuest).append('<img src="http://viksuhor.github.io/Expir/images/icon_person_grey_big_'+questlist[e].people_max+'.png"></span><br/><br/>');
$('.b-mid-hex-left',$CurrQuest).append('<span class="time_quest"><img src="https://viksuhor.github.io/Expir/images/quest_icon_quest_item_time.png">   '+questlist[e].time+'</span><br/><br/>');

  
  }
  
$main.empty();
$QuestsWnds.empty();
$main.append('<div class="'+CurrQuestLine+'"></div>');
for (s_tmp = 0; s_tmp < CountQuest; s_tmp++) {
if (((n_tmp%4)==0) && (CurrQuestLine=='odd-line-quest')&&(n_tmp>0)){
CurrQuestLine='even-line-quest';
$main.append('<div class="'+CurrQuestLine+'"></div>');
n_tmp=0;
}
if (((n_tmp%3)==0) && (CurrQuestLine=='even-line-quest')&&(n_tmp>0)){
CurrQuestLine='odd-line-quest';
$main.append('<div class="'+CurrQuestLine+'"></div>');
n_tmp=0;
}
n_tmp+=1;
setQuestBlock(s_tmp,CurrQuestLine);
setQuestWnd(s_tmp);
  }
  
function show_quest_type(type){
var CurrQuestLine='odd-line-quest';
var s_tmp;
var n_tmp=0;
$main.empty();
$main.append('<div class="'+CurrQuestLine+'"></div>');
for (s_tmp = 0; s_tmp < CountQuest; s_tmp++) {
if (((n_tmp%4)==0) && (CurrQuestLine=='odd-line-quest')&&(n_tmp>0)){
CurrQuestLine='even-line-quest';
$main.append('<div class="'+CurrQuestLine+'"></div>');
n_tmp=0;
}
if (((n_tmp%3)==0) && (CurrQuestLine=='even-line-quest')&&(n_tmp>0)){
CurrQuestLine='odd-line-quest';
$main.append('<div class="'+CurrQuestLine+'"></div>');
n_tmp=0;
}
if(questlist[s_tmp].quest_type.indexOf(type)>-1){
n_tmp+=1;
setQuestBlock(s_tmp,CurrQuestLine);
}
}

}
$('.quest-btn-add').click(function() {    
$('.fancybox-close-small').click();
$(idsend).find('.btn-form-popover').click();
});
$('.quests_filtr a').on('click', function() {
    var jParent = $('.quests_title');
    var z = $(this);
    var all = $('.quests_filtr a', jParent);
    var all_box = $(".hexmain");
    var c = all_box.filter("." + z.attr("data-class"));
    if (!z.hasClass("hover")) {
      all.removeClass("hover");
      z.addClass("hover");
      show_quest_type(z.attr("data-class"));
    }
  });
$main.empty(); 
});
