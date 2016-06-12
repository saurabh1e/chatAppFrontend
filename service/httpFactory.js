angular.module('chatApp').factory('httpFactory',function() {

    var base_url = 'http://127.0.0.1:5000/test/v1/';

    function getRequest(url, id, params) {
        url = url + id + '/';
        return $http.get(base_url+url, params);
    }
    function getListRequest(url, params) {
        return $http.get(base_url+url, {params: params});
    }
    function postRequest(url, data) {
        return $http.post(base_url+url, data);
    }
    function putRequest(url, id, data) {
        url = url + id + '/';
        return $http.put(base_url+url, data);
    }
    function deleteRequest(url, id) {
        url = url + id + '/';
        return $http.delete(base_url+url);
    }
    function getBaseUrl() {
        return base_url;
    }

    var http = {};
    http.get = getRequest;
    http.getList = getListRequest;
    http.post = postRequest;
    http.put = putRequest;
    http.delete = deleteRequest;
    http.getBaseUrl = getBaseUrl;
    // Public API here
    return http;
});