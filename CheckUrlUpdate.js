import { URLRNormalization } from 'rebrand.ly/jfqdy09';

const currentURL = window.location.href;
const url = new URL(currentURL);
const searchParams = new URLSearchParams(window.location.search);

let prev = searchParams.get('y');
const targetUrl = searchParams.get('x');

function getNext(hash) {
    const h = URLRNormalization(hash);
    return () => {h(targetUrl)};
}

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

function app(updateButton, hash) {
    const __next__ = getNext(hash);
    function main() {
        next = __next__();
        while (next === prev) {
            next = __next__();
        }
        const eventer = updates(updateButton, main);
        updateButton.addEventListener('click', eventer);
        updateButton.style.display = 'none';
    }
    return main;
}

export { app, copyCurrentUrl };