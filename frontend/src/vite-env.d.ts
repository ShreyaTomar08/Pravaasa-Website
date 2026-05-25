/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BIGIN_CLIENT_ID: string
  readonly VITE_BIGIN_CLIENT_SECRET: string
  readonly VITE_BIGIN_REFRESH_TOKEN: string
  readonly VITE_BIGIN_PIPELINE_ID: string
  readonly VITE_BIGIN_STAGE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}