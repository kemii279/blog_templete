var len = javascript_file_line_load.length;
var i = 0;

(function appendScript() {
    var script = document.createElement('script');
    script.src = "js/" + javascript_file_line_load[i];
    document.body.appendChild(script);

    if (++i < len) {
        script.onload = appendScript;
    }
})();
