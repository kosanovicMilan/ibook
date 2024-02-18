window.addEventListener('load', () => {
    document.getElementById('login').addEventListener('click', (evt) => {
        evt.preventDefault();

        const cookies = document.cookie.split('=');
const token = cookies[cookies.length - 1];

        const data = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        fetch('http://127.0.0.1:9001/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
            
        })
        .then(res => res.json())
        .then(data => {

            //console.log("data:" + JSON.stringify(data));
            if (data.msg) {
                // Prikaži grešku
                alert(data.msg);
            } else {

                
                //alert("admin: " + data.admin);
                
                document.cookie = `token=${data.token};SameSite=Lax`;
                
                if (data.admin) {
                    
                    window.location.href = 'booking.html';
                } else {
                    
                    window.location.href = '/';
                }
            }
        });
    });
});
