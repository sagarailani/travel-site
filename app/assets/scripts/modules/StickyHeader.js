import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{

  constructor(){
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWayPoint();
    this.pageSections = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWayPoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWayPoint(){
    var current = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction){
        if(direction == "down"){
          current.siteHeader.addClass("site-header--dark");
        }
        else{
          current.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWayPoints(){
    var that = this;
    this.pageSections.each(function(){
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction == "down"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction == "up"){
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });

    });
  }
}

export default StickyHeader;