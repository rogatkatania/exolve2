# @mts-exolve/web-voice-sdk

Web SDK (Software Development Kit) - это инструментарий разработки программного обеспечения, который позволяет разработчикам интегрировать функциональность телефонии напрямую в веб-приложения. Exolve WebSDK позволяет создавать приложения, которые могут совершать и принимать звонки в окне браузера.

## Установка

### NPM

```bash
npm install @mts-exolve/web-voice-sdk
```

### Yarn
```bash
yarn install @mts-exolve/web-voice-sdk
```

## Использование

### Создание объекта SipInstance

```js
createSipInstance(props): {
    get SIPInstance(): UA;
    get audioElement(): HTMLAudioElement;
    call(target, onConfirmed?) => RTCSession;
    onIncomingCall(cb) => void;
    register() => Promise<unknown>;
    unregister() => Promise<unknown>;
}
```

Параметры props:

```js
CreateSipInstanceProps: {
    sipLogin: string;
    sipPassword: string;
}
```

**sipLogin** - SIP логин из настроек SIP-аккаунта в приложении [Exolve](https://dev.exolve.ru/).

**sipPassword** - пароль из настроек SIP-аккаунта в приложении [Exolve](https://dev.exolve.ru/).

### Методы

#### getSipInstance

Метод для получения объекта JSSIP инстанса.

```js
const sip = createSipInstance();
sip.SIPInstance
```

#### register

Метод для регистрации, необходим для получения входящих звонков.

```js
const sip = createSipInstance();
sip.register()
```

#### unregister

Метод для отмены регистрации.

```js
const sip = createSipInstance();
sip.unRegister()
```

#### onIncomingCall

Метод принимает функцию, которая вызывается при входящем звонке. Принимает три параметра:

- accept - метод принятия звонка
- decline - метод сброса входящего звонка
- event - объект события в чистом виде от JSSIP

```js
const sip = createSipInstance();
sip.onIncomingCall((accept, decline, event) => {
    // accept()
    // decline()
});
```

#### call

Метод для совершения исходящего вызова. Принимает два параметра:

- номер телефона
- функция, которая будет вызвана в случае, если звонок приняли

```js
const sip = createSipInstance();
sip.call("79992223311", () => {
  // ... звонок приняли, идет разговор
});
```

## Пример использования

```js
// 1. create SDK instance
const sdk = createSipInstance({
  sipLogin: "[sip login]",
  sipPassword: "[sip password]",
})

// 2. registration
await sdk.register();

// 2. unregister
await sdk.unregister();

// 3. register callback for incoming call
sdk.onIncomingCall((accept, decline, event) => {
  // call accept() - for accept incoming call
  // call decline() - for decline incoming call
  console.log(event) // event object 
  console.log(event.session) // RTCSession object
});

// 4. make a call
const session = sdk.call("[target number like 79992223322]", () => {
  // on confirmed callback
})

// stop this call
session.terminate()

console.log(session) // RTCSession for call
```

## Демо

Проверить работу нашего демо приложения можно [здесь](https://mtsexolve.github.io/web-voice-sdk/)
