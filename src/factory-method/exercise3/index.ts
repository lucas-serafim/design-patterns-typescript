
interface NotificationData {
    message: string;

    email?: string;
    phoneNumber?: string;
    deviceToken?: string;
}

interface NotificationSender {
    validate(data: NotificationData): boolean;
    send(data: NotificationData): string;
}

const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

class EmailSender implements NotificationSender {
    send(data: NotificationData): string {
        return `Email sent to <${data.email}>: <${data.message}>`;
    }

    validate(data: NotificationData): boolean {
        return data.email && data.email?.match(emailPattern) ? true : false;
    }
}

class SmsSender implements NotificationSender {
    send(data: NotificationData): string {
        return `SMS sent to <${data.phoneNumber}>: <${data.message}>`;
    }

    validate(data: NotificationData): boolean {
        return data.phoneNumber && data.phoneNumber.length === 11 ? true : false;
    }
}

class PushNotificationSender implements NotificationSender {
    send(data: NotificationData): string {
        return `Push notification sent to <${data.deviceToken}>: <${data.message}>`;
    }

    validate(data: NotificationData): boolean {
        return data.deviceToken ? true : false;
    }
}

class NotificationFactory {
    static createSender(type: string): NotificationSender {
        switch (type) {
            case "email":
                return new EmailSender();

            case "sms":
                return new SmsSender();

            case "push":
                return new PushNotificationSender();

            default:
                throw new Error(`This "${type}" notification sender does not exist. Try one of them: email, sms or push.`);
        }
    }
}

const emailSender = NotificationFactory.createSender("email");
const emailData = { message: "Welcome!", email: "user@example.com" };
if (emailSender.validate(emailData)) {
    console.log(emailSender.send(emailData));
}

const smsSender = NotificationFactory.createSender("sms");
const smsData = { message: "Your code is 1234", phoneNumber: "11987654321" };
if (smsSender.validate(smsData)) {
    console.log(smsSender.send(smsData));
}

const pushSender = NotificationFactory.createSender("push");
const pushData = { message: "You have a new message", deviceToken: "token12345" };
if (pushSender.validate(pushData)) {
    console.log(pushSender.send(pushData));
}

try {
    NotificationFactory.createSender("fax");
} catch (error) {
    console.error(error);
}
