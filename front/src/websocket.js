import frontProperties from "./front.properties.json";

export var ws = new WebSocket(`${frontProperties.ws_base_url}chat`);
