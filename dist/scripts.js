function closeFullView(e){activeProject&&(e.preventDefault(),fullView.fadeOut(200,function(){fullViewContent.empty(),window.scrollTo(0,goBack),activeProject=void 0}),$("#projects").fadeTo(100,1))}function injectCloseBtn(e){var t=$("#closeBtn").clone().attr("id","close");t.click(closeFullView),e.append(t)}function showFullView(e){$("#projects").fadeTo(100,.2);var t=activeProject||!1;activeProject=e;var l=$("#"+e).html();fullViewContent=fullViewContent.html(l),injectCloseBtn(fullViewContent),$("#fullview-content >ul.thumbnail-gallery").lightGallery({selector:".thumb",download:!1,thumbnail:!1}),t||(fullView=fullView.fadeIn(750,function(){return window.scrollTo(0,fullViewTop)}))}function onFullViewTrigger(e){e.preventDefault(),goBack=$(this).offset().top,showFullView($(this).data("fullviewTrigger"))}function attachFullViewTriggers(){$("a[data-fullview-trigger]").click(onFullViewTrigger)}function attachMenuHandlers(){function e(){return"inline"===$(".menu-icon").first().css("display")}$(".menu-box a[href='#']").click(function(t){t.preventDefault(),e()&&$(".menu").toggle(),closeFullView(t)}),$(".menu a").click(function(t){e()&&$(".menu").hide(),closeFullView(t)})}function populateTags(){fullView=$("#fullview").first(),fullViewContent=$("#fullview-content").first()}function attachFormHandler(){$("form").submit(function(e){var t=$("#msg-sending"),l=$(".msg-failed");l.hide(),e.preventDefault(),t.show(),$.post("http://sapmd.azurewebsites.net/pl",{email:$("#email").val(),message:$("#message").val(),name:$("#name").val()}).done(function(e){$(".msg-sent").fadeIn(250,function(){return setTimeout(function(){return $(".msg-sent").fadeOut(250)},3e3)})}).fail(function(e,t,n){return l.show()}).always(function(){return t.hide()})})}var projects=[],fullView,fullViewContent,activeProject,goBack,fullViewTop=0;$(function(){attachMenuHandlers(),populateTags(),attachFullViewTriggers(),attachFormHandler(),fullViewTop=fullView.offset().top});