const fetch = require('node-fetch');

const url = 'http://localhost:18080/user/login';

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: 'leeseokwoon',
        password: 'password123'
    })
})
.then(async res => {
    console.log('📌 응답 상태 코드:', res.status);
    console.log('📌 응답 상태 메시지:', res.statusText);

    console.log('\n📋 응답 헤더 목록:');
    res.headers.forEach((value, name) => {
        console.log(`${name}: ${value}`);
    });

    const body = await res.text();
    console.log('\n📦 응답 본문:\n', body);
})
.catch(err => {
    console.error('요청 실패:', err);
});