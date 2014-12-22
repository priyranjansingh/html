(function(window, document, $, undefined) {
    'use strict';
	
		var slide = false;
		var selCat = "dash";
		var height = $('.collapsible-ftr-content').height();	
	
	
    // Call function right away passing STAPLES or empty object if not yet initialized
    var STAD = (function(STAD) {


        STAD.Main = (function() {
//variable to check if the header3 toggle animation is completed or not
	        var ishdr3Animating = false;
            function toggleElement(element){
                var that = $(element);
                var parentList = that.parent();
                var otherLists = parentList.siblings();
                    that.siblings('.dropDown').toggle();
                 if (that.siblings('.dropDown').is(":visible")) {
                    that.parent().addClass("active");
                } else {
                    that.parent().removeClass("active");
                }
                otherLists.children('.dropDown').hide();
             }
            
            function selectElement(element){
                var that = $(element);
				if(that.hasClass("bc-category-link") || that.hasClass("bc-industry-link")) {
						$(".by-cat-list li").removeClass("active");
						$(".bc-category-link-itf").addClass("active");
						$(".bc-category-link-itfinder").addClass("active");
						$(".by-cat-inktoner").show();
						$(".bc-Container-2").hide();
						
				}
                var parentList = that.parent();
                var otherLists = parentList.siblings();
                
                    that.siblings('.dropDown').show();
                    that.addClass("active");
                    otherLists.children('.dropDown').hide();
                    //slider code change here....
					if(that.siblings().find("#slider-2").is(":visible")){
						$("#slider-2").tinycarousel({
							axis   : "y",
							infinite: true,
                            display:2
						}).attr('id','slider-2-active');    
					}               
            }
            
            function byCatListToggle(element){
                var that = $(element);
                that.siblings('li').removeClass("active");
                that.addClass("active"); 
                if(that.hasClass('bc-category-link-itfinder')) {
                    $('.by-cat-inktoner').show();
                }   
                else {
                    $(that.children('.bc-Container-2').show());
                }   
            }  
            
            function indListToggle(element){
                var that = $(element);
                that.siblings('li').removeClass("active");
                that.addClass("active"); 
                if(that.hasClass('bc-ind-link-itfinder')) {
                    $('.ind-inktoner').show();
                }   
                else {
                    $(that.children('.bc-Container-2').show());
                }   
            }       


            
            
            function toggleHdr3(element){
                   
                var that = $(element);
                
                if(that.hasClass("dashboard-link")){
                    if($(".item-detail-container").is(":visible")){
                        $(".item-detail-container").slideUp(500,function(){ishdr3Animating = false;});
                    } else {
						selCat = "dash";
						$(".nv3-dash-drop").addClass("active");
                        $(".browse-categories-container").hide();
                        $(".quickorder-detail-container").hide();
                        $(".search-result-section").hide();
                        $(".item-detail-container").slideDown(500,function(){
                            ishdr3Animating = false;
                            //slider code change here....
                            if($('.dash-col-right.temp2').find("#list-slider").is(":visible")){
                                $('.lists-slider').tinycarousel({
                                    axis   : "y",
                                    infinite: true, 
                                    display:4
                                }).attr('id','list-slider-active');    
                            }
                        });
                    }
                }
               
                else if(that.hasClass("quickorder-link") ) {
                    if($(".quickorder-detail-container").is(":visible")){
                        $(".quickorder-detail-container").slideUp(500,function(){ishdr3Animating = false;});
                    }else {
						selCat = "quick";
                        $(".nv3-quick-drop").addClass("active");
                        $(".browse-categories-container").hide();
                        $(".search-result-section").hide();
                        $(".item-detail-container").hide();
                        $(".quickorder-detail-container").slideDown(500,function(){ishdr3Animating = false;});
                    }
                }
               
                else if(that.hasClass("browsecat-link") ) {
                    if($(".browse-categories-container").is(":visible")) {
						//alert("welcome");
						
                        $(".browse-categories-container").slideUp(500,function(){ishdr3Animating = false;});
                    }
                    else {
						//alert("welcome1");
						selCat = "browse";
					
                        $(".nv3-browse-drop").addClass("active");
                        $(".search-result-section").hide();
                        $(".item-detail-container").hide();
                        $(".quickorder-detail-container").hide();
						
						$(".bc-hdr-link>a").removeClass("active");
						$(".bc-category-link").addClass("active");
						$(".by-cat-list li").removeClass("active");
						$(".bc-content dropDown").hide();
						$(".bc-category").show();
						$(".bc-category-link-itf").addClass("active");
						$(".bc-category-link-itfinder").addClass("active");
						$(".by-cat-inktoner").show();
						$(".bc-Container-2").hide();
						
                         //slider code change here....
                        $(".browse-categories-container").slideDown(500,function(){
																				 
																				 
							ishdr3Animating = false;
							if($(this).find("#slider-1").is(":visible")){
								
								
								$("#slider-1").tinycarousel({
									axis   : "y",
									infinite: true,
                                    display:1
								}).attr('id','slider-1-active');    
							}
						});
                    }
                }
    
               else if(that.hasClass("search")) {
                    if($(".search-result-section").is(":visible"))
                        $(".search-result-section").slideUp(500,function(){ishdr3Animating = false;});
                    else { 
						selCat = "search";
                       $(".search-result-section").slideDown(500,function(){ishdr3Animating = false;});
                        $(".browse-categories-container").hide();
                        $(".item-detail-container").hide();
                        $(".quickorder-detail-container").hide();  
					}
                }
            };
            
            $(".view-span").click(function(){
                $(".dash-col-right.temp1").toggle();
                $(".dash-col-right.temp2").toggle();

            });
            
      
             $(".dash-reorder-add-list-rp>a").click(function(){
                $(".add-list-container1").show();   
                $(".add-list-container2").hide();  
                $(".add-list-container3").hide();
                $('.add-list-select > .list-select').hide();
            });
             $(".consider-these-add-list-rp>a").click(function(){
                $(".add-list-container1").show();   
                $(".add-list-container2").hide(); 
                $(".add-list-container3").hide();
                $('.add-list-select > .list-select').hide();
            });
            
            $(".lb-item-list .create-list").click(function(){
                $(".add-list-container1").hide();
                $(".add-list-container3").show(); 
				$(".add-list-radio").hide();
				$('#listform')[0].reset();
            });
            
            $(".lb-item-list .overlayclose").click(function(){
                $('.add-list-select > .list-select').hide();
                $(".lb-a-list").colorbox.close();
                $(".add-list-container1").show();   
                $(".add-list-container2").hide(); 
                $(".add-list-container3").hide();
                $(".add-list-container4").hide(); 
             });
            
              $(".lb-item-list .btn-gray-large").click(function(){
                if(!$('.add-list-items > .dash-contents.active').is(':visible')){
                    $('.add-list-select > .list-select').show();
                }else{
                    $('.add-list-select > .list-select').hide();
                    $(".add-list-container1").hide();   
                    $(".add-list-container2").show(); 
                    setTimeout(function(){
                        $(".add-list-container2").hide();
                        $(".add-list-container1").show(); 
                        $(".lb-a-list").colorbox.close();
                    },2000)
                }
            });
             $(".add-list-container3 .btn-gray-large").click(function(){
                    $(".add-list-container3").hide();   
                    $(".add-list-container4").show(); 
                    setTimeout(function(){
                        $('.add-list-select > .list-select').hide();
                        $(".add-list-container4").hide();
                        $(".add-list-container3").show(); 
                        $(".lb-a-list").colorbox.close();
                    },2000)
            });

            
            //Selection for add to list
            $('.add-list-items > .dash-contents').click(function(){
                if(!$(this).hasClass('active')){
                    $('.add-list-items > .dash-contents.active').removeClass('active');
                    $(this).addClass('active');
                }else{
                    $(this).removeClass('active');
                }
            });

            $('.add-list-container1 > input[title=\"Cancel\"]').click(function(){
                $('.add-list-items > .dash-contents.active').removeClass('active');
            });
            
            $('.add-list-container3 .dash-btn').click(function(){
                $(".add-list-container1").show();   
                $(".add-list-container3").hide(); 
            });
            
            
            function toggleChalkText(element, value){
                var that = $(element);
                var value = that.index() + 1;
                that.siblings('span').removeClass("active");
                $(".chalk-images").hide();
                that.addClass("active");                        
                switch(value)
                {
                        case 1:
                            $(".chalk-talk-wrapper").animate({marginLeft: "0px"});
                            break;
                        case 2:
                            $(".chalk-talk-wrapper").animate({marginLeft: "-632px"},function() {
                                $(".ctArr4,.ctArr5,.ctArr6").show();
							});
                            break;
                        case 3:
                            $(".chalk-talk-wrapper").animate({marginLeft: "-1264px"},function() {
                                $(".ctArr1,.ctArr2,.ctArr3").show();
							});
                            break;
                }                
            }
            
            
			function recursion(){
                if($(".chalk-talk-nav span.active").index() < 2){    
                    $(".chalk-talk-nav span.active").next().click();
                }
                else{
                    $(".chalk-talk-nav span").first().click();
                }
            }
              
            //initialize as the methods in this object
            function init(){
                
                // executes when HTML-Document is loaded and DOM is ready
                $(document).ready(function(){
                    //adding support for touch in tablets
                    $('header li:has(ul)').doubleTapToGo();
                    $('.wrapper-static-ftr li:has(div)').doubleTapToGo();
                    if($(".shop-container > a").hasClass( "active" )){
	                   $("body").css("overflow","auto");
                    };
                    $(".chalk-images").hide();
                    
                    $('.dashboard-link, .quickorder-link, .browsecat-link, .search').click(function(event){
                        event.stopPropagation();
						if(!ishdr3Animating){
						 selCat = "";		
			             ishdr3Animating = true;
                        $('.nv3-drop').removeClass("active");
                        toggleHdr3(this);
						}
                    })
                    $('.bc-hdr-link > a').click(function(){
                        $('.bc-hdr-link').removeClass("active");
						$('.bc-hdr-link > a').removeClass("active");
						$('.bc-hdr-link').children('.dropDown').hide();
						selectElement(this);
                    })
                    $('.by-cat-list > li').hover(function(){
                        $('.by-cat-inktoner, .by-cat-list .bc-Container-2').hide();
                        byCatListToggle(this);
                    }); 
                    $('.ind-list > li').hover(function(){
                        $('.ind-inktoner, .ind-list .bc-Container-2').hide();
                        indListToggle(this);
                    });
                    $(".chalk-talk-nav span").click(function(){
                        toggleChalkText(this);
                    });
					
					
					/* Footer Actions */

					$('.ftr-toggle-pointer').click(function() {
							var docHeight = $(document).height();
							var windowHeight = $(window).height();
							var scrollPos = docHeight - windowHeight + height;
							$('.collapsible-ftr-content').animate({ height: "toggle"}, 800);
							if(slide == false) {
								slide = true;
								/*Normal toggle of footer*/
								$('.collapsible-ftr-ttl').animate({'padding-top':'21px','padding-bottom':'21px'}, 800);
								$('.coll-ttl-container').animate({height: "60px"}, 800);
								$('.toggle-image').css("background","url(images/headerfooter.png) 0px -677px no-repeat");
							} 
							else {
								scrollPos = scrollPos + 30;
								$('html, body').animate({scrollTop: scrollPos+'px'}, 800);
								slide = false;
								/*Normal toggle of footer */
								$('.collapsible-ftr-ttl').animate({'padding-top':'50px','padding-bottom':'0px'}, 800);
								$('.coll-ttl-container').animate({height: "74px"}, 800);                
								$('.toggle-image').css("background","url(images/headerfooter.png) 0px -699px no-repeat");
							}
					});
					
					
                    var chalkAutoSlider = setInterval(recursion,5000);
                    $(".chalk-close").click(function(){
                        $("body").css("overflow","auto");
                        $('.chalk-talk-container').hide();
                        $('.chalk-container').hide();
                        clearInterval(chalkAutoSlider);
                        chalkAutoSlider=0;
                    });
                       $(".overlayclose").click(function(){
                        $(".lb-a-cart").colorbox.close();
                    });
                    
			// To limit the max char of description and for ellipsis property

					$(".specialoffer-model p").text(function(index, currentText) {
						return currentText.substr(0, 53)+'...';
					});
					$(".rp-item-desc").text(function(index, currentText) {
						return currentText.substr(0, 53)+'...';
					});
					$(".purchace-item-desc a").text(function(index, currentText) {
						return currentText.substr(0, 105)+'...';
					});
					$(".quickorder-cnt-text").text(function(index, currentText) {
						return currentText.substr(0, 87)+'...';
					});
					$(".dash-b-cont-slide").text(function(index, currentText) {
						return currentText.substr(0, 56)+'...';
					});
					$(".recent-purchase-product-desc").text(function(index, currentText) {
						return currentText.substr(0, 58)+'...';
					});
					$(".consider-these-desc").text(function(index, currentText) {
						return currentText.substr(0, 75)+'...';
					});
					$(".recent-purchase-row1 .recent-purchase-product-desc").text(function(index, currentText) {
						return currentText.substr(0, 42)+'...';
					});
                    $(".browse-slider .recent-purchase-product-desc").text(function(index, currentText) {
						return currentText.substr(0, 38)+'...';
					});
                    $(".mini-cart-item-desc").text(function(index, currentText) {
						return currentText.substr(0, 45)+'...';
					});
					
					//Ship to hover functionality
					$(".shiploc").mouseover(function(){ 
        					$(".shiploc-dropdown").show(); 
    				});
					
					$(".shiploc").mouseout(function(){ 
        				$(".shiploc-dropdown").hide(); 
    				});
    
    				$('.shipto-item-msg').click(function(){
						$(".shiploc-dropdown").hide(); 
    				});
                                  
                    //CLEAR NARROW BY FILTERS
//                    $('a.clear-narrow-by-filters').click(function(evt){
//                        evt.preventDefault();
//                        $(".narrow-by-filters").hide();
//                    });
                    
                    //Secondary search filters events
                    $('.filter-narrow-by  a.category-filter, .filter-sort-by  a.sort-filter').click(function(){
                        $(this).closest('li.filter-drop-link').toggleClass('active');
                    });
                                     
                    $('.category-filter-drop >ul >li a').click(function(){
                        $(this).closest('li.filter-drop-link').toggleClass('active');  
                        $('.filter-narrow-by  a.category-filter').hide();
                        $('.active-category-filter').show();
                        $('.active-category-filter > span').text($(this).text());
                        showClearAllBtn(true);
                    });
                    
                    $('.category-filter-close').click(function(){
                        $('.active-category-filter').hide();
                        $('.filter-narrow-by  a.category-filter').show();
                    });
                    
                    $('.sort-filter-drop >ul >li a').click(function(){
                        if(!$(this).hasClass('active')){
                            $('.sort-filter-drop >ul >li a.active').toggleClass('active');
                            $(this).toggleClass('active');
                            $('.filter-sort-by  a.sort-filter .browse-text').text($(this).text());
                        }
                        $(this).closest('li.filter-drop-link').toggleClass('active');                        
                    });
                    
                    $('.show-only-filter-list .checkbox-with-label input[type=\"checkbox\"]').change(function(){
                        showClearAllBtn(true);
                    });
                    
                    $('.show-only-filter .show-all-btn').click(function(evt,triggered){
                        if(triggered != 'triggered' ){
                            if($('.search-filter[data-filter-title=\"all-filter\"]').closest('li.filter-drop-link').hasClass('active')){
                                $('.primary-search-filter > li.active .search-filter').trigger('click',['triggered']);
                            }
                        }
                        $(this).toggleClass('active');
                        $('.show-only-filter-list').toggleClass('active');
                        $('.show-only-filter-container').toggleClass('active');
                        
                    });
                    
                    //Primary search filter events
                   $('.primary-search-filter > li.filter-drop-link .search-filter').click(function(evt,triggered){
                        var filterdroplink = $(this).closest('li.filter-drop-link');
                        if(filterdroplink.hasClass('active')){
                            filterdroplink.toggleClass('active');
                            if($(this).attr('data-filter-title') === 'all-filter'){
                                $('.all-filter-content').toggle();
                            }
                        }else{
                            if($('.primary-search-filter > li.filter-drop-link.active .search-filter').attr('data-filter-title') === 'all-filter'){
                                $('.all-filter-content').toggle();
                            }
                            $('.primary-search-filter > li.filter-drop-link.active').toggleClass('active');
                            filterdroplink.toggleClass('active');
                            if($(this).attr('data-filter-title') === 'all-filter'){
                                if(triggered != 'triggered' ){
                                    if($('.show-only-filter-list').hasClass('active')){
                                        $('.show-all-btn').trigger('click',['triggered']);
                                    }
                                }
                                $('.all-filter-content').toggle();
                            }
                        }
                    });
                    
                    //ratings event
                    $('.all-filter-list[title=\"ratings-list\"] .checkbox-list >li , .search-filter-dropdown[data-filter-title=\"rating-filter\"] .checkbox-list >li ').click(function(){
                        if($(this).hasClass('active')){
                            $(this).toggleClass('active');
                        }else{
                            $(this).closest('.checkbox-list').find('.active').toggleClass('active');
                            $(this).toggleClass('active');
                        }
                        showClearAllBtn(true);
                    });
                    
                    $('.search-filter-dropdown .checkbox-with-label input[type=\"checkbox\"]').change(function(){
                        var filtertitle = $(this).closest('.search-filter-dropdown').attr('data-filter-title'),
                            countSpan = $('.search-filter[data-filter-title=\"'+filtertitle+'\"] > .filter-count-text > .count'),
                            count = Number(countSpan.text());
                        
                        if($(this).is(':checked')){
                            count = count+1;
                            countSpan.text(count);
                        }else{
                            count = count-1;
                            countSpan.text(count);
                        }
                        
                        if(count>0){
                            countSpan.closest('.filter-count-text').css('visibility', 'visible');
                        }else{
                            countSpan.closest('.filter-count-text').css('visibility', 'hidden');
                        }
                        
                        showClearAllBtn(true);
                    });
                    
                    $('.clear-all').click(function(){
                        $(this).closest(".filters-chk-list").find(':checked').each(function(){
                            $(this).removeAttr('checked');
                            $(this).trigger('change');
                        });
                    });
                    
                    $('a.link-btn-blue[title=\"clear all filters\"]').click(function(){
                        //uncheck all chekboxes
                        $(".search-filters-nav").find(':checked').each(function(){
                            $(this).removeAttr('checked');
                            $(this).trigger('change');
                        });
                        
                        //close category filter
                        if($('.category-filter-close').is(':visible')){
                            $('.category-filter-close').trigger('click');
                        }
                        
                        //unselect rating filter
                        $('.all-filter-list[title=\"ratings-list\"] .checkbox-list >li.active , .search-filter-dropdown[data-filter-title=\"rating-filter\"] .checkbox-list >li.active ').toggleClass('active');
                        
                        showClearAllBtn(false);
                        
                    });
                    
                    function showClearAllBtn(show){
                        if(show){
                            $('.search-header > .clear-all-filters').show();
                        }else{
                            $('.search-header > .clear-all-filters').hide();
                        }
                        $(".nv4-dash-drop").removeClass("active");
                        $(".nv4-quick-drop").removeClass("active");
                        $('.item-container').removeClass("fadeIn");
                        $('.quickorder-container').removeClass("fadeIn");
                        $('.search-result').removeClass("fadeIn");
                
                    $("a.quickorder").click(function(){
                        if($('.quickorder-container').hasClass("fadeIn")){
                            $(".nv4-quick-drop").removeClass("active");
                            $('.quickorder-container').removeClass("fadeIn");    
                        } else {
                            $(".nv4-quick-drop").addClass("active");
                            $('.quickorder-container').addClass("fadeIn");
                        }
                        $(".nv4-browse-drop").removeClass("active");
                        $(".nv4-dash-drop").removeClass("active");
                        $('.item-container').removeClass("fadeIn");
                        $('.browse-container').removeClass("fadeIn");
                        $('.search-result').removeClass("fadeIn");
                    
                    $('a.btn-gray-large[title=\"done\"]').click(function(){
                         $('.primary-search-filter > li.active .search-filter').trigger('click',['triggered']);
                    });
                    
                    $('.items-per-page-container > a').click(function(){
                        $('.items-per-page-container >ul').toggle();
                    });
                    
                    $('.items-per-page-container > ul >li span').click(function(){
                        $('.items-per-page-text').text($(this).text());
                        $('.items-per-page-container > ul >li span.active').toggleClass('active');
                        $(this).toggleClass('active');
                        $('.items-per-page-container >ul').toggle();
                    });
                    
                });
                    $("a.dashboard").click(function(){
                        if($('.item-container').hasClass("fadeIn")){
                            $(".nv4-dash-drop").removeClass("active");
                            $('.item-container').removeClass("fadeIn");    
                        } else {
                            $(".nv4-dash-drop").addClass("active");
                            $('.item-container').addClass("fadeIn");
                        }
                        $(".nv4-browse-drop").removeClass("active");
                        $(".nv4-quick-drop").removeClass("active");
                        $('.quickorder-container').removeClass("fadeIn");
                        $('.browse-container').removeClass("fadeIn");
                        $('.search-result').removeClass("fadeIn");
                    });
                    $(".search-in-sticky").focus(function(){
                       if($('.search-result').hasClass("fadeIn")){
                            $('.search-result').removeClass("fadeIn");    
                        } else {
                            $('.search-result').addClass("fadeIn");
                        }
                        $('.quickorder-container').removeClass("fadeIn");
                        $('.browse-container').removeClass("fadeIn");
                        $('.item-container').removeClass("fadeIn");
                    });
                }
				
				//Sticky Header
				$(window).scroll(function(){
                    var stickyHeaderApp = 0;
                    if(selCat === "dash"){
                       stickyHeaderApp = $(".shopping-items-container").offset().top - 200;
                    }else if(selCat === "quick"){
                        stickyHeaderApp = $(".shopping-items-container").offset().top - 200;
                    }else if(selCat === "browse"){
                        stickyHeaderApp = $(".shopping-items-container").offset().top - 200;
                    }else if(selCat === "search"){
                        stickyHeaderApp = $(".shopping-items-container").offset().top - 200;
                    } else {
                        stickyHeaderApp = 220;
                    }
                    
                    if ( $.browser.msie && $.browser.version === "8.0") {
                        if ($(window).scrollTop() > stickyHeaderApp){
                            $(".cd-sticky-nav").slideDown("slow",function(){
                                $(".cd-sticky-nav").show();
                            });
                            $("#dropholder").removeClass("sendDown");
                        } else if($(window).scrollTop() <= stickyHeaderApp){
                                $("#dropholder").addClass("sendDown");
                                $(".cd-sticky-nav").slideUp("slow",function(){
                                    $(".cd-sticky-nav").hide();
                                });
                                $('.item-container').removeClass("fadeIn");
                                $('.quickorder-container').removeClass("fadeIn");
                                $('.browse-container').removeClass("fadeIn");
                                $('.search-result').removeClass("fadeIn");
                                $(".nv4-browse-drop").removeClass("active");
                                $(".nv4-quick-drop").removeClass("active");
                                $(".nv4-dash-drop").removeClass("active");
                        }
                    } else {
                        if ($(window).scrollTop() > stickyHeaderApp){
                            $(".cd-sticky-nav").addClass("fadeIn");
                            $("#dropholder").removeClass("sendDown");
                        } else if($(window).scrollTop() <= stickyHeaderApp){
                                $("#dropholder").addClass("sendDown");
                                $(".cd-sticky-nav").removeClass("fadeIn");
                                $('.item-container').removeClass("fadeIn");
                                $('.quickorder-container').removeClass("fadeIn");
                                $('.browse-container').removeClass("fadeIn");
                                $('.search-result').removeClass("fadeIn");
                                $(".nv4-browse-drop").removeClass("active");
                                $(".nv4-quick-drop").removeClass("active");
                                $(".nv4-dash-drop").removeClass("active");
                        }
                    }

                    
					if ($(window).scrollTop() >= ($('.hdr-1').height() + $('.hdr-2').height())) {
						//$('.hdr-3,.hdr-4').addClass('sticky-hdr');
						//$('.hdr-4').css('top','61px');
						//$('.hdr-3 .nv3-drop-content').addClass('nv3-drop-content-sticky');
						//$('.hdr-3 .nv3-browse-drop').css("width","110px");
						//$('.hdr-3 .search-container').addClass('search-container-sticky');
						//$('.hdr-3 .logo-staples').show();
						//$('.hdr-3 .browse-text').html("BROWSE");
						//$('.hdr-3 .search-in').addClass('search-in-sticky');
						//$('.hdr-3 .search').addClass('search-sticky');
						//$('.hdr-3 .search-container').addClass('search-container-sticky');
						//$('.hdr-3 .search-btn').addClass('search-btn-sticky');
						//$('.cart-amount-container').addClass('cart-amount-container-sticky');
						//$('.hdr-1 .log-btn').addClass('log-btn-sticky');
						//$('.icon-info-browse').css("margin-left","18px");
						//$(".nv3-dash-drop").removeClass("active");
						//$(".nv3-quick-drop").removeClass("active");
						//$(".nv3-browse-drop").removeClass("active");
						
						
						if(($(window).scrollTop() >($('.hdr-1').height() + $('.hdr-2').height())) && ($(window).scrollTop() < $('header').height())) {
								
								//$('.temp-drop').css('height','0px').hide();
								
								if(selCat === "dash"){
									$('.item-detail-container').show();
								}else if(selCat === "quick"){
									$('.quickorder-detail-container').show();
								}else if(selCat === "browse"){
									$('.browse-categories-container').show();
								}else if(selCat === "search"){
									$('.search-result-section').show(); 
								}
							
								//$('.item-detail-container').removeClass("hdr3-drop-sticky");
								//$('.quickorder-detail-container').removeClass("hdr3-drop-sticky");
								//$('.browse-categories-container').removeClass("hdr3-drop-sticky");
								//$('.search-result-section').removeClass("hdr3-drop-sticky");
							
						}
						else if(($(window).scrollTop() >= $('header').height())) {
							
//								console.log("Reached");
								//$('.temp-drop').show();
								//$('.temp-drop').css('height',($('header').height()-($('.hdr-1').height() + $('.hdr-2').height()))+'px');
								//$('.item-detail-container').addClass("hdr3-drop-sticky").hide();
								//$('.quickorder-detail-container').addClass("hdr3-drop-sticky").hide();
								//$('.browse-categories-container').addClass("hdr3-drop-sticky").hide();
								//$('.search-result-section').addClass("hdr3-drop-sticky").hide();
						}
	

					}
					else {

						$('.temp-drop').css('height','0px').hide();
						if(selCat === "dash"){
							$(".nv3-dash-drop").addClass("active");
							$('.item-detail-container').show();
						}else if(selCat === "quick"){
							$(".nv3-quick-drop").addClass("active");
							$('.quickorder-detail-container').show();
						}else if(selCat === "browse"){
							$(".nv3-browse-drop").addClass("active");
							$('.browse-categories-container').show();
						}else if(selCat === "search"){
							$('.search-result-section').show(); 
						}
						//$('.hdr-3,.hdr-4').removeClass('sticky-hdr');
						//$('.hdr-3 .nv3-drop-content').removeClass('nv3-drop-content-sticky');
						//$('.hdr-3 .nv3-browse-drop').css("width","198px");
						//$('.hdr-3 .logo-staples').hide();
						//$('.hdr-3 .search-container').removeClass('search-container-sticky');
						//$('.hdr-3 .browse-text').html("BROWSE CATEGORIES");
						//$('.hdr-3 .search').removeClass('search-sticky');
						//$('.hdr-3 .search-in').removeClass('search-in-sticky');
						//$('.hdr-3 .search-btn').removeClass('search-btn-sticky');
						//$('.cart-amount-container').removeClass('cart-amount-container-sticky');
						//$('.item-detail-container').removeClass("hdr3-drop-sticky");
						//$('.quickorder-detail-container').removeClass("hdr3-drop-sticky");
						//$('.browse-categories-container').removeClass("hdr3-drop-sticky");
						//$('.search-result-section').removeClass("hdr3-drop-sticky");
						//$('.hdr-1 .log-btn').removeClass('log-btn-sticky');
						//$('.icon-info-browse').css("margin-left","55px");
						

					}
				});
                
            }
            //return functions and variables that you want accessible outside
            return {
                init : init,
                toggleElement : toggleElement,
                toggleHdr3 : toggleHdr3,
                selectElement : selectElement,
                byCatListToggle: byCatListToggle,
                indListToggle : indListToggle,
                toggleChalkText : toggleChalkText,
                recursion : recursion
            }
        })();

        return STAD;

    }(window.STAD || {}));

    //update the Global STAPLES name space with new functionality and variables
    window.STAD = STAD;

    // Run as soon as this file loads
    STAD.Main.init();

}(window, document, jQuery));




/* AutoComplete Suggestion for Search */
$(function(){
  

        //Show popup
     $(".lb-a-1").colorbox({
        inline:true, 
        opacity: 0.4,
        closeButton: false,
        href:".lb-item-1"
    });
        $(".lb-a-cart").colorbox({
        inline:true, 
        opacity: 0.4,
        closeButton: false,
        href:".lb-item-cart",
        onComplete: function(){ if($('.cart-slider').is(':visible')){ $('.cart-slider').tinycarousel({infinite: true, display:4}); } }
    });
    $(".lb-a-list").colorbox({
        inline:true, 
        opacity: 0.4,
        closeButton: false,
        href:".lb-item-list"
    });
    
    $(".pd-check").colorbox({
        inline:true, 
        opacity: 0.4,
        closeButton: false,
        href:".my-printers-modal"
    });
       $(".write-rev").colorbox({
        inline:true, 
        opacity: 0.4,
        closeButton: false,
        href:".write-review-cbox"
    });
   
});

// approval & Decline Flow // for interactive purpose only

	$('.approvals-done-first').click(function(){
        $('.approvals-done, .add-cancel').show();
        $('.approvals-done-first, .add-cancel-first').hide();
        $('.status-approved').show();
     }); 

    $('.add-cancel-first').click(function(){
        $('.approvals-done, .add-cancel').show();
        $('.approvals-done-first, .add-cancel-first').hide();
        $('.dash-col-left .dash-contents').hide();
        $('.action-label').hide();
        $('.dash-outer').show();
     }); 

	   $('.dash-btn').click(function(){
        $('.approvals-done, .add-cancel').show();
        $('.approvals-done-first, .add-cancel-first').show();
        $('.dash-col-left .dash-contents').show();
        $('.action-label').show();
        $('.dash-outer').hide();
     }); 


    $('.dash-btn-orange').click(function(){
        $('.dash-outer').hide();
        $('.dash-contents').show();
		$('#dc-cnt-1').hide();
        $('.action-label').show();
        $('.status-declined').show();
		
		setTimeout(function() {
        $("#dc-top-1").fadeOut();
    }, 1000);
     }); 

	//Cart font change for interactive purpose only
	$('.cart-amount-container').click(function(){
		
		$('.cart-amount').toggleClass('cart-amount-max');
		console.log($('.cart-amount').text().length);
		if($('.cart-amount').text().length <=8)
			$('.cart-amount').text("$8,888,888.88");
		else
			$('.cart-amount').text("$132.30");
	});

// dashboard - links to re-order // for interactive purpose only

//     $('.dash-col-right.temp2 a').click(function(){
//        $('.dash-col-right.temp2').hide();
//        $('.dash-col-right.temp1').show();  
//        
//     }); 

    $('.dash-col-right.temp1 a').click(function(){
        $('.dash-col-right.temp1').hide();
        $('.dash-col-right.temp3').show();   
         //slider code change here....
		if($('.dash-col-right.temp3').find("#slider6").is(":visible")){
			$("#slider6").tinycarousel({
				axis   : "y",
				infinite: true,
                display:3
			}).attr('id','slider6-active');    
		}
     }); 
    $('.dash-col-right.temp3 .view-all-cont').click(function(){
        $('.dash-col-right.temp3, .dash-col-right.temp1').hide();
        $('.dash-col-right.temp2').show();         
     });


// special Offers Toggle // for interactive purpose only

    $('.spl-offr-tempjs').click(function(){
        $('.recently-purchase-container').hide();
        $('.special-offers-container').show();
     });

    $('.rec-pur-tempjs').click(function(){
        $('.special-offers-container').hide();
         $('.recently-purchase-container').show();
     });

// Mini Cart Scripts Starts here

//    $(".mini-cart-drop").hide();
    $(".cart-amount-container>a").mouseover(function(){
//        $(".mc-2, .mc-3").hide();
          $(".mc-1").show();
          $(".cart-amount-container").mouseleave(function(){
            $(".mini-cart-drop").hide();
          });
    });

    $(".st-serv-help").click(function(){
        $(".enh-serv-pop").hide();  
        $(".st-serv-pop").toggle();  
    });

    $(".enh-serv-help").click(function(){
        $(".st-serv-pop").hide();  
        $(".enh-serv-pop").toggle();  
    });

    $(".mini-cart-close").click(function(){
            $(".mini-cart-drop").hide();
    });
   $('.mini-cart-services >.radio-btn > input[type=\"radio\"]').click(function(){
                $('.mini-cart-services >.radio-btn > input[type=\"radio\"]').removeAttr('checked');
                $(this).attr('checked', 'checked');
    });

//Browse Page Scripts Starts here
        $(".browse-level2-items-cont").hide();

        $(".bc-auto-cm-show").click(function(){ 
            var par = $(this).parent();
            $(".browse-level2-items-cont").hide();
            $(".browse-level2-row.hidden").hide();
            $(".browse-level1-item").removeClass("active");
            par.addClass("active");
            $(".bc-l2-auto-cm-cont").show();
            $(".load-more").show();
        });

        $(".bc-battey-show").click(function(){ 
            var par = $(this).parent();
            $(".browse-level2-items-cont").hide();
            $(".browse-level2-row.hidden").hide();
            $(".browse-level1-item").removeClass("active");
            par.addClass("active");
            $(".bc-l2-batteries-cont").show();
            $(".load-more").show();
        });

        $(".bc-cleaners-show").click(function(){ 
            var par = $(this).parent();
            $(".browse-level2-items-cont").hide();
            $(".browse-level2-row.hidden").hide();
            $(".browse-level1-item").removeClass("active");
            par.addClass("active");
            $(".bc-l2-cleaners-cont").show();
            $(".load-more").show();
        });

        $(".bc-hide, .browse-cancel").click(function(){ 
            $(".browse-level2-items-cont").hide();
            $(".browse-level1-item").removeClass("active");
        });

        $(".load-more").click(function(){ 
            var par = $(this).parent();
            par.siblings(".browse-level2-row.hidden").show();
            $(this).hide();
        });

$(function(){
    if($('.browse-slider').is(':visible')){ $('.browse-slider').tinycarousel({infinite: true, display:4}); } });


// Deals carousel for Consider These items	 
	$(function (){ 
		if($('.deals-slider').is(':visible')){
			$('.deals-slider').tinycarousel({infinite: true, display:4}); } 
	});

$(function(){
    //slider code change here....
    if($('.dash-col-right.temp2').find("#list-slider").is(":visible")){
        $('.lists-slider').tinycarousel({
            axis   : "y",
            infinite: true, 
            display:4
        }).attr('id','list-slider-active');    
    }
});

// Interactions for Did you Mean
    $(".did-link").click(function(){ 
            $(".search-header").hide();
            $(".search-header.sh-c-2").show();
    });

// Mini Cart Interaction Scripts 

$(".mc-temp-btn-1").click(function(){ 
    $(".mc-2").show();  
    $(".mc-1").hide();      
});

$(".mc-temp-btn-2").click(function(){ 
    $(".mc-2").hide();
    $(".mc-3").show();    
});

// Search-ListView Interaction Scripts 
$(".search-pagenate .page").click(function(){ 
    $(".s-listview-container").hide();
    $(".slv-top-banner").hide();
    $(".slv-right").show();    
});

//Quick view functionality
$(function(){
    $('.search-prod-img >div> a.quick ,.search-prod-img a.quick').click(function(){
        $('.quick-view-container').hide();
        $(this).closest('.search-lview-product').find('.quick-view-container').show(function(){
            if($('.quick-view-slider').is(':visible')){
			 $('.quick-view-slider').tinycarousel({infinite: true, display:3}); 
            } 
        });
    });
    
    $('.quick-view-close').click(function(){
        $(this).closest('.quick-view-container').hide();
    });
});


//Compare Products Interaction Scripts
$(".compare-page .page").click(function(){ 
    $(".compare-table .restr-guest").hide();
});

//product detail-slider
$(function(){
     if($('.product-list-container .quick-view-slider').is(':visible')){
			 $('.product-list-container .quick-view-slider').tinycarousel({infinite: true, display:5}); 
            } 
        });

//customer-viewed-slider and show more btn
$(function(){
    if($('.customer-viewed-slider').is(':visible')){
        $('.customer-viewed-slider').tinycarousel({axis: "y",infinite: true}); 
    }
    
    $('.pd-show-more').click(function(){
        $(this).toggleClass('active');
        $('.product-details').toggleClass('active');
        $('.prod-fade').toggle();
        if($(this).hasClass('active')){
            $(this).attr('value','Show Less');
			$(this).attr('title','Show Less');
            $('.customer-viewed-slider').find(".viewport").css("height",$('.customer-viewed-slider').find(".viewport").outerHeight()+$(".customer-viewed-slider").find("li").outerHeight()+"px");
        }else{
            $(this).attr('value','Show More');
			$(this).attr('title','Show More');
            $('.customer-viewed-slider').find(".viewport").css("height",$('.customer-viewed-slider').find(".viewport").outerHeight()-$(".customer-viewed-slider").find("li").outerHeight()+"px");
        }
    });
    
    $('.show-reviews').click(function(){
        $(this).toggleClass('active');
        $('.ut-review-cont').toggle();        
        $('.helpful-review-cont').toggleClass('lc');
        if($(this).hasClass('active')){
            $(this).attr('value','Hide Reviews');
			$(this).attr('title','Hide Reviews');
        }else{
            $(this).attr('value','Show Reviews');
			$(this).attr('title','Show Reviews');
        }
    });
});

$(".product-list-container .quick-view-slider li").click(function(){ 
    $(".product-list-container .quick-view-slider").hide();   
    $(".pdp-no-slider").show();    
});

 //Product Detailes Page Select dropdown
$('.product-drop-link >a').click(function(){
    $(this).closest('li.product-drop-link').toggleClass('active').find('.sort-product-drop').toggle();
});

//select model
$('.sort-product-drop a.prod-model-name').click(function(){
    $(this).closest('.sort-product-drop').toggle()
    .siblings('a.disp-block').children('span').text($(this).text())
    .closest('li.product-drop-link').toggleClass('active');
});

// PDP Interaction Scripts 
$(".customer-viewed-container .so_item_imgs").click(function(){ 
    $(".customer-viewed-container").hide();   
    $(".product-list-container").addClass("no-marketing");    
});

$(".quick-view-row2 .quick-view-img").click(function(){ 
    $(".alternate-product").show();   
    $(".product-list-container").addClass("alt-product");    
});

$(".protect-plan-cont .label-txt").click(function(){ 
    $(".protect-plan-cont").hide();
    $(".pd-printer-cont").show();    
});

$(".pd-checkbox a").click(function(){ 
    $(".pd-printer-cont").hide();
    $(".pd-mp-no").show();    
});

$(".pd-mp-no .pd-sel-diff-printer").click(function(){ 
    $(".pd-mp-no").hide();
    $(".pd-mp-yes").show();    
});

$(".pd-mp-yes .pd-sel-diff-printer").click(function(){ 
    $(".pd-mp-yes").hide();  
    $(".product-consider").show();
});

$(".cr-js1 .rating-overview img").click(function(){ 
    $(".cr-js1 .rating-overview").hide();
    $(".cr-js1 .no-review").show();    
});

$(".cr-js1 .page").click(function(){ 
    $(".cr-js1").hide();
    $(".cr-js2").show();    
});

// Product Brand details dropdown
$(".product-drop-link .brand-text").click(function(){ 
    $(this).closest(".product-drop-link").find(".search-filter-dropdown").toggle();    
});



$(".conside-these-container").click(function(){
	
	$(this).slideUp(500);
	$(".recent-purchase-product").addClass("recent-purchase-product-wide");

});

