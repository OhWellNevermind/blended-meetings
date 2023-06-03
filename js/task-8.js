// Напишіть генератор url
function urlGenerator(domenName) {
    return function (url) {
        return ` https://${url}.${domenName}`;
  } 
}

const comUrl = urlGenerator("com");
console.log(comUrl("google"));
const netUrl = urlGenerator("net");
console.log(netUrl("ukr"));
const uaUrl = urlGenerator("ua");
console.log(uaUrl("dia"));
console.log(uaUrl("goit"));