angular.module("componentApp").component("profileComponent", {
    templateUrl: "./js/components/profileComponent/profileComponent.html",
    bindings: {
        user: "=",
        changeUsername: "&",
        changeUserEmail: "&"
    },
    controller: function() {
    },
})