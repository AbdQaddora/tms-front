/*!
    * Training management system - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Training management system
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }    
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }


    // change avatar image
    const avatarImage = document.getElementById("user_avatar");
    const avatarInput = document.getElementById("avatar_input");
    if (avatarImage && avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const reader = new FileReader();

            reader.onload = () => {
                const base64 = reader.result;
                avatarImage.src = base64;
            };

            reader.readAsDataURL(avatarInput.files[0]);
        })
    }

    // toggle notifications
    const notifications_bell = document.getElementById("notifications_bell");
    const notifications = document.getElementById("notifications");
    const notifications_count = document.getElementById("notifications_count");
    // mock data at first
    let notifications_list = ["Hello World", "Hello World 2"];

    let closeTimeOutId = null;


    if (notifications_bell && notifications && notifications_count) {

        const updateNotificationsCount = (count) => {
            notifications_count.innerText = count > 99 ? "+99" : count;
        }

        const appendNotification = (notification_text) => {
            updateNotificationsCount(notifications_list.length);
            updateNotificationsCount(notifications_list.length);

            const notificationItem = document.createElement("div");
            notificationItem.classList = "notification_item p-3 pt-2 pb-0";

            const notificationText = document.createElement("p")
            notificationText.classList = "notification_text"
            notificationText.innerText = notification_text;

            notificationItem.appendChild(notificationText);
            notifications.appendChild(notificationItem);
        }

        // show initial data
        notifications_list.map(el => appendNotification(el));

        notifications_bell.addEventListener('click', (e) => {
            notifications.classList.toggle('active');
            if (closeTimeOutId) {
                clearTimeout(closeTimeOutId);
                closeTimeOutId = null;
            }

            closeTimeOutId = setTimeout(() => {
                notifications.classList.remove('active');
                closeTimeOutId = null;
            }, 10000)
        })
    }
});


