(function(){var e=function(){this.queries={},this.currentQuery=null};e.prototype.register=function(e,i,r){var s=this;this.queries[e]||(this.queries[e]={query:window.matchMedia(e)},this.queries[e].query.addListener(function(e){s.process(e,i,r)}),s.process(this.queries[e].query,i,r))},e.prototype.process=function(e,i,r){e.matches?(this.currentQuery=e.media,i.apply(e)):this.currentQuery===e.media&&r.apply(e)},window.ResponsiveResize=new e})();