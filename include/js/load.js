function dynamicallyLoadScript(url, callback) {
  var script = document.createElement("script"); //Make a script DOM node
  script.src = url; //Set it's src to the provided URL
  script.type = "text/javascript";
  script.onreadystatechange = callback;
  script.onload = callback;
  document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

/*
dynamicallyLoadScript('/notebooks/include/js/d3.v4.min.js', function() {
  setTimeout(function() {
      dynamicallyLoadScript('/notebooks/include/js/bg.js');
    },
    1234
  );
});
*/
