[@mts-exolve/web-voice-sdk](README.md) / Exports

# @mts-exolve/web-voice-sdk

## Table of contents

### Type Aliases

- [CreateSipInstanceProps](modules.md#createsipinstanceprops)
- [OnIncomingCallCbArgs](modules.md#onincomingcallcbargs)
- [SIPInstance](modules.md#sipinstance)

### Variables

- [Originator](modules.md#originator)

### Functions

- [createSipInstance](modules.md#createsipinstance)

## Type Aliases

### CreateSipInstanceProps

Ƭ **CreateSipInstanceProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `debug?` | `boolean` | Enable debug mode |
| `sipLogin` | `string` | SIP login |
| `sipPassword` | `string` | SIP password |
| `ssl?` | `boolean` | SSL mode (ws / wss mode) |

#### Defined in

index.ts:13

___

### OnIncomingCallCbArgs

Ƭ **OnIncomingCallCbArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event` | `IncomingRTCSessionEvent` |
| `accept` | () => `void` |
| `decline` | () => `void` |

#### Defined in

index.ts:32

___

### SIPInstance

Ƭ **SIPInstance**: `ReturnType`\<typeof [`createSipInstance`](modules.md#createsipinstance)\>

#### Defined in

index.ts:135

## Variables

### Originator

• `Const` **Originator**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LOCAL` | ``"local"`` |
| `REMOTE` | ``"remote"`` |
| `SYSTEM` | ``"system"`` |

#### Defined in

index.ts:7

## Functions

### createSipInstance

▸ **createSipInstance**(`props`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CreateSipInstanceProps`](modules.md#createsipinstanceprops) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `get SIPInstance()` | `UA` |
| `call` | (`target`: `string`, `onConfirmed?`: () => `void`) => `RTCSession` |
| `onIncomingCall` | (`cb`: (`args`: [`OnIncomingCallCbArgs`](modules.md#onincomingcallcbargs)) => `void`) => `void` |
| `register` | () => `Promise`\<`unknown`\> |
| `unregister` | () => `Promise`\<`unknown`\> |

#### Defined in

index.ts:38
