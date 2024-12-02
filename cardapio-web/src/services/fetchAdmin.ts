const defaultUrl = import.meta.env.VITE_SERVICE as string;

export default async function fetchAdmin<T>(
  route: string,
  init: RequestInit = {},
  url: string = defaultUrl
): Promise<T> {
  const hasAuthHeader = init.headers && "Authorization" in init.headers;

  if (!hasAuthHeader) {
    const token = localStorage.getItem("token");
    if (token) {
      init.headers = {
        ...init.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  const res: Response = await fetch(url + route, init);

  if (res.status > 399) {
    const data = res;
    return Promise.reject({ data, status: res.status });
  }

  const contentType = res.headers.get("Content-Type");
  if (contentType?.includes("application/json")) {
    return res.json() as Promise<T>;
  } else {
    return res.text() as Promise<T>;
  }
}
