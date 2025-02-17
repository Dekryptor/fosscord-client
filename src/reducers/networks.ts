import FosscordLogo from "../assets/logo_big_transparent.png";

export function networks(
	state = [
		{
			id: "0",
			config: {},
			verified: true,
			name: "Fosscord",
			invite: "fosscord.com",
			api: "https://fosscord.com/api",
			version: 8,
			description: "Offical fosscord.com network",
			cdn: "https://cdn.fosscord.com",
			gateway: "wss://fosscord.com",
			host: "fosscord.com",
			icon: FosscordLogo,
			splash: "https://images.opencollective.com/discordhooks/1f8f486/background.png",
		},
		{
			id: "1",
			config: {},
			verified: true,
			discord: true,
			name: "Discord",
			description: "Offical discord.com network",
			invite: "discord.gg",
			api: "https://discord.com/api",
			cdn: "https://cdn.discordapp.com",
			gateway: "wss://gateway.discord.gg",
			host: "discord.com",
			version: 9,
			icon: "https://logopng.net/wp-content/uploads/2020/07/logo-discord-png-icon-6.png",
			splash:
				"https://preview.redd.it/4zh2hgl46cp51.png?width=3325&format=png&auto=webp&s=b9123bff12e1d5b86248d27a059104b4c92e05b5",
			termsOfService: "https://discord.com/terms",
		},
		{
			id: "-1",
			verified: false,
			name: "Localhost",
			invite: "localhost",
			api: "http://localhost:1000/api",
			gateway: "ws://localhost:2000",
			version: 8,
			description: "Only for testing purposes",
			cdn: "http://localhost",
			host: "localhost",
		},
	],
	action: any
) {
	switch (action.type) {
		case "ADD_NETWORK":
			return [...state, action.payload];
		case "REMOVE_NETWORK":
			return state.filter((x) => x !== action.payload);
		default:
			return state;
	}
}

export interface NetworkState {
	networks: Network[];
}

export interface Network {
	id: string;
	config: any; // TODO
	invite: string;
	gateway: string;
	discord: boolean; // if it is the offical disocrd instance, used for backwards compatibility
	api: string;
	cdn: string;
	host: string;
	version: number;
	verified: boolean;
	name?: string;
	description?: string;
	splash?: string;
	icon?: string;
	termsOfService?: string;
}
