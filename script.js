function notifyMe() {
    if (!window.Notification) {
        alert('Browser does not support notifications.');
    } else {
        if (Notification.permission === 'granted') {
            new Notification('Hi there!', {
                body: 'How are you doing?',
                icon: 'http://bit.ly/2s4r0qw'
            });
        } else {
            Notification.requestPermission().then(userPermission => {
                if (userPermission === 'granted') {
                    new Notification('Hi there!', {
                        body: 'You have a new message!',
                        icon: 'http://bit.ly/2s4r0qw'
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