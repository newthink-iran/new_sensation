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

.factory('FeedStorage_akhbar', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_akhbar'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_akhbar'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_akhbar');
    }
  }
})

.factory('FeedStorage_khadamat', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_khadamat'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_khadamat'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_khadamat');
    }
  }
})

.factory('FeedStorage_amozesh', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_amozesh'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_amozesh'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_amozesh');
    }
  }
})

.factory('FeedStorage_fom', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_fom'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_fom'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_fom');
    }
  }
})

.factory('FeedStorage_kafsaz', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_kafsaz'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_kafsaz'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_kafsaz');
    }
  }
})

.factory('FeedStorage_products1', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_products1'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_products1'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_products1');
    }
  }
})

.factory('FeedStorage_darbare', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_darbare'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_darbare'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_darbare');
    }
  }
})

.factory('FeedStorage_gallery', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_gallery'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_gallery'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_gallery');
    }
  }
})

.factory('FeedStorage_certs', function() {
  return {
    get: function() {
      var feeds = window.localStorage['feeds_certs'];
      if(feeds) {
        return angular.fromJson(feeds);
      }
      return {};
    },
    save: function(feeds) {
      window.localStorage['feeds_certs'] = angular.toJson(feeds);
    },
    clear: function() {
      window.localStorage.removeItem('feeds_certs');
    }
  }
})