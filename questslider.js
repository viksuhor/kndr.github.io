$(document).ready(function() {

    var current_slide = 0;
    var slide_cont = "";
    var slide_width = 1050;
    var slideQuestLeft = 0;
    var CountQuest = kndr_rd_slides_src.length;
    var s_tmp;
    var n_tmp;
    var sgCount;
    var wnd_popup="00ae8a60336545c5962051bb165dca99";
    $(".kndr_rd_slides").empty();
    for (s_tmp = 0; s_tmp < CountQuest; s_tmp++) {
        if (s_tmp < CountQuest - 1) {
            $(".kndr_rd_navmenu").append("<div class=\'kndr_rd_navquest_btn\' data-attr=\'" + s_tmp + "\'><span class=\'kndr_rd_navquest_name\'>" + kndr_rd_slides_src[s_tmp].name + "</span></div>");
        }
        sgCount = kndr_rd_slides_src[s_tmp]['sgimg'].length;
        slide_cont = "<div class=\'kndr_rd_slide\'><div class=\'kndr_rd_left_slide\'><div class='kndr_rd_qg_main'><div class='knd_navbtn knd_navbtn_l'></div><div class='kndr_rd_qg_slides' data-attr='0'><span class='kndr_rd_qg_slide kndr_rd_qg_slide_active' style=\'background-image: url(" + kndr_rd_slides_src[s_tmp].bgimg + "); '>&nbsp;</span>";
        for (n_tmp = 0; n_tmp < sgCount; n_tmp++){
            slide_cont = slide_cont + "<span class=\"kndr_rd_qg_slide\"style=\'background-image: url(" + kndr_rd_slides_src[s_tmp].sgimg[n_tmp] + "); \'>&nbsp;</span>"
        }
        
        slide_cont = slide_cont + "</div><div class=\'kndr_rd_right_slide\'><div class=\'kndr_rd_questword\'>"+kndr_rd_slides_src[s_tmp].type+"</div><div class=\'kndr_rd_namequest\'><p>" + kndr_rd_slides_src[s_tmp].name + "<span class=\"quest_age\">"+kndr_rd_slides_src[s_tmp].questage+"</span></p></div><div class=\'kndr_rd_quest_dsk\'>" + kndr_rd_slides_src[s_tmp].desk + "</div><div class=\'knd_rd_block_btns\' onclick=\"showSectionPopup(\'"+wnd_popup+"\');return false;\">Забронировать квест</div></div></div>";
        $(".kndr_rd_slides").append(slide_cont);
    }
    $(".kndr_rd_navquest_btn").eq(0).addClass('kndr_rd_navquest_btn_activ');

    $('.kndr_rd_slider_nav_btn_l').on('click', function() {
        var parentSQ = $(this).closest('.kndr_rd_slider');
        var listQuest = $('.kndr_rd_slides', parentSQ);
        var CountQuest = listQuest.find('.kndr_rd_slide').length;
        var CurrentQuest = Number(listQuest.attr('data-attr'));
        var CurrentLeftValue = Number(listQuest.attr('data-left'));
        var navbtn = $(".kndr_rd_navquest_btn");
        var SelectQuest;
        if (CurrentQuest == 0) {
            CurrentLeftValue = -1 * (CountQuest - 1) * slide_width;
            CurrentQuest = CountQuest - 1;
            listQuest.animate({
                left: CurrentLeftValue + "px"
            }, 0);
        }
        CurrentQuest -= 1;
        SelectQuest=CurrentQuest;
        navbtn.removeClass('kndr_rd_navquest_btn_activ');
        navbtn.eq(SelectQuest).addClass('kndr_rd_navquest_btn_activ');
        CurrentLeftValue += slide_width;
        listQuest.animate({
            left: CurrentLeftValue + "px"
        }, 500);
        listQuest.attr('data-attr', CurrentQuest);
        listQuest.attr('data-left', CurrentLeftValue);
    });
    $('.kndr_rd_slider_nav_btn_r').on('click', function() {
        var parentSQ = $(this).closest('.kndr_rd_slider');
        var listQuest = $('.kndr_rd_slides', parentSQ);
        var CountQuest = listQuest.find('.kndr_rd_slide').length;
        var CurrentQuest = Number(listQuest.attr('data-attr'));
        var CurrentLeftValue = Number(listQuest.attr('data-left'));
        var navbtn = $(".kndr_rd_navquest_btn");
        var SelectQuest;
        if (CurrentQuest == CountQuest - 1) {
            CurrentLeftValue = 0;
            CurrentQuest = 0;
            listQuest.animate({
                left: CurrentLeftValue + "px"
            }, 0);
        }
        CurrentQuest += 1;
        SelectQuest=CurrentQuest;
        if (CurrentQuest==CountQuest - 1){
            SelectQuest=0;
        }
        navbtn.removeClass('kndr_rd_navquest_btn_activ');
        navbtn.eq(SelectQuest).addClass('kndr_rd_navquest_btn_activ');
        CurrentLeftValue -= slide_width;
        listQuest.animate({
            left: CurrentLeftValue + "px"
        }, 500);
        listQuest.attr('data-attr', CurrentQuest);
        listQuest.attr('data-left', CurrentLeftValue);
    });
    function kndr_navquest_btn_click(){
        var parentSQ = $(this).closest('.kndr_rd_slider');
        var listQuest = $('.kndr_rd_slides', parentSQ);
        var SelectQuest = Number($(this).attr('data-attr'));

        var CurrentLeftValue = -1* slide_width*SelectQuest;
        listQuest.animate({
            left: CurrentLeftValue + "px"
        }, 500);
        listQuest.attr('data-attr', SelectQuest);
        listQuest.attr('data-left', CurrentLeftValue);
        $('.kndr_rd_navquest_btn').removeClass('kndr_rd_navquest_btn_activ');
        $(this).addClass('kndr_rd_navquest_btn_activ');


    };
    $('.kndr_rd_navquest_btn').on('click',kndr_navquest_btn_click)
});


$(document).ready(function() {
    var leftUIEl = $('.kndr_rd_sg_btn_l');
    var rightUIEl = $('.kndr_rd_sg_btn_r');
    var i_tmp;

    function kndr_sg_lclick() {
        var LeftSlide = $(this).closest('.kndr_rd_left_slide');
        var bigImage = $('.kndr_rd_main_img_slide', LeftSlide);
        var parentSG = $(this).closest('.kndr_rd_small_galery');
        var listSG = $('.kndr_rd_sg_list', parentSG);
        var ListElem = $('.kndr_rd_sg_element', listSG);
        var countelem = listSG.find('.kndr_rd_sg_element').length;
        var currentInd = Number(listSG.attr('data-attr'));
        var stepValue = 108;
        var currentLeftValue = Number(listSG.attr('data-left'));

        if (currentInd == 1) {
            currentLeftValue = -1 * (countelem - 3) * stepValue;
            listSG.animate({
                left: currentLeftValue + "px"
            }, 0);
            currentInd = countelem - 2;
            listSG.attr('data-attr', countelem - 2);
        }
        currentLeftValue += stepValue;
        listSG.animate({
            left: currentLeftValue + "px"
        }, 300);
        listSG.attr('data-left', currentLeftValue);
        listSG.attr('data-attr', Number(listSG.attr('data-attr')) - 1);
        currentInd -= 1;
        ListElem.removeClass('kndr_rd_sg_element_active');
        ListElem.removeClass('kndr_rd_sg_btn_l');
        ListElem.removeClass('kndr_rd_sg_btn_r');
        ListElem.eq(currentInd).addClass('kndr_rd_sg_element_active');
        ListElem.eq(currentInd - 1).addClass('kndr_rd_sg_btn_l');
        ListElem.eq(currentInd + 1).addClass('kndr_rd_sg_btn_r');
        $('.kndr_rd_sg_btn_r').off().on('click', kndr_sg_rclick);
        $('.kndr_rd_sg_btn_l').off().on('click', kndr_sg_lclick);
        bigImage.css('background-image', ListElem.eq(currentInd).css('background-image'));
    };

    function kndr_sg_rclick() {
        var LeftSlide = $(this).closest('.kndr_rd_left_slide');
        var bigImage = $('.kndr_rd_main_img_slide', LeftSlide);
        var parentSG = $(this).closest('.kndr_rd_small_galery');
        var listSG = $('.kndr_rd_sg_list', parentSG);
        var ListElem = $('.kndr_rd_sg_element', listSG);
        var countelem = listSG.find('.kndr_rd_sg_element').length;
        var currentInd = Number(listSG.attr('data-attr'));
        var stepValue = 108;
        var currentLeftValue = Number(listSG.attr('data-left'));

        if (currentInd == (countelem - 2)) {
            currentLeftValue = 0;
            listSG.animate({
                left: currentLeftValue + "px"
            }, 0);
            currentInd = 1;
            listSG.attr('data-attr', 1);
        }
        currentLeftValue -= stepValue;
        listSG.animate({
            left: currentLeftValue + "px"
        }, 300);
        listSG.attr('data-attr', Number(listSG.attr('data-attr')) + 1);
        listSG.attr('data-left', currentLeftValue);
        currentInd += 1;
        ListElem.removeClass('kndr_rd_sg_element_active');
        ListElem.removeClass('kndr_rd_sg_btn_l');
        ListElem.removeClass('kndr_rd_sg_btn_r');
        ListElem.eq(currentInd).addClass('kndr_rd_sg_element_active');
        ListElem.eq(currentInd - 1).addClass('kndr_rd_sg_btn_l');
        ListElem.eq(currentInd + 1).addClass('kndr_rd_sg_btn_r');
        $('.kndr_rd_sg_btn_r').off().on('click', kndr_sg_rclick);
        $('.kndr_rd_sg_btn_l').off().on('click', kndr_sg_lclick);
        bigImage.css('background-image', ListElem.eq(currentInd).css('background-image'));

    };

    $('.kndr_rd_sg_btn_r').on('click', kndr_sg_rclick);
    $('.kndr_rd_sg_btn_l').on('click', kndr_sg_lclick);
});
