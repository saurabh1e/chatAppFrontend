angular.module('chatApp').factory('authFactory',function() {

    return {
        login: function (email, password) {
            var data = {
                email: email,
                password: password
            };
            return httpFactory.post('login/', data);
        },
        logout: function () {
            return httpFactory.get('logout','');
        },
        signUp: function (email, password) {
            var data = {
                email: email,
                password: password,
                'user_profile':{}
            };
            return httpFactory.post('users/', data);
        }
    }
});
