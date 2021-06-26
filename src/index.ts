import '../styles/index.scss';
import { App } from './App';

document.cookie = 'SameSite=Lax; SaneSite=Strict;';
document.cookie = 'document.cookie = "promo_shown=1; Max-Age=2600000; SameSite=None; Secure';

new App(document.querySelector('body')! as HTMLElement);
