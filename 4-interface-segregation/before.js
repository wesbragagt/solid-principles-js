// states that no client should be forced to depend on methods it does not use.

// Let's say we have a few forms in our client site and we are suppose to implement the api calls for which our forms submit to
function fetch({ method, url, body }) {
  return new Promise((resolve) => {
    resolve({ status: 200, message: "ok", body });
  });
}
function postForm({
  email,
  comment,
  question,
  subject,
  howDidYouFindUs,
  rate,
  type,
} = {}) {
  return fetch({ method: "POST", url: "https://api.site.com/forms", body: JSON.stringify({email, comment, question, subject, howDidYouFindUs, rate, type}) });
}
// technically contactUs shouldn't depend on rate, type...
function postContactUs(form) {
  postForm(form);
}
// postQuestion shouldn't depend on rate, type...
function postQuestion(form) {
  postForm(form);
}
// postSurvey shouldn't depend on howDidYouFindUs... 
function postSurvey(form) {
  postForm(form);
}

