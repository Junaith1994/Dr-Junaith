import React from 'react';

const Blogs = () => {
    return (
        <div className='justify-content-center p-4 about-bg text-light'>
            <h1 className='text-center my-3'>Blogs</h1>
            <div className=''>
                <h3>1. Difference between Authentication and Authorization</h3>
                <p><b>Authentication</b> is the process of determining whether a user is what it claims to be. Through matching the provided credentials with stored credentials in the system. On the otherhand, <strong>Authorization</strong> is checking what users are allowed to access in an application after successful authentication and where it can not access. <b>Authentication</b> has to be done before <b>Authorization</b>. After successful authentication then the <b>Authorization</b> process starts. <b>Authentication</b> usually transmits info through an ID token. <b>Authorization</b> transmits info usually through an access token. In <b>Authentication</b>, users have to face challenges to validate their provided credentials i.e password, face recognition etc. <b>Authorization</b> is to verify whether the user is allowed to access through policies or not.</p>
                <h3>2. Why are you using Firebase? What other options do you have, to implement authentication?</h3>
                <div>
                    <p>Because using firebase is easy to integrate with a dynamic app. I can easily add it to my project and also I can initiate any project with firebase easily. Using firebase eliminate the need of writing backend code from scratch which is saving time and extra development cost. Although firebase provides various login authentication i.e Google, Facebook, Twitter etc providers which we can easily include in our app. Firebase also provides hosting services where we can host our app for free with some limitations. <br /> <b>Other options that I have to implement authentication:</b> <br />
                        I can also use these authentication system for my app
                    </p>
                    <ul className='fw-bold'>
                        <li>Okta</li>
                        <li>AuthO</li>
                        <li>Amazon AWS</li>
                        <li>Microsoft Azure Active Directory (Azure AD)</li>
                        <li>Authentic8</li>
                        <li>OneLogin</li>
                    </ul>
                    <p>There are many more.</p>
                </div>
                <h3>3. What other services does firebase provide other than Authentication?</h3>
                <p>Firebase other services are : <b>Realtime Database</b> - which allows you to store and sync data in real-time. <br /> <b>Firestore</b> - A NoSQL cloud database which provides real-time synchronization and automatic scaling based on demand. <br /> <b>Cloud Firestore</b> - A serverless, NoSQl document database. It offers offline data access, real-time synchronization and automatic scaling. <br /> <b>Firebase Hosting</b> - A free hosting service where you can host and deploy your web apps quickly and securely. It provides the features like SSL support, CDN delivery and easy integration with other firebase services. <br /> <b>Cloud Messaging (FCM)</b> - A cross-platform messaging solutions that allows you to send push notifications to your users on android, ios and web applications. <br /> <b>Crashlytics</b> - It provides real-time crash report of your app and determine the issue for you specificly. It also improve overall app stabilty. <br /> <b>Performance Monitoring</b> - It helps you monitor your app's performance and identify for you the spot of performance issue. <br /> There are some more services of firebase other than authentication like - <b>Cloud Storage for firebase</b>, <b>Cloud functions</b>, <b>Test Lab</b>.</p>
            </div>
        </div>
    );
};

export default Blogs;