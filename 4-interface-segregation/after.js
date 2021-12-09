// after.js
// Interface Segregation Principle
function fetch({ method, url, body }) {
  return new Promise((resolve) => {
    resolve({ status: 200, message: "ok", body });
  });
}

function postForm(payload = {}) {
  return fetch({
    method: "POST",
    url: "https://api.site.com/forms",
    body: JSON.stringify(payload),
  });
}

// Each function is depending only on their form fields
function postContactUs({ email, comment, subject, type } = {}) {
  postForm({ email, comment, subject, type });
}
// I've segregated my interface for this form submit function
function postQuestion({ question, email, type } = {}) {
  postForm({ question, email, type });
}
function postSurvey({ type, rate, howDidYouFindUs } = {}) {
  postForm({ type, rate, howDidYouFindUs });
}
