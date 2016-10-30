

import { handler } from '../lib/functions';

function remove () {
  this.initialized = false;

  this.store.containers.forEach((container) => {
    if (container === document.documentElement) {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    } else {
      container.removeEventListener('scroll', handler);
      container.removeEventListener('resize', handler);
    }
  });
}

export default remove;
