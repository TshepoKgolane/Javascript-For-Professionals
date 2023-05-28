const elementi = document.querySelector("#myTitle");
const options = {};



let callBackk = (entries, observer) => {
  entries.forEach((entry) => {
    alert(entry.target);
    console.log(entry);
  });
};
const observer = new IntersectionObserver(callBackk, options);
observer.observe(elementi);

/**
 * For more info on Intersection observers, See below sir:
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * Now get back to studying...
 * Its really great trust Me sir
*/