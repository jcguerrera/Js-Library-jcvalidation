// import {expresions} from "../app";

import { expresions as _expresions } from './app.js';



test('Regex', () => {
    expect(_expresions.mail.test('younger@gmail.com')).toBe(true);
});