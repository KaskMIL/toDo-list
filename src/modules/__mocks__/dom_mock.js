/* eslint-disable */
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
  <title>Document</title>
</head>
<body>
  <div class="app-container">
    <div class="title">
      <h1>To Do List</h1>
      <i class="bi bi-arrow-repeat pointer"></i>
    </div>
    <div class="list">
      <div class="add-item">
        <ul>
          <li>
            <form class="form" id="formF">
              <input id="task-input" type="text" placeholder="Add to your list...">
              <i id="add-btn" class="bi bi-arrow-90deg-down pointer"></i>
            </form>
          </li>
        </ul>
      </div>
      <div class="list-items">
        <ul id="list-container">
        </ul>
      </div>
      <div class="clear-btn">
        <button id="clear-btn">Clear all completed</button>
      </div>
    </div>
  </div>
</body>
</html>
`);

const { document } = dom.window;

module.exports = document;