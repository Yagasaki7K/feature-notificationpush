function notifyMe() {
    if (!window.Notification) {
        alert('Browser does not support notifications.');
    } else {
        if (Notification.permission === 'granted') {
            new Notification('Hi there!', {
                body: 'How are you doing?',
                icon: 'https://cdn-icons-png.flaticon.com/512/4980/4980801.png'
            });
        } else {
            Notification.requestPermission().then(userPermission => {
                if (userPermission === 'granted') {
                    new Notification('Hi there!', {
                        body: 'You have a new message!',
                        icon: 'https://cdn-icons-png.flaticon.com/512/4980/4980801.png'
                    });
                } else {
                    alert('User denied permission.');
                }
            }).catch(function (err) {
                console.error(err);
            });
        }
    }
}