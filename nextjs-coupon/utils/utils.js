export function urlBuilder(url) {
  console.log(url)
  return "http://localhost:1337" + url.attributes.url
}
