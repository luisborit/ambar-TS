export interface HostingServer {
  host: (endpoint: CoreEndpoint) => Promise<void>
}

export interface CoreEndpoint<Request = CoreRequest, Response = CoreResponse, Handler = CoreEndpointHandler<Request, Response>> {
  start?: () => Promise<void>
  stop?: () => Promise<void>

  all?: Handler
  delete?: Handler
  get?: Handler
  head?: Handler
  patch?: Handler
  post?: Handler
  put?: Handler
}

export type CoreEndpointHandler<Request = CoreRequest, Response = CoreResponse> = (request: Request, next: InvokeNext, ...args: any[]) => Promise<Response>

export type InvokeNext = () => void

export interface CoreRequest {
  body: any
  headers: Record<string, string | string[] | undefined>
  method: EndpointMethod
  pathname: string
  search: string
  searchParams: Record<string, string>
}

export type EndpointMethod = 'all' | 'delete' | 'get' | 'head' | 'patch' | 'post' | 'put'

export interface CoreResponse {
  body?: any
  headers?: CoreResponseHeaders
  status: number
}

export type CoreResponseHeaders = Partial<Record<HttpResponseHeaders, string>>

export type HttpResponseHeaders =
  | 'accept-ch'
  | 'accept-patch'
  | 'accept-ranges'
  | 'access-control-allow-credentials'
  | 'access-control-allow-headers'
  | 'access-control-allow-methods'
  | 'access-control-allow-origin'
  | 'access-control-expose-headers'
  | 'access-control-max-age'
  | 'age'
  | 'allow'
  | 'alt-svc'
  | 'cache-control'
  | 'connection'
  | 'content-disposition'
  | 'content-encoding'
  | 'content-language'
  | 'content-length'
  | 'content-location'
  | 'content-md5'
  | 'content-range'
  | 'content-type'
  | 'date'
  | 'delta-base'
  | 'etag'
  | 'expires'
  | 'im'
  | 'last-modified'
  | 'link'
  | 'location'
  | 'p3p'
  | 'pragma'
  | 'preference-applied'
  | 'proxy-authenticate'
  | 'public-key-pins'
  | 'retry-after'
  | 'server'
  | 'set-cookie'
  | 'strict-transport-security'
  | 'tk'
  | 'trailer'
  | 'transfer-encoding'
  | 'upgrade'
  | 'vary'
  | 'via'
  | 'warning'
  | 'www-authenticate'
  | 'x-frame-options'
