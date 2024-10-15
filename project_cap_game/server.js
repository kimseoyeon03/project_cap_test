const express = require('express');
const path = require('path');
const app = express();

// public 폴더를 정적 파일 제공 경로로 설정
app.use(express.static(path.join(__dirname, 'public')));


app.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
