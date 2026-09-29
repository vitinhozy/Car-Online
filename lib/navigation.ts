export function currentRoute(){return new URL(location.hash.startsWith('#/')?location.hash.slice(1):'/en', 'https://demo.invalid');}
export function navigate(path:string){location.hash=path.startsWith('#')?path.slice(1):path;}
export function asset(path:string){return new URL(import.meta.env.BASE_URL+path.replace(/^\//,''),document.baseURI).href;}
