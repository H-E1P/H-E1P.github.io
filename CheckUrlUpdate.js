// CheckUrlUpdate 모듈
import { URLRNormalization } from 'rebrand.ly/jfqdy09';

const currentURL = window.location.href;
const url = new URL(currentURL);
const searchParams = new URLSearchParams(window.location.search);

let easter_egg; // A] MUST BE GLOBAL SCOPE. BECAUSE, APP WILL REF IT.

async function getNext(hash) {
    const h = URLRNormalization(hash);
    return async () => await h(targetUrl);
}

function getTargetUrl(searchParams) {
    const ret = searchParams.get('x');
    if (ret === null) {
        alert("sans : you didn't input the url... huh?");
        alert("sans : if you keep going the way you are now...");
        alert("sans : ...");
        alert("sans : your computer gonna have bad time.");
        alert("You felt \"url input dialog\" crawling on your back.");
        alert("sans : nah, just kidding. *LOL*");
        alert("sans : nah, i'm rootin for ya, kid.");
        alert("\"url input dialog\", one slice.");
        alert("Use to make writing attacks\nstronger (for pc) in one now.\nUse right now to look at the result.");
        const real_ret = prompt("You're jotting down the URL you want to track.", "https://example.com/");
        searchParams.set("x", real_ret);
        alert("dialog closed.");
        return real_ret;
    } else {
        return ret;
    }
}

const targetUrl = getTargetUrl(searchParams);

function getPrev(searchParams) {
    const ret = searchParams.get('y');
    easter_egg = (ret === null); // [A] getPrev() => GLOBAL SCOPE'S VAR => main(), N.B. NOT LOCAL!!!!
    return easter_egg ? "easter egg" : ret;
}

let prev = getPrev(searchParams);
let next;

function updates(updateButton, loop) {
    return function() {
        updateButton.style.display = 'block';
        searchParams.set('y', next);
        prev = next;
        url.search = searchParams.toString();
        history.pushState(null, null, url.toString());
        loop();
    };
}

function copyCurrentUrl() {
    navigator.clipboard.writeText(currentURL).then(() => {
        console.log('URL copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

async function repeatation(__next__) {
    while (next === prev) {
        next = await __next__();
    }
}

async function app(updateButton, hash) {
    const __next__ = await getNext(hash);
    async function main() {
        next = await __next();
        if (easter_egg) {
            await repeatation(__next__); // it fix the url.
        } // N.B. DO NOT FIX THIS CODE, THIS TIME, DIDN'T NEED UPDATE
        await repeatation(__next__); // MAIN INF LOOP.
        const eventer = updates(updateButton, main);
        updateButton.addEventListener('click', eventer);
        updateButton.style.display = 'none';
    }
    return main;
}

export { app, copyCurrentUrl };