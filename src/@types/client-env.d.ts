interface ImportMetaEnv {
	readonly BASE_URL: string
	readonly VITE_SERVER_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
