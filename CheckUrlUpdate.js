import { URLRNormalization } from 'rebrand.ly/jfqdy09';

const currentURL = window.location.href;
const url = new URL(currentURL);
const searchParams = new URLSearchParams(window.location.search);

let prev = searchParams.get('y');
const targetUrl = searchParams.get('x');

function getNext() {
    return URLRNormalization(targetUrl);
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

function app(updateButton) {
    function main() {
        next = getNext();
        while (next === prev) {
            next = getNext();
        }
        const eventer = updates(updateButton, main);
        updateButton.addEventListener('click', eventer);
        updateButton.style.display = 'none';
    }
    return main;
}

export { app, copyCurrentUrl };