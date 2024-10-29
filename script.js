document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();   //منع ارسال النمودج 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert('رسالتك تم ارسالها بنجاح !$ شكرا');

    this.reset(); // اعادة تعيين النمودج
});