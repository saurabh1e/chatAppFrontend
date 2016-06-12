angular.module('user', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('user')
    .config(function($stateProvider) {

    /* Add New States Above */
    })
    .factory('userFactory', function(){
        var user_url = 'user/';
        var users_url = 'users/';
        var user_profile_url = 'user_profile/';

        var user = {};

        return {
            init: function () {
                user.$user =  {
                    user_type: null,
                    active: false
                }
            },
            getUser: function (id) {
                return httpFactory.get(user_url, {}, id);
            },
            getCurrentUser: function() {
                return user['$user']
            },
            setCurrentUser: function(data) {
                user['$user'] = data;
                this.$save();
                return true;
            },
            getCurrentUserType: function () {
                return user['$user']['user_type'];
            },
            getUserProfile: function (id) {
                return httpFactory.get(user_profile_url, id);
            },
            updateUserProfile: function (data, ID) {
                return httpFactory.putRequest(user_url, ID, data);
            },
            authorize:  function (accessLevel) {
                return this.getCurrentUser()['user_type'] === accessLevel;
            },
            getOrders: function () {
                return httpFactory.get('orders', '');
            },
            getOrder: function (ID) {
                return httpFactory.get('order/', ID);
            },
            isLoggedIn:function () {
                return this.getCurrentUser()['active'];
            },
            $restore: function(data){
                user['$user'] = data;
                $rootScope['authentication-token'] = user['$user']['authentication-token'];

            },
            $save: function () {
                return storeService.set('user', JSON.stringify(this.getCurrentUser()));
            }
        }
    })
    .controller('userController', function() {

    });

