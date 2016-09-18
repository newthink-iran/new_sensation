angular.module('appLocalStorage', [])

.factory('FeedStorage', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds');
    }
  }
})


.factory('FeedStorage_mofid', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_mofid'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_mofid'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_mofid');
    }
  }
})