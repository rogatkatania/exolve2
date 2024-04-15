import { action, computed, deepMap } from "nanostores";
import { createSipInstance } from "@mts-exolve/web-voice-sdk";
import { notificationService } from "@hope-ui/solid";
import { unregister } from "./sdk.ts";

const STORAGE_KEY = "settings";

export type Settings = {
sipUserName: string;
sipPassword: string;
};

function getQueryParams(): Settings {
const urlParams = new URLSearchParams(window.location.search);
const sipUserName = urlParams.get("sipUserName") || "";
const sipPassword = urlParams.get("sipPassword") || "";

return { sipUserName, sipPassword };
}

export const $settings = deepMap<Settings>(getQueryParams());

export const setupSettings = action($settings, "setupActions", async (store, settings: Settings) => {
const instance = createSipInstance({
ssl: true,
sipLogin: settings.sipUserName,
sipPassword: settings.sipPassword,
});

try {
await instance.register();
localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
store.set(settings);
await instance.unregister();
} catch (error) {
notificationService.show({
status: "danger",
title: "Ошибка",
description: "Данные некорректны или сервер недоступен",
});

console.log(error);
}
});

export const resetSettings = action($settings, "resetSettings", store => {
unregister().catch();
localStorage.removeItem(STORAGE_KEY);
store.set({ sipUserName: "", sipPassword: "" });
});

export const $settingsReady = computed($settings, settings => Object.keys(settings).length > 0);
